import{j as n}from"./jsx-runtime-z8MfsBtr.js";import"./index-C9rmetsa.js";const S=({id:e,label:x,hidden:d,highlighted:k,hideLabel:w})=>n.jsx("div",{id:`cell-${e}`,"data-testid":`cell-${e}`,className:`w-full h-full flex items-center justify-center text-black
        ${d?"bg-white":"bg-transparent"}
        ${k?"border-red-500":"border-white"}
        border`,children:n.jsx("span",{"data-testid":`cell-label-${e}`,className:`${d?"opacity-50":"opacity-100"} ${w?"hidden":"block"}`,children:x})});S.__docgenInfo={description:"",methods:[],displayName:"Cell",props:{id:{required:!0,tsType:{name:"number"},description:""},label:{required:!0,tsType:{name:"string"},description:""},hidden:{required:!0,tsType:{name:"boolean"},description:""},highlighted:{required:!0,tsType:{name:"boolean"},description:""},hideLabel:{required:!1,tsType:{name:"boolean"},description:""}}};const H="/aurivus_challenge/storybook/assets/bg-test-BeaJuq0x.webp",j={title:"components/Cell",component:S,parameters:{layout:"centered"},tags:["autodocs"]},s=e=>n.jsx("div",{className:"w-64 h-64 bg-cover bg-center",style:{backgroundImage:`url(${H})`},children:n.jsx(e,{})}),r={args:{id:1,label:"Cell 1",hidden:!1,highlighted:!1},decorators:[e=>s(e)]},t={args:{id:1,label:"Cell 1",hidden:!1,highlighted:!0},decorators:[e=>s(e)]},a={args:{id:1,label:"Cell 1",hidden:!0,highlighted:!1},decorators:[e=>s(e)]},o={args:{id:1,label:"Cell 1",hidden:!0,highlighted:!0},decorators:[e=>s(e)]};var i,l,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    id: 1,
    label: 'Cell 1',
    hidden: false,
    highlighted: false
  },
  decorators: [(StoryComponent: React.FC) => withBackgroundImage(StoryComponent)]
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var g,h,m;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    id: 1,
    label: 'Cell 1',
    hidden: false,
    highlighted: true
  },
  decorators: [(StoryComponent: React.FC) => withBackgroundImage(StoryComponent)]
}`,...(m=(h=t.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var p,u,b;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    id: 1,
    label: 'Cell 1',
    hidden: true,
    highlighted: false
  },
  decorators: [(StoryComponent: React.FC) => withBackgroundImage(StoryComponent)]
}`,...(b=(u=a.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var C,y,f;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    id: 1,
    label: 'Cell 1',
    hidden: true,
    highlighted: true
  },
  decorators: [(StoryComponent: React.FC) => withBackgroundImage(StoryComponent)]
}`,...(f=(y=o.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const q=["Primary","Highlighted","Hidden","HiddenAndHighlighted"];export{a as Hidden,o as HiddenAndHighlighted,t as Highlighted,r as Primary,q as __namedExportsOrder,j as default};
