import{r as i}from"./index-BofL8h0e.js";import{r as m}from"./index-D-OUEn-9.js";import"./index-C9rmetsa.js";var n={},u;function c(){if(u)return n;u=1;var e=m();return n.createRoot=e.createRoot,n.hydrateRoot=e.hydrateRoot,n}var R=c(),s=new Map;function v(){return globalThis.IS_REACT_ACT_ENVIRONMENT}var p=({callback:e,children:t})=>{let r=i.useRef();return i.useLayoutEffect(()=>{r.current!==e&&(r.current=e,e())},[e]),t};typeof Promise.withResolvers>"u"&&(Promise.withResolvers=()=>{let e=null,t=null;return{promise:new Promise((r,o)=>{e=r,t=o}),resolve:e,reject:t}});var w=async(e,t,r)=>{let o=await f(t,r);if(v()){o.render(e);return}let{promise:a,resolve:l}=Promise.withResolvers();return o.render(i.createElement(p,{callback:l},e)),a},y=(e,t)=>{let r=s.get(e);r&&(r.unmount(),s.delete(e))},f=async(e,t)=>{let r=s.get(e);return r||(r=R.createRoot(e,t),s.set(e,r)),r};export{w as renderElement,y as unmountElement};
