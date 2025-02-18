"use strict";(self.webpackChunkcrypto_tracker=self.webpackChunkcrypto_tracker||[]).push([[409],{409:(e,n,t)=>{t.r(n),t.d(n,{default:()=>f});t(43);var i=t(475),c=t(464),o=t(291),r=t(11),s=t(591),a=t(831),l=t(290),h=t(579);const d=c.Ay.div`
    padding: 0px 20px;
    max-width: 480px;
    margin: 0 auto;
`,p=c.Ay.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`,x=c.Ay.ul``,u=c.Ay.li`
  background-color:white;
  color:${e=>e.theme.textColor};
  border-radius: 15px;
  margin-bottom: 10px;
  a{
    padding: 20px;
    transition: color 0.2s ease-in;
    display: flex;
    align-items: center;
  }
  &:hover{
    a{
      color:${e=>e.theme.accentColor}
    }
  }
`,y=c.Ay.h1`
  color:${e=>e.theme.accentColor};
`,m=c.Ay.span`
  text-align: center;
  display: block;
`,g=c.Ay.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;function f(){const e=(0,a.lZ)(l.Q),{isLoading:n,data:t}=(0,r.I)({queryKey:["allCoins"],queryFn:()=>(0,o.v8)()});return(0,h.jsxs)(d,{children:[(0,h.jsx)(s.m,{children:(0,h.jsx)("title",{children:"\ucf54\uc778"})}),(0,h.jsxs)(p,{children:[(0,h.jsx)(y,{children:"\ucf54\uc778\ub4e4\uc785\ub2c8\ub2e4."}),(0,h.jsx)("button",{onClick:()=>e((e=>!e)),children:"Toggle Mode"})]}),n?(0,h.jsx)(m,{children:'"loading..."'}):(0,h.jsx)(x,{children:null===t||void 0===t?void 0:t.slice(0,100).map((e=>(0,h.jsx)(u,{children:(0,h.jsxs)(i.N_,{to:`btc/${e.id}`,state:{name:e.name},children:[(0,h.jsx)(g,{src:`https://cryptoicon-api.pages.dev/api/icon/${e.symbol.toLowerCase()}`}),e.name," \u2192"]})},e.id)))})]})}},291:(e,n,t)=>{t.d(n,{A4:()=>a,f7:()=>s,ih:()=>r,v8:()=>o});const i="https://api.coinpaprika.com/v1",c="https://ohlcv-api.nomadcoders.workers.dev";async function o(){return fetch(`${i}/coins`).then((e=>e.json()))}async function r(e){return fetch(`${i}/coins/${e}`).then((e=>e.json()))}async function s(e){return fetch(`${i}/tickers/${e}`).then((e=>e.json()))}async function a(e){return fetch(`${c}?coinId=${e}`).then((e=>e.json()))}}}]);
//# sourceMappingURL=409.3c5229d6.chunk.js.map