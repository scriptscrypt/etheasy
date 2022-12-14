import { Button, Group, Text, Alert, Modal} from "@mantine/core";

import { useState } from "react";
// import {provider} from "../Variables"
import { ethers } from "ethers";
import Image from "next/image";
import logo from "../../public/images/svgs/logo.svg"
import Link from "next/link";

export default function Navbar() {
    const [walAddress, setWalAddress] = useState("");
    const [opened, setOpened] = useState(false);
    const [btnVisibility, setBtnVisibility] = useState(false);
    const [errMsg, setErrMsg] = useState("")

    const provider = new ethers.providers.Web3Provider(window.ethereum)

    const conWal = async () =>{
      try{
      setWalAddress(await provider.send("eth_requestAccounts", []))
      setBtnVisibility(true)
      }
      catch(err){
        if(err.code){
          setOpened(true)
          setErrMsg(err.message)
        }
      } 
    }

  return (
    <>
    <Group position="apart" m="16px"> 
        <Link href="/" >
            <Image src={logo} height="32px" className="pointer"/>
        </Link>

        <Group>  
            {walAddress}
            <Button disabled={btnVisibility} onClick={conWal}>Connect wallet</Button>
        </Group>

    </Group> 

    <Modal opened={opened} onClose={() => setOpened(false)} title="Metamask - RPC error">
        
        <Alert title="Please check your Metamask wallet" color="red">
        {errMsg}
        </Alert>

    </Modal>
    </>
  )
}
