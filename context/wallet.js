import { createContext, useContext, useState } from "react";
import { ethers } from "ethers";
const Context = createContext();

export function AddressProvider({ children }) {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const [prov, setProv] = useState(provider);
    const [walNo, setWalNo] = useState("WalNo");
  return (
    <Context.Provider value={ { prov: [prov, setProv], walNo:[walNo, setWalNo] }}>{children}</Context.Provider>
  );
}

export function useAddressContext() {
  return useContext(Context);
}