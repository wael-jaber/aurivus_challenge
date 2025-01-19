import{j as n}from"./jsx-runtime-z8MfsBtr.js";import{f as r}from"./index-MpUCZ_R_.js";import{L as C}from"./ListItem-DapA7loW.js";import"./index-C9rmetsa.js";import"./index-BofL8h0e.js";const h=({items:e,ItemRender:g,onItemClick:y,onItemMouseEnter:x,onItemMouseLeave:k,AdditionalControl:s})=>n.jsxs("div",{className:"w-full h-full flex flex-col","data-testid":"list-container",children:[s?n.jsx("div",{"data-testid":"additional-control",children:n.jsx(s,{})}):null,n.jsx("ul",{className:"w-full flex-grow max-h-full overflow-y-auto list-none","data-testid":"list-items",children:e.map((M,t)=>n.jsx(g,{...M,onMouseEnter:()=>x(t),onMouseLeave:()=>k(t),onClick:()=>y(t),"data-testid":`list-item-${t}`},t))})]});h.__docgenInfo={description:"",methods:[],displayName:"List",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:"Array of items for the list"},ItemRender:{required:!0,tsType:{name:"ReactFC",raw:"React.FC<ListItemRendererProps<T>>",elements:[{name:"intersection",raw:`{
  /** item onMouseEnter event callback */
  onMouseEnter: (id: number) => void;
  /** item onMouseLeave event callback */
  onMouseLeave: (id: number) => void;
  /** item onClick event callback */
  onClick: (id: number) => void;
} & T`,elements:[{name:"signature",type:"object",raw:`{
  /** item onMouseEnter event callback */
  onMouseEnter: (id: number) => void;
  /** item onMouseLeave event callback */
  onMouseLeave: (id: number) => void;
  /** item onClick event callback */
  onClick: (id: number) => void;
}`,signature:{properties:[{key:"onMouseEnter",value:{name:"signature",type:"function",raw:"(id: number) => void",signature:{arguments:[{type:{name:"number"},name:"id"}],return:{name:"void"}},required:!0},description:"item onMouseEnter event callback"},{key:"onMouseLeave",value:{name:"signature",type:"function",raw:"(id: number) => void",signature:{arguments:[{type:{name:"number"},name:"id"}],return:{name:"void"}},required:!0},description:"item onMouseLeave event callback"},{key:"onClick",value:{name:"signature",type:"function",raw:"(id: number) => void",signature:{arguments:[{type:{name:"number"},name:"id"}],return:{name:"void"}},required:!0},description:"item onClick event callback"}]}},{name:"T"}]}]},description:"renderer component for the items"},onItemClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:"item OnClick event callback"},onItemMouseEnter:{required:!0,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:"item onMouseEnter event callback"},onItemMouseLeave:{required:!0,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:"item onMouseLeave event callback"},AdditionalControl:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType"},description:"additional control element will be displayed on top of the list"}}};const I={title:"components/List",component:h,parameters:{layout:"centered"},tags:["autodocs"],args:{onItemClick:r(),onItemMouseEnter:r(),onItemMouseLeave:r(),ItemRender:e=>n.jsx(C,{index:e.id,label:e.label,hidden:e.hidden,onClick:e.onClick,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},e.id)}},a={args:{items:[{id:1,label:"cell1",hidden:!1},{id:2,label:"cell2",hidden:!1},{id:3,label:"cell3",hidden:!1},{id:4,label:"cell4",hidden:!1}]}},l={args:{items:[{id:1,label:"cell1",hidden:!1},{id:2,label:"cell2",hidden:!0},{id:3,label:"cell3",hidden:!1},{id:4,label:"cell4",hidden:!0}]}},i={args:{AdditionalControl:()=>n.jsx("div",{className:"w-full flex",children:n.jsx("button",{className:"text-blue-800 border-none bg-transparent ml-auto text-xs",children:"Clear All"})}),items:[{id:1,label:"cell1",hidden:!1},{id:2,label:"cell2",hidden:!1},{id:3,label:"cell3",hidden:!1},{id:4,label:"cell4",hidden:!1}]}};var d,o,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    items: [{
      id: 1,
      label: 'cell1',
      hidden: false
    }, {
      id: 2,
      label: 'cell2',
      hidden: false
    }, {
      id: 3,
      label: 'cell3',
      hidden: false
    }, {
      id: 4,
      label: 'cell4',
      hidden: false
    }]
  }
}`,...(m=(o=a.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};var u,c,b;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    items: [{
      id: 1,
      label: 'cell1',
      hidden: false
    }, {
      id: 2,
      label: 'cell2',
      hidden: true
    }, {
      id: 3,
      label: 'cell3',
      hidden: false
    }, {
      id: 4,
      label: 'cell4',
      hidden: true
    }]
  }
}`,...(b=(c=l.parameters)==null?void 0:c.docs)==null?void 0:b.source}}};var p,v,f;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    AdditionalControl: () => {
      return <div className="w-full flex">
          <button className="text-blue-800 border-none bg-transparent ml-auto text-xs">
            Clear All
          </button>
        </div>;
    },
    items: [{
      id: 1,
      label: 'cell1',
      hidden: false
    }, {
      id: 2,
      label: 'cell2',
      hidden: false
    }, {
      id: 3,
      label: 'cell3',
      hidden: false
    }, {
      id: 4,
      label: 'cell4',
      hidden: false
    }]
  }
}`,...(f=(v=i.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};const q=["Primary","HiddenState","ExtraControls"];export{i as ExtraControls,l as HiddenState,a as Primary,q as __namedExportsOrder,I as default};
