import { Button, Link } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useSendTransaction } from 'wagmi'
import { BigNumber } from '@ethersproject/bignumber'
import type { NextPage } from 'next'
import { Box, Flex, HStack, Stack, Text } from '@chakra-ui/layout'
import { Heading, Flex, Text } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'
import React, {useState, useEffect} from 'react';

const About: NextPage = ({contract}) => {
  const [users, setUsers] = useState([])
  const fetchData = () => {
    fetch("https://18.207.203.30/")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div className={styles.container}>
      <Head>
        <title>TALCC Home</title>
        <meta name="description" content="TALCC APP" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2 className={styles.title}>
          Submission Results
        </h2>

        <div className={styles.grid}>
        <Link href='https://etherscan.io/address/0xddcb25183b64f8fa4d6938840bcd203901d0d433#code' isExternal>
          <Button
            backgroundColor="#BB86FC"
            borderRadius="25px"
            margin={2.5}
            _hover={{
              bg: '#121212'
            }}
            _active={{
              bg: '#121212'
            }}
          >
            <p>0xddCb2518...</p>
          </Button>
        </Link>
        <p><Box fontWeight="bold">Time 2:38pm, Found Contract {users.name} </Box></p>
        </div>

        <div className={styles.grid}>
        <Link href='https://twitter.com' isExternal>
          <Button
            backgroundColor="#32CD32"
            borderRadius="25px"
            margin={2.5}
            _hover={{
              bg: '#121212'
            }}
            _active={{
              bg: '#121212'
            }}
          >
            <p>0xB29b073e...</p>
          </Button>
        </Link>
        <p><Box fontWeight="bold">Time 3:52pm, Found Contract is Not Hazardous </Box></p>
        </div>

        <div className={styles.grid}>
        <Link href='https://twitter.com' isExternal>
          <Button
            backgroundColor="#BB86FC"
            borderRadius="25px"
            margin={2.5}
            _hover={{
              bg: '#121212'
            }}
            _active={{
              bg: '#121212'
            }}
          >
            <p>0xA1033592...</p>
          </Button>
        </Link>
        <p><Box fontWeight="bold">Time 1:26pm, Found Contract is Not Hazardous </Box></p>
        </div>

          <div className={styles.grid}>
          <Link href='/submission' isInternal>
            <Button
              backgroundColor="#32CD32"
              borderRadius="25px"
              margin={2.5}
              _hover={{
                bg: '#121212'
              }}
              _active={{
                bg: '#121212'
              }}
              onClick={() => sendTransaction()}
            >
              <p>0xB7DD3DA...</p>
            </Button>
          </Link>
            <p><Box fontWeight="bold">Time 1:11pm, Found Contract is Not Hazardous </Box></p>
         </div>
      </main>
    </div>
  )
}
export default About
