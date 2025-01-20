import{j as t}from"./jsx-runtime-z8MfsBtr.js";import{r as o}from"./index-BofL8h0e.js";import"./index-C9rmetsa.js";const f=({id:a,label:s,hidden:e,highlighted:i})=>t.jsx("div",{"data-testid":`raster-cell-${a}`,className:"flex items-center justify-center border border-gray-300",style:{width:"100%",height:"100%"},children:t.jsxs("div",{className:"text-center",children:[t.jsx("div",{children:s}),t.jsxs("div",{className:"text-sm text-gray-600",children:[e&&"Hidden",e&&i&&" & ",i&&"Highlighted"]})]})}),b=({cols:a,rows:s,image:e,cells:i,cellComponent:y})=>{const[d,C]=o.useState(null),x=y||f;return o.useEffect(()=>{if(!e)return;const r=new Image;r.src=e,r.onload=()=>{C(r.width/r.height)}},[e]),d===null?t.jsx("div",{"data-testid":"raster-loading",children:"Loading..."}):t.jsx("div",{"data-testid":"raster-container",className:"grid",style:{display:"grid",gridTemplateColumns:`repeat(${a}, 1fr)`,gridTemplateRows:`repeat(${s}, 1fr)`,width:"100%",aspectRatio:`${d}`,backgroundImage:e?`url(${e})`:void 0,backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center"},children:i.map(r=>t.jsx(x,{...r},r.id))})};f.__docgenInfo={description:"",methods:[],displayName:"RasterDefaultCell",props:{id:{required:!0,tsType:{name:"number"},description:""},label:{required:!0,tsType:{name:"string"},description:""},hidden:{required:!0,tsType:{name:"boolean"},description:""},highlighted:{required:!0,tsType:{name:"boolean"},description:""}}};b.__docgenInfo={description:"",methods:[],displayName:"CellRaster",props:{cols:{required:!0,tsType:{name:"number"},description:""},rows:{required:!0,tsType:{name:"number"},description:""},image:{required:!0,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},cells:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},cellComponent:{required:!1,tsType:{name:"ReactFC",raw:"React.FC<T>",elements:[{name:"T"}]},description:""}}};const T="/aurivus_challenge/storybook/assets/bg-test-BeaJuq0x.webp",j=({label:a,hidden:s,highlighted:e})=>t.jsx("div",{className:`flex items-center justify-center text-black ${s?"bg-white":"bg-transparent"} ${e?"border-red-500":"border-gray-300"} border`,style:{width:"100%",height:"100%"},children:t.jsx("span",{children:`${a} ${s?"(Hidden)":""} ${e?"(Highlighted)":""}`})}),$={title:"components/CellRaster",component:b,parameters:{layout:"centered"},tags:["autodocs"],args:{cols:3,rows:3,image:T,cells:[{id:1,label:"A",hidden:!1,highlighted:!1},{id:2,label:"B",hidden:!0,highlighted:!0},{id:3,label:"C",hidden:!0,highlighted:!1},{id:4,label:"D",hidden:!1,highlighted:!0},{id:5,label:"E",hidden:!1,highlighted:!1},{id:6,label:"F",hidden:!1,highlighted:!1},{id:7,label:"G",hidden:!0,highlighted:!0},{id:8,label:"H",hidden:!1,highlighted:!1},{id:9,label:"I",hidden:!1,highlighted:!1}]}},l={},n={args:{cellComponent:j}};var c,u,m;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(m=(u=l.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var p,h,g;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    cellComponent: CustomCell // Pass the custom cell component
  }
}`,...(g=(h=n.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const v=["Default","WithCustomCell"];export{l as Default,n as WithCustomCell,v as __namedExportsOrder,$ as default};
