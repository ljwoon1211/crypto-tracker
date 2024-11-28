import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"
import styled from "styled-components"

export default function Coins(){
  const Container =styled.div`
    padding: 0px 20px;
    max-width: 480px;
    margin: 0 auto;
  `;

  const Header = styled.header`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const CoinsList = styled.ul``;

  const Coin = styled.li`
    background-color:white;
    color:${props=>props.theme.bgColor};
    border-radius: 15px;
    margin-bottom: 10px;
    a{
      padding: 20px;
      transition: color 0.2s ease-in;
      display: block;
    }
    &:hover{
      a{
        color:${
          props => props.theme.accentColor
        }
      }
    }
  `;

  const Title =  styled.h1`
    color:${props=>props.theme.accentColor};
  `;

  // const coins:CoinInterface[] = [
  //   {
  //     id: "btc-bitcoin",
  //     name: "Bitcoin",
  //     symbol: "BTC",
  //     rank: 1,
  //     is_new: false,
  //     is_active: true,
  //     type: "coin",
  //   },
  //   {
  //     id: "eth-ethereum",
  //     name: "Ethereum",
  //     symbol: "ETH",
  //     rank: 2,
  //     is_new: false,
  //     is_active: true,
  //     type: "coin",
  //   },
  //   {
  //     id: "hex-hex",
  //     name: "HEX",
  //     symbol: "HEX",
  //     rank: 3,
  //     is_new: false,
  //     is_active: true,
  //     type: "token",
  //   },
  // ]

  const Loader = styled.span`
    text-align: center;
    display: block;
  `

  interface CoinInterface {
      id: string,
      name: string,
      symbol: string,
      rank: number,
      is_new: boolean,
      is_active: true,
      type: string,
  }

  const [coins, setCoins]= useState<CoinInterface[]>([])
  const [loading,setLoading]= useState<boolean>(true)

  useEffect(()=>{
    (async()=>{
      const response = await fetch("https://api.coinpaprika.com/v1/coins")
      const json = await response.json()
      console.log(json)
      setCoins(json.slice(0,100))
    })();
  },[])

  return (
    <Container>
      <Header>
        <Title>코인들입니다.</Title>
      </Header>
      {
        loading ? 
          <Loader>"loading"</Loader>
        :
      (
      <CoinsList>
        {coins.map((coin)=><Coin key={coin.id}><Link to={`btc/${coin.id}`}>{coin.name} &rarr;</Link></Coin>)}
      </CoinsList>
      )}
    </Container>
  )
}