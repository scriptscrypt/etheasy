import { ethers } from "ethers";

import MainLayout from "../../layouts/MainLayout"
import Cards from "../../components/Card"
import dynamic from "next/dynamic";
import { Group } from "@mantine/core";
import { useState } from "react";

export default function Provider() {

  const provider = new ethers.providers.Web3Provider(window.ethereum)
  
  const DynamicCards = dynamic(() => import('../../components/Card'), {
    ssr: false,
  })

  const conWal = async () =>{
    try{
      await provider.send("eth_requestAccounts", [])
    }
    catch(err){
      console.log(err)
    }
  }

  return (
    <>
    <Group>

      <DynamicCards btnName="Connect Wallet"
        code={conWal}
        offLink="https://docs.ethers.io/v5/getting-started/#getting-started--connecting" />
    </Group>
    
    </>
  )
}

Provider.Layout = MainLayout; 