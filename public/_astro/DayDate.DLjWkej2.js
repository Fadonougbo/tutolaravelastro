import{r as x}from"./index.BL7xzsR_.js";var c={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d;function R(){if(d)return n;d=1;var u=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function s(i,t,e){var r=null;if(e!==void 0&&(r=""+e),t.key!==void 0&&(r=""+t.key),"key"in t){e={};for(var l in t)l!=="key"&&(e[l]=t[l])}else e=t;return t=e.ref,{$$typeof:u,type:i,key:r,ref:t!==void 0?t:null,props:e}}return n.Fragment=a,n.jsx=s,n.jsxs=s,n}var p;function f(){return p||(p=1,c.exports=R()),c.exports}var o=f();const E=({name:u,children:a,menuslot:s})=>{new Date().toLocaleString();const[i,t]=x.useState("no date form moment"),e=()=>{const r=new Date().toLocaleString();t(()=>r)};return x.useEffect(()=>{fetch("http://localhost:8000/api/test").then(r=>r.json()).then(r=>console.log(r))},[]),o.jsxs(o.Fragment,{children:[o.jsxs("span",{children:[i," ",u]}),o.jsx("button",{onClick:e,type:"button",children:"change date"}),a," ",s]})};export{E as DayDate};
