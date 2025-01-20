import{j as n}from"./jsx-runtime-z8MfsBtr.js";import{f as l}from"./index-MpUCZ_R_.js";import{L as w}from"./ListItem-DapA7loW.js";import"./index-C9rmetsa.js";import"./index-BofL8h0e.js";const v=({items:e,ItemRender:h,onItemClick:y,onItemMouseEnter:x,onItemMouseLeave:C,AdditionalControl:d})=>n.jsxs("div",{className:"w-full h-full flex flex-col","data-testid":"list-container",children:[d?n.jsx("div",{"data-testid":"additional-control",children:n.jsx(d,{})}):null,n.jsx("ul",{className:"w-full flex-grow max-h-full overflow-y-auto list-none","data-testid":"list-items",children:e.map(a=>n.jsx(h,{...a,onMouseEnter:()=>x(a.id),onMouseLeave:()=>C(a.id),onClick:()=>y(a.id),"data-testid":`list-item-${a.id}`},a.id))})]});v.__docgenInfo={description:"",methods:[],displayName:"List",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},ItemRender:{required:!0,tsType:{name:"ReactFC",raw:"React.FC<ListItemRendererProps<T>>",elements:[{name:"intersection",raw:`{
  onMouseEnter: (id: number) => void;
  onMouseLeave: (id: number) => void;
  onClick: (id: number) => void;
} & T`,elements:[{name:"signature",type:"object",raw:`{
  onMouseEnter: (id: number) => void;
  onMouseLeave: (id: number) => void;
  onClick: (id: number) => void;
}`,signature:{properties:[{key:"onMouseEnter",value:{name:"signature",type:"function",raw:"(id: number) => void",signature:{arguments:[{type:{name:"number"},name:"id"}],return:{name:"void"}},required:!0}},{key:"onMouseLeave",value:{name:"signature",type:"function",raw:"(id: number) => void",signature:{arguments:[{type:{name:"number"},name:"id"}],return:{name:"void"}},required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"(id: number) => void",signature:{arguments:[{type:{name:"number"},name:"id"}],return:{name:"void"}},required:!0}}]}},{name:"T"}]}]},description:""},onItemClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: number) => void",signature:{arguments:[{type:{name:"number"},name:"id"}],return:{name:"void"}}},description:""},onItemMouseEnter:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: number) => void",signature:{arguments:[{type:{name:"number"},name:"id"}],return:{name:"void"}}},description:""},onItemMouseLeave:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: number) => void",signature:{arguments:[{type:{name:"number"},name:"id"}],return:{name:"void"}}},description:""},AdditionalControl:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType"},description:""}}};const k={title:"components/List",component:v,parameters:{layout:"centered"},tags:["autodocs"],args:{onItemClick:l(),onItemMouseEnter:l(),onItemMouseLeave:l(),ItemRender:e=>n.jsx(w,{index:e.id,label:e.label,hidden:e.hidden,onClick:e.onClick,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},e.id)}},t={args:{items:[{id:1,label:"cell1",hidden:!1},{id:2,label:"cell2",hidden:!1},{id:3,label:"cell3",hidden:!1},{id:4,label:"cell4",hidden:!1}]}},r={args:{items:[{id:1,label:"cell1",hidden:!1},{id:2,label:"cell2",hidden:!0},{id:3,label:"cell3",hidden:!1},{id:4,label:"cell4",hidden:!0}]}},i={args:{AdditionalControl:()=>n.jsx("div",{className:"w-full flex",children:n.jsx("button",{className:"text-blue-800 border-none bg-transparent ml-auto text-xs",children:"Clear All"})}),items:[{id:1,label:"cell1",hidden:!1},{id:2,label:"cell2",hidden:!1},{id:3,label:"cell3",hidden:!1},{id:4,label:"cell4",hidden:!1}]}};var s,o,u;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(u=(o=t.parameters)==null?void 0:o.docs)==null?void 0:u.source}}};var m,c,b;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(b=(c=r.parameters)==null?void 0:c.docs)==null?void 0:b.source}}};var p,f,g;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    AdditionalControl: () => <div className="w-full flex">
        <button className="text-blue-800 border-none bg-transparent ml-auto text-xs">
          Clear All
        </button>
      </div>,
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
}`,...(g=(f=i.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const I=["Primary","HiddenState","ExtraControls"];export{i as ExtraControls,r as HiddenState,t as Primary,I as __namedExportsOrder,k as default};
