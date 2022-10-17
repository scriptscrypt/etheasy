import { ethers } from "ethers";
import MainLayout from "../../layouts/MainLayout"
import Cards from "../../components/Card"
import dynamic from "next/dynamic";
import { Group, Modal, Alert } from "@mantine/core";
import { useRef, useState } from "react";

export default function Provider() {
  
  const [accAdd, setAccAdd] = useState([])
  const [opened, setOpened] = useState(false)
  const [err, setErr] = useState()
  const [code, setCode] = useState()
  const [tCount, setTCount] = useState()
  
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
      setErr(err.message)
      setOpened(true)
    }
  }
  const getContractCode = async () =>{
    try{
      setCode(await provider.getCode(accAdd[0]))
    }
    catch(err){
      console.log(err)
      setErr(err.message)
      setOpened(true)
    }
  }
  const getTCount = async () =>{
    try{
      setTCount(await provider.getTransactionCount(accAdd[0]))
    }
    catch(err){
      console.log(err)
      setErr(err.message)
      setOpened(true)
    }
  }

  return (
    <>
    <Group position="center">
    
      <DynamicCards btnName="Connect wallet"
        data={accAdd}
        func={conWal}
        code={`await provider.send("eth_requestAccounts", [])`}
        offLink="https://docs.ethers.io/v5/getting-started/#getting-started--connecting" />

      <DynamicCards btnName="Get code"
        data = {code}
        func={getContractCode}
        code={`await provider.getCode(<account address>)`}
        offLink="https://docs.ethers.io/v5/api/providers/provider/#Provider-getCode" />

      <DynamicCards btnName="Get transaction count"
        data = {tCount}
        func={getTCount}
        code={`await provider.getTransactionCount(<account address>)`}
        offLink="https://docs.ethers.io/v5/api/providers/provider/#Provider-getTransactionCount" />

        
    </Group>
    
    <Modal opened={opened} onClose={() => setOpened(false)} title="Error">
    
    <Alert title="Please check the developer console for more details" color="red">
    {err}
    </Alert>

    </Modal>
    </>
  )
}

Provider.Layout = MainLayout; 