import { Button, Link } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useSendTransaction } from 'wagmi'
import { BigNumber } from '@ethersproject/bignumber'
import React, {useState} from 'react';
import { NextPage } from './submission';
import {Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Box, Text, Textarea } from '@chakra-ui/layout'
import { useAccount } from 'wagmi'


const Home: NextPage = () => {
  const [contract, setContract] = useState(null);
  const [my_text, setText] = useState('Contract info will appear here')
  const { data: accountData } = useAccount();
  console.log(accountData?.address)
  const handleContractChange = (e) => {
    setContract(e.target.value);
  };
	async function api_send(contract_text) {
	/* 	if (!canUseStar){
			alert("You have no more words on this plan! Upgrade or buy words to use this feature")
			return;
		} */
		let fetch_string = "http://catfact.ninja/fact?max_length=140" //"0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d"
		fetch_string = fetch_string + contract_text?.trim()
		const es = await fetch(fetch_string);
		const r_json = await(es.json())
		console.log(r_json)
		let final_string = String(r_json)
		if (final_string?.trim() == '[object Object]') final_string = "Not_found"
		setText(final_string)
	};
  return (
    <div className={styles.container}>
      <Head>
        <title>TALCC Home</title>
        <meta name="description" content="TALCC APP" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2 className={styles.title}>
          Enter Address
        </h2>
		<Box p={2} fontWeight="bold"> </Box>
		<input
        type="text"
		style={{width: "370px", color: 'black', height: '30px'}}
        placeholder=" Contract name"
        value={contract}
        onChange={handleContractChange}
		/>

        <div className={styles.grid}>

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
              onClick={() => api_send(contract)}
            >
              <p>Submit Address</p>
            </Button>
        </div>
      </main>
	  	  	<div>
	<Text mb='8px'>Contract safety: {my_text}</Text>
	</div>
    </div>
  )
}

export default Home
