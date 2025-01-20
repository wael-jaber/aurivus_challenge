import{j as c}from"./jsx-runtime-z8MfsBtr.js";import"./index-C9rmetsa.js";function d({isDisabled:t}){return c.jsx("button",{type:"submit","data-testid":"apply-button",className:`text-white bg-blue-500 rounded px-4 py-2 text-sm mb-4 ${t?"opacity-50 cursor-not-allowed":"hover:bg-blue-600"}`,disabled:t,children:"Apply"})}d.__docgenInfo={description:"",methods:[],displayName:"ApplyButton",props:{isDisabled:{required:!0,tsType:{name:"boolean"},description:""}}};const m={title:"components/Buttons/ApplyButton",component:d,parameters:{layout:"centered"},tags:["autodocs"]},e={args:{isDisabled:!1}},s={args:{isDisabled:!0}};var r,a,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    isDisabled: false
  }
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};var n,p,i;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(i=(p=s.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};const b=["Primary","Disabled"];export{s as Disabled,e as Primary,b as __namedExportsOrder,m as default};
