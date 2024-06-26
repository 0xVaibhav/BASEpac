export const contractAbi = [
    {
      "type": "constructor",
      "name": "",
      "inputs": [],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "event",
      "name": "ClaimDailyBonus",
      "inputs": [
        {
          "type": "address",
          "name": "user",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "bonus",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "ClaimWeeklyBonus",
      "inputs": [
        {
          "type": "address",
          "name": "user",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "bonus",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "FundContract",
      "inputs": [
        {
          "type": "address",
          "name": "sender",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "amount",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "RewardClaimed",
      "inputs": [
        {
          "type": "address",
          "name": "user",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "reward",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "Tap",
      "inputs": [
        {
          "type": "address",
          "name": "user",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "reward",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "TapLimitReached",
      "inputs": [
        {
          "type": "address",
          "name": "user",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "remainingTime",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "UpdateDailyBonus",
      "inputs": [
        {
          "type": "address",
          "name": "owner",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "newBonus",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "UpdateReward",
      "inputs": [
        {
          "type": "address",
          "name": "owner",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "newReward",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "UpdateWeeklyBonus",
      "inputs": [
        {
          "type": "address",
          "name": "owner",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "newBonus",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "UserWithdraw",
      "inputs": [
        {
          "type": "address",
          "name": "user",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "amount",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "Withdraw",
      "inputs": [
        {
          "type": "address",
          "name": "user",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "amount",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "function",
      "name": "bonusPeriod",
      "inputs": [],
      "outputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "claimDailyBonus",
      "inputs": [],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "claimReward",
      "inputs": [],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "claimWeeklyBonus",
      "inputs": [],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "dailyBonus",
      "inputs": [],
      "outputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "fundContract",
      "inputs": [],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "getTopPlayers",
      "inputs": [
        {
          "type": "uint256",
          "name": "count",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "type": "tuple[]",
          "name": "",
          "components": [
            {
              "type": "address",
              "name": "playerAddress",
              "internalType": "address"
            },
            {
              "type": "uint256",
              "name": "earnings",
              "internalType": "uint256"
            },
            {
              "type": "uint256",
              "name": "clicks",
              "internalType": "uint256"
            },
            {
              "type": "uint256",
              "name": "pendingTaps",
              "internalType": "uint256"
            },
            {
              "type": "uint256",
              "name": "totalTaps",
              "internalType": "uint256"
            }
          ],
          "internalType": "struct TapToMine.Player[]"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getUserLeague",
      "inputs": [
        {
          "type": "address",
          "name": "user",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "type": "uint8",
          "name": "",
          "internalType": "enum TapToMine.League"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "hourDuration",
      "inputs": [],
      "outputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "hourStart",
      "inputs": [
        {
          "type": "address",
          "name": "",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "hourTaps",
      "inputs": [
        {
          "type": "address",
          "name": "",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "lastLogin",
      "inputs": [
        {
          "type": "address",
          "name": "",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "maxTapsPerHour",
      "inputs": [],
      "outputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "owner",
      "inputs": [],
      "outputs": [
        {
          "type": "address",
          "name": "",
          "internalType": "address"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "ownerWithdraw",
      "inputs": [],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "playerAddresses",
      "inputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "type": "address",
          "name": "",
          "internalType": "address"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "players",
      "inputs": [
        {
          "type": "address",
          "name": "",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "type": "address",
          "name": "playerAddress",
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "earnings",
          "internalType": "uint256"
        },
        {
          "type": "uint256",
          "name": "clicks",
          "internalType": "uint256"
        },
        {
          "type": "uint256",
          "name": "pendingTaps",
          "internalType": "uint256"
        },
        {
          "type": "uint256",
          "name": "totalTaps",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "rewardPer1000Taps",
      "inputs": [],
      "outputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "tap",
      "inputs": [],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "tapsPerReward",
      "inputs": [],
      "outputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "updateDailyBonus",
      "inputs": [
        {
          "type": "uint256",
          "name": "newBonus",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "updateRewardPerTap",
      "inputs": [
        {
          "type": "uint256",
          "name": "newReward",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "updateWeeklyBonus",
      "inputs": [
        {
          "type": "uint256",
          "name": "newBonus",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "userBalances",
      "inputs": [
        {
          "type": "address",
          "name": "",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "userWithdraw",
      "inputs": [],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "weeklyBonus",
      "inputs": [],
      "outputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "weeklyPeriod",
      "inputs": [],
      "outputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "weeklyStart",
      "inputs": [
        {
          "type": "address",
          "name": "",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "weeklyTarget",
      "inputs": [],
      "outputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "receive",
      "name": "",
      "inputs": [],
      "outputs": [],
      "stateMutability": "payable"
    }
  ] as const;