import{b as j,I as g,Y as N,a as e,c as i,e as y,d as r,f as c,g as o,W as v,i as b,k as w,l as C,C as S,M as $}from"./entry.client-ukXeCvcP.js";import{f as m}from"./index-BvvmIczU-C2Z7VUAZ.js";import{R as z}from"./Toc-Ax54Pw8S-DPt1BPMl.js";import{C as I,a as A,p as O}from"./SchemaView-BsB7EFRl-CAHWRrFx.js";import"./circular-CZaZtOBs-xSgjMnZu.js";const U=$(`
  query GetSchemas($input: JSON!, $type: SchemaType!) {
    schema(input: $input, type: $type) {
      title
      description
      summary
      components {
        schemas {
          name
          schema
          extensions
        }
      }
    }
  }
`);function V(){const{input:l,type:d,versions:p,version:h,options:n}=j(),x=g(U,{input:l,type:d}),{data:a}=N(x),t=a.schema.components?.schemas??[];if(!t.length)return e.jsx("div",{children:"No schemas found"});const u=Object.entries(p).length>1,f=n?.showVersionSelect==="always"||u&&n?.showVersionSelect!=="hide";return e.jsxs("div",{className:"grid grid-cols-[--sidecar-grid-cols] gap-8 justify-between","data-pagefind-filter":"section:openapi","data-pagefind-meta":"section:openapi",children:[e.jsxs("div",{className:"pt-[--padding-content-top] pb-[--padding-content-bottom]",children:[e.jsxs(i,{className:"w-full",children:[e.jsxs("div",{className:"flex flex-col gap-y-4 sm:flex-row justify-around items-start sm:items-end",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx(y,{children:a.schema.title}),e.jsxs(r,{level:1,id:"schemas",registerSidebarAnchor:!0,className:"mb-0",children:["Schemas",f&&e.jsxs("span",{className:"text-xl text-muted-foreground ms-1.5",children:["(",h,")"]})]})]}),a.schema.description&&e.jsxs(c,{className:"flex items-center gap-1 text-sm font-medium text-muted-foreground group",children:[e.jsx("span",{children:"API information"}),e.jsx(I,{className:"group-data-[state=open]:hidden translate-y-px",size:14}),e.jsx(A,{className:"group-data-[state=closed]:hidden translate-y-px",size:13})]})]}),a.schema.description&&e.jsx(o,{className:"CollapsibleContent",children:e.jsx("div",{className:v(w,"pt-4 max-w-full prose-img:max-w-prose"),children:e.jsx(b,{className:"border rounded bg-muted/25 border-border px-2.5 md:px-4",content:a.schema.description})})})]}),e.jsx("hr",{className:"my-8"}),e.jsx("div",{className:"flex flex-col gap-y-5",children:t.map(s=>e.jsxs(i,{className:"group",defaultOpen:!0,children:[e.jsxs(r,{registerSidebarAnchor:!0,level:2,className:"flex items-center gap-1 justify-between w-fit",id:m(s.name),children:[s.name," ",e.jsx(c,{asChild:!0,children:e.jsx(C,{variant:"ghost",size:"icon",className:"size-6",children:e.jsx(S,{size:16,className:"group-data-[state=open]:rotate-90 transition cursor-pointer"})})})]}),e.jsx(o,{className:"mt-4 CollapsibleContent",children:e.jsx(O,{schema:s.schema})})]},s.name))})]}),e.jsx(z,{entries:t.map(s=>({id:m(s.name),value:s.name,depth:1}))})]})}export{V as SchemaList};
//# sourceMappingURL=SchemaList-BH9bgMRw-DH3JjvSo.js.map
