import { useState } from "react";
import Link from "next/link"
import {Box, NavLink, Group} from "@mantine/core"

export default function MainLayout({children}) {

  const [active, setActive] = useState("light");

  
  return (
    <>
      <Group>
            <Group>
                <Box sx={{ width: 240 }} >
                    <Link href="/provider"><NavLink label="Provider Events" variant="light" /></Link>        
                    <Link href="/contract"><NavLink label="Contract Events" variant="light" /></Link>
                    <Link href="/signer"><NavLink label="Signer Events" variant="light" /></Link>
                    {/* <Link href="/signer"><NavLink label="Signer Events" variant="light" 
                    active={active}
                    onClick={() => setActive(true)}/></Link> */}
                    
                </Box>
            </Group>

            <Group>
                {children}
            </Group>
      </Group>
    </>
  )
}
