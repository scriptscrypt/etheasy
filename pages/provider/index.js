import { ethers } from "ethers";
import MainLayout from "../../layouts/MainLayout"
import Cards from "../../components/Card"
import dynamic from "next/dynamic";
import { Group } from "@mantine/core";
import { useState } from "react";

export default function Provider() {
  
  const [accAdd, setAccAdd] = useState([])
  const [balance, setBalance] = useState()
  
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  
  const DynamicCards = dynamic(() => import('../../components/Card'), {
    ssr: false,
  })

  const conWal = async () =>{
    try{
      setAccAdd(await provider.send("eth_requestAccounts", []))
      console.log(accAdd)
    }
    catch(err){
      console.log(err)
    }
  }
  const getBal = async () =>{
    try{
      setBalance(await provider.getBalance(accAdd[0]))
    }
    catch(err){
      console.log(err)
    }
  }

  return (
    <>
    <Group position="center"  spacing="xs">
    
      <DynamicCards btnName="Connect Wallet"
        data={accAdd}
        func={conWal}
        code={`await provider.send("eth_requestAccounts", [])`}
        offLink="https://docs.ethers.io/v5/getting-started/#getting-started--connecting" />

      <DynamicCards btnName="Get balance"
        data = {balance}
        func={getBal}
        code={getBal}
        offLink="https://docs.ethers.io/v5/getting-started/#getting-started--querying" />
    </Group>
    
    </>
  )
}

Provider.Layout = MainLayout; 