import { createContext, useContext, useState } from "react";
import { ethers } from "ethers";
const Context = createContext();

export function AddressProvider({ children }) {
    const [walAddress, setWalAddress] = useState("WalAdd");
    const [walNo, setWalNo] = useState("WalNo");
    // const provider = new ethers.providers.Web3Provider(window.ethereum)
  return (
    <Context.Provider value={ { walAddress: [walAddress, setWalAddress], walNo:[walNo, setWalNo] }}>{children}</Context.Provider>
  );
}
  
// const value = {
//     walAddress,
  
//  }
export function useAddressContext() {
  return useContext(Context);
}