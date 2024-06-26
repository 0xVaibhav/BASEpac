import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { contractAbi } from "./contractAbi";

const contractaddress = "0x096D43Edaf38D90AE88eCcbbB742FAB5a0e5d797";

export const contract = getContract({
    client: client,
    chain: chain,
    address:  contractaddress,
    abi: contractAbi,
});