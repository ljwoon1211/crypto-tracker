"use strict";(self.webpackChunkcrypto_tracker=self.webpackChunkcrypto_tracker||[]).push([[84],{84:(n,e,i)=>{i.r(e),i.d(e,{default:()=>v});i(43);var r=i(216),s=i(464),t=i(475),c=i(11),o=i(291),l=i(591),d=i(579);const a=s.Ay.div`
    padding: 0px 20px;
    max-width: 480px;
    margin: 0 auto;
`,p=s.Ay.header`
  height: 10vh;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  align-items: center;
  a{
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 20px;
    color:${n=>n.theme.textColor};
    padding: 5px;
    width: max-content;
  }
`,h=s.Ay.h1`
  text-align: center;

  font-size: 48px;
  color:${n=>n.theme.accentColor};
`,x=s.Ay.span`
  text-align: center;
  display: block;
`,u=s.Ay.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
`,j=s.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`,g=s.Ay.p`
  margin: 20px 0px;
`,y=s.Ay.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0px;
  gap: 10px;
`,m=s.Ay.span`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 7px 0px;
  border-radius: 10px;
  color: ${n=>n.isActive?n.theme.accentColor:n.theme.textColor};
  a {
    display: block;
  }
`;function v(){const{coinId:n}=(0,r.g)(),{state:e}=(0,r.zy)(),i=(0,r.RQ)(`btc/${n}/price`),s=(0,r.RQ)(`btc/${n}/chart`);console.log("Chart Match:",s),console.log("Price Match:",i);const{isLoading:v,data:f}=(0,c.I)({queryKey:["info",n],queryFn:()=>(0,o.ih)(n)}),{isLoading:b,data:k}=(0,c.I)({queryKey:["tickers",n],queryFn:()=>(0,o.f7)(n)}),$=v||b;return n?(0,d.jsxs)(a,{children:[(0,d.jsx)(l.m,{children:(0,d.jsx)(h,{children:null!==e&&void 0!==e&&e.name?e.name:$?"Loading...":null===f||void 0===f?void 0:f.name})}),(0,d.jsxs)(p,{children:[(0,d.jsx)(t.N_,{to:"/",children:"Home"}),(0,d.jsx)(h,{children:null!==e&&void 0!==e&&e.name?e.name:$?"Loading...":null===f||void 0===f?void 0:f.name})]}),$?(0,d.jsx)(x,{children:"Loading..."}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(u,{children:[(0,d.jsxs)(j,{children:[(0,d.jsx)("span",{children:"Rank:"}),(0,d.jsx)("span",{children:null===f||void 0===f?void 0:f.rank})]}),(0,d.jsxs)(j,{children:[(0,d.jsx)("span",{children:"Symbol:"}),(0,d.jsxs)("span",{children:["$",null===f||void 0===f?void 0:f.symbol]})]}),(0,d.jsxs)(j,{children:[(0,d.jsx)("span",{children:"Price:"}),(0,d.jsxs)("span",{children:["$",null===k||void 0===k?void 0:k.quotes.USD.price.toFixed(3)]})]})]}),(0,d.jsx)(g,{children:null===f||void 0===f?void 0:f.description}),(0,d.jsxs)(u,{children:[(0,d.jsxs)(j,{children:[(0,d.jsx)("span",{children:"Total Supply:"}),(0,d.jsx)("span",{children:null===k||void 0===k?void 0:k.total_supply})]}),(0,d.jsxs)(j,{children:[(0,d.jsx)("span",{children:"Max Supply:"}),(0,d.jsx)("span",{children:null===k||void 0===k?void 0:k.max_supply})]})]}),(0,d.jsxs)(y,{children:[(0,d.jsx)(m,{isActive:null!==s,children:(0,d.jsx)(t.N_,{to:"chart",children:"Chart"})}),(0,d.jsx)(m,{isActive:null!==i,children:(0,d.jsx)(t.N_,{to:"price",children:"Price"})})]}),(0,d.jsx)(r.sv,{})]})]}):(0,d.jsx)("p",{children:"\ucf54\uc778 \uc544\uc774\ub514\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."})}},291:(n,e,i)=>{i.d(e,{A4:()=>l,f7:()=>o,ih:()=>c,v8:()=>t});const r="https://api.coinpaprika.com/v1",s="https://ohlcv-api.nomadcoders.workers.dev";async function t(){return fetch(`${r}/coins`).then((n=>n.json()))}async function c(n){return fetch(`${r}/coins/${n}`).then((n=>n.json()))}async function o(n){return fetch(`${r}/tickers/${n}`).then((n=>n.json()))}async function l(n){return fetch(`${s}?coinId=${n}`).then((n=>n.json()))}}}]);
//# sourceMappingURL=84.449d036f.chunk.js.map