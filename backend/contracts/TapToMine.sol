// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TapToMine {
    address public owner;
    uint256 public rewardPer1000Taps = 0.001 ether; // 0.001 Sepolia ETH per 1000 taps
    uint256 public dailyBonus = 0.005 ether; // 0.005 Sepolia ETH daily bonus
    uint256 public weeklyBonus = 0.01 ether; // 0.01 Sepolia ETH weekly bonus
    uint256 public bonusPeriod = 1 days; // 1 day
    uint256 public weeklyTarget = 150000; // Weekly target clicks
    uint256 public weeklyPeriod = 168 hours; // 1 week
    uint256 public tapsPerReward = 1000; // Taps needed for reward
    uint256 public maxTapsPerHour = 3000; // Max taps allowed per hour
    uint256 public hourDuration = 1 hours; // 1 hour duration
    mapping(address => uint256) public userBalances;
    mapping(address => Player) public players;
    mapping(address => uint256) public lastLogin;
    mapping(address => uint256) public weeklyStart; // Track weekly start time
    mapping(address => uint256) public hourStart; // Track hourly start time
    mapping(address => uint256) public hourTaps; // Track taps within the hour
    address[] public playerAddresses;

    struct Player {
        address playerAddress;
        uint256 earnings;
        uint256 clicks;
        uint256 pendingTaps;
        uint256 totalTaps; // Track total taps
    }

    enum League { Intern, JuniorDev, SeniorDev, CTO } // Enum for leagues

    event Tap(address indexed user, uint256 reward);
    event Withdraw(address indexed user, uint256 amount);
    event FundContract(address indexed sender, uint256 amount);
    event UpdateReward(address indexed owner, uint256 newReward);
    event UserWithdraw(address indexed user, uint256 amount);
    event ClaimDailyBonus(address indexed user, uint256 bonus);
    event UpdateDailyBonus(address indexed owner, uint256 newBonus);
    event ClaimWeeklyBonus(address indexed user, uint256 bonus);
    event UpdateWeeklyBonus(address indexed owner, uint256 newBonus);
    event RewardClaimed(address indexed user, uint256 reward);
    event TapLimitReached(address indexed user, uint256 remainingTime);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function tap() external {
        Player storage player = players[msg.sender];
        player.playerAddress = msg.sender;

        if (hourStart[msg.sender] == 0 || block.timestamp - hourStart[msg.sender] >= hourDuration) {
            // Reset the hourly start time and tap count if the hour has passed or if it's the first tap
            hourStart[msg.sender] = block.timestamp;
            hourTaps[msg.sender] = 0;
        }

        require(hourTaps[msg.sender] < maxTapsPerHour, "Max taps per hour reached. Try again later.");

        player.pendingTaps += 1;
        player.clicks += 1;
        player.totalTaps += 1; // Increment total taps
        hourTaps[msg.sender] += 1;

        if (player.clicks == 1) {
            playerAddresses.push(msg.sender);
            weeklyStart[msg.sender] = block.timestamp; // Initialize weekly start time
        }

        if (player.pendingTaps >= tapsPerReward) {
            claimReward();
        }

        lastLogin[msg.sender] = block.timestamp; // Update last login time

        // Debugging Information
        emit Tap(msg.sender, rewardPer1000Taps);
    }

    function claimReward() public {
        Player storage player = players[msg.sender];
        require(player.pendingTaps >= tapsPerReward, "Not enough taps to claim reward");

        uint256 reward = rewardPer1000Taps;
        require(address(this).balance >= reward, "Insufficient contract balance to reward");

        userBalances[msg.sender] += reward;
        player.earnings += reward;
        player.pendingTaps -= tapsPerReward;

        emit RewardClaimed(msg.sender, reward);
    }
    function claimDailyBonus() external {
        require(block.timestamp - lastLogin[msg.sender] >= bonusPeriod, "Daily bonus already claimed for today");
        require(address(this).balance >= dailyBonus, "Insufficient contract balance to reward");

        userBalances[msg.sender] += dailyBonus;
        emit ClaimDailyBonus(msg.sender, dailyBonus);

        lastLogin[msg.sender] = block.timestamp; // Update last login time
    }

    function claimWeeklyBonus() external {
        Player storage player = players[msg.sender];
        require(player.clicks >= weeklyTarget, "Weekly target not reached");
        require(block.timestamp - weeklyStart[msg.sender] <= weeklyPeriod, "Weekly target period has expired");

        require(address(this).balance >= weeklyBonus, "Insufficient contract balance to reward");
        userBalances[msg.sender] += weeklyBonus;
        emit ClaimWeeklyBonus(msg.sender, weeklyBonus);

        player.clicks = 0; // Reset clicks for the new week
        weeklyStart[msg.sender] = block.timestamp; // Reset weekly start time
    }

    function ownerWithdraw() external onlyOwner {
        uint256 amount = address(this).balance;
        require(amount > 0, "No balance to withdraw");

        payable(owner).transfer(amount);
        emit Withdraw(owner, amount);
    }

    function userWithdraw() external {
        uint256 amount = userBalances[msg.sender];
        require(amount > 0, "No balance to withdraw");

        userBalances[msg.sender] = 0;
        payable(msg.sender).transfer(amount);
        emit UserWithdraw(msg.sender, amount);
    }

    function fundContract() external payable onlyOwner {
        emit FundContract(msg.sender, msg.value);
    }

    function updateRewardPerTap(uint256 newReward) external onlyOwner {
        rewardPer1000Taps = newReward;
        emit UpdateReward(owner, newReward);
    }

    function updateDailyBonus(uint256 newBonus) external onlyOwner {
        dailyBonus = newBonus;
        emit UpdateDailyBonus(owner, newBonus);
    }

    function updateWeeklyBonus(uint256 newBonus) external onlyOwner {
        weeklyBonus = newBonus;
        emit UpdateWeeklyBonus(owner, newBonus);
    }

    function getTopPlayers(uint256 count) public view returns (Player[] memory) {
        require(count <= playerAddresses.length, "Not enough players");

        Player[] memory topPlayers = new Player[](count);
        for (uint256 i = 0; i < playerAddresses.length; i++) {
            for (uint256 j = 0; j < count; j++) {
                if (topPlayers[j].earnings < players[playerAddresses[i]].earnings) {
                    for (uint256 k = count - 1; k > j; k--) {
                        topPlayers[k] = topPlayers[k - 1];
                    }
                    topPlayers[j] = players[playerAddresses[i]];
                    break;
                }
            }
        }
        return topPlayers;
    }

    function getUserLeague(address user) public view returns (League) {
        uint256 totalTaps = players[user].totalTaps;
        if (totalTaps < 10000) {
            return League.Intern;
        } else if (totalTaps < 50000) {
            return League.JuniorDev;
        } else if (totalTaps < 500000) {
            return League.SeniorDev;
        } else {
            return League.CTO;
        }
    }

    receive() external payable {
        emit FundContract(msg.sender, msg.value);
    }
}