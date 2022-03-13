import { ethers } from "ethers";

import abi from "../utils/Keyboards.json"

const contractAddress = '0xefF7380A098C01430d12B9864462bB16443eEb4a';
const contractABI = abi.abi;

export default function getKeyboardsContract(ethereum) {
  if(ethereum) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
  } else {
    return undefined;
  }
}
