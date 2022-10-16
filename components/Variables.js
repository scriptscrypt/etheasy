import { ethers } from "ethers";
//Metamask integration
export const provider = new ethers.providers.Web3Provider(window.ethereum)
export const signer = provider.getSigner()
