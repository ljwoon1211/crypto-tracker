"use strict";(self.webpackChunkcrypto_tracker=self.webpackChunkcrypto_tracker||[]).push([[409],{409:(e,n,t)=>{t.r(n),t.d(n,{default:()=>m});t(43);var i=t(475),c=t(464),r=t(291),o=t(11),s=t(591),a=t(579);const h=c.Ay.div`
    padding: 0px 20px;
    max-width: 480px;
    margin: 0 auto;
`,l=c.Ay.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`,d=c.Ay.ul``,p=c.Ay.li`
  background-color:white;
  color:${e=>e.theme.bgColor};
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
`,u=c.Ay.h1`
  color:${e=>e.theme.accentColor};
`,x=c.Ay.span`
  text-align: center;
  display: block;
`,y=c.Ay.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;function m(){const{isLoading:e,data:n}=(0,o.I)({queryKey:["allCoins"],queryFn:()=>(0,r.v8)()});return(0,a.jsxs)(h,{children:[(0,a.jsx)(s.m,{children:(0,a.jsx)("title",{children:"\ucf54\uc778"})}),(0,a.jsx)(l,{children:(0,a.jsx)(u,{children:"\ucf54\uc778\ub4e4\uc785\ub2c8\ub2e4."})}),e?(0,a.jsx)(x,{children:'"loading..."'}):(0,a.jsx)(d,{children:null===n||void 0===n?void 0:n.slice(0,100).map((e=>(0,a.jsx)(p,{children:(0,a.jsxs)(i.N_,{to:`btc/${e.id}`,state:{name:e.name},children:[(0,a.jsx)(y,{src:`https://cryptoicon-api.pages.dev/api/icon/${e.symbol.toLowerCase()}`}),e.name," \u2192"]})},e.id)))})]})}},291:(e,n,t)=>{t.d(n,{A4:()=>a,f7:()=>s,ih:()=>o,v8:()=>r});const i="https://api.coinpaprika.com/v1",c="https://ohlcv-api.nomadcoders.workers.dev";async function r(){return fetch(`${i}/coins`).then((e=>e.json()))}async function o(e){return fetch(`${i}/coins/${e}`).then((e=>e.json()))}async function s(e){return fetch(`${i}/tickers/${e}`).then((e=>e.json()))}async function a(e){return fetch(`${c}?coinId=${e}`).then((e=>e.json()))}}}]);
//# sourceMappingURL=409.2f0985c8.chunk.js.map