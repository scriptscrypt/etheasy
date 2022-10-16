import Head from 'next/head'
import Image from 'next/image'
import Cards from '../components/Card'
import styles from '../styles/Home.module.css'
import {Group, Box, NavLink } from "@mantine/core"
import MainLayout from '../layouts/MainLayout'
import Provider from './provider'
import dynamic from 'next/dynamic'

export default function Home() {

  const DynamicProvider = dynamic(() => import('../pages/provider/index'), {
    ssr: false,
  })

  return (
    <>
      Main index js
      <DynamicProvider/>
    </>
    )
}
