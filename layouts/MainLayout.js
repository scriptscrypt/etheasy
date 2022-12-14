import { useState } from "react";
import Link from "next/link"
import {Box, NavLink, Group} from "@mantine/core"

export default function MainLayout({children}) {

  const [active, setActive] = useState("light");

  
  return (
    <>
      <Group>
            <Group position="left" ml="8px">
                <Box sx={{ width: 240 }} >
                    <NavLink label="Provider Events" variant="light">
                      <Link href="/provider"><NavLink label="Provider" variant="light"/></Link>
                      <Link href="/ens"><NavLink label="ENS methods" variant="light"/></Link>
                    </NavLink>       
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
