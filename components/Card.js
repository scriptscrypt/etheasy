import { Card, Text, Badge, Button, Group, Modal} from '@mantine/core';
import { useState } from 'react';
import Image from 'next/image';
import iconExtLink from "../public/images/svgs/iconExternalLink.svg"
import iconCopy from "../public/images/svgs/iconCopy.svg"
import { ethers } from 'ethers';

export default function Cards(props) {
    
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const [opened, setOpened] = useState(false);
    const [opened2, setOpened2] = useState(false);

  //Copy to clipboard
  function copy(){
      navigator.clipboard.writeText(
       props.code
      )
  }
  //Function to handle click
  // const handleClick = () =>{
  //   try{
  //     props.code
  //     console.log(props.code)
  //     }
  //   catch(err){
  //     console.log(err)
  //   }
  // }

  return (
    <>

    <Card shadow="xs" p="lg" radius="md"  withBorder>
      

      <Button onClick={props.code}  color="blue" fullWidth mt="md" radius="md">
        {props.btnName}
      </Button>
          <Group position="apart" mt="md" mb="xs">
          
          <Button onClick={() => setOpened(true)} variant="light" color="blue"  mt="md" radius="md">
           {`<> Get code`}
          </Button>
          
          <Text variant="link" target="_blank" mt="md" radius="md" component="a" href={props.offLink}>
          <Group> Documentation <Image src={iconExtLink} width="24px"/></Group>
          </Text>
        
          </Group>
    </Card>
    
    <Modal opened={opened} onClose={() => setOpened(false)} title="Code">
   
    <Group position='center' >
      {props.code}
      <Button variant='light' fullWidth onClick={copy}>
      <Group>
        Copy to clipboard 
      <Image src={iconCopy} width="16px" height="16px"/>
      </Group>
      </Button>
    </Group>
    </Modal>

    </>
  )
}
