(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"+633":function(e,t,a){},RXBc:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),o=a("Bl7J"),l=a("vrFN"),c={form:{width:"max-content",display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-evenly",alignItems:"baseline"},label:{fontSize:"16px",fontFamily:"sans-serif",fontWeight:"600",color:"#222",width:"6em",textAlign:"center"},select:{display:"inline-block",fontSize:"16px",fontFamily:"sans-serif",fontWeight:"700",color:"#222",lineHeight:"1.3",padding:".3em .6em .2em .6em",width:"auto",maxWidth:"100%",boxSizing:"border-box",margin:"0.2em",border:"1px solid #aaa",boxShadow:"1px 3px 8px rgba(0,0,0,0.5)",borderRadius:"0.3em",MozAppearance:"none",WebkitAppearance:"none",appearance:"none",backgroundColor:"#fff",backgroundImage:"linear-gradient(to bottom, #ffffff 0%,#e1e1e1 100%)"}},i=function(e){var t=e.formHandler,a=Object(n.useRef)(),o=Object(n.useRef)();return r.a.createElement("form",{onSubmit:t,style:c.form},r.a.createElement("select",{style:c.select,onChange:function(e){var t;"1"===(t=e.target.value)?(a.current.textContent="paragraf",o.current[0].textContent="krótki",o.current[1].textContent="średni",o.current[2].textContent="długi"):"5"===t?(a.current.textContent="paragrafów",o.current[0].textContent="krótkich",o.current[1].textContent="średnich",o.current[2].textContent="długich"):(a.current.textContent="paragrafy ",o.current[0].textContent="krótkie ",o.current[1].textContent="średnie ",o.current[2].textContent="długie  ")},required:!0,defaultValue:"2"},r.a.createElement("option",{value:"1"}," 1 "),r.a.createElement("option",{value:"2"}," 2 "),r.a.createElement("option",{value:"3"}," 3 "),r.a.createElement("option",{value:"4"}," 4 "),r.a.createElement("option",{value:"5"}," 5 ")),r.a.createElement("select",{ref:o,style:c.select,required:!0,defaultValue:"50"},r.a.createElement("option",{value:"20"},"krótkie"),r.a.createElement("option",{value:"50"},"średnie"),r.a.createElement("option",{value:"80"},"długie")),r.a.createElement("label",{style:c.label,ref:a}," paragrafy "),r.a.createElement("button",{style:c.select,type:"submit"}," poproszę "))},u={root:{textAlign:"justify",fontFamily:'"Comic Neue", cursive',backgroundColor:"rgba(255, 255, 255, 0.6)",borderRadius:"0.3em",padding:"0.5em 1em",transition:"ease-out 150ms",":hover":{backgroundColor:"rgba(255, 255, 255, 0.9)"}}},s=(a("+633"),function(e){var t=e.isLoading,a=e.contents,n=function(e){"mouseenter"===e.type?e.target.style.backgroundColor="rgba(255, 255, 255, 0.9)":e.target.style.backgroundColor="rgba(255, 255, 255, 0.6)"};return t?r.a.createElement("div",{style:{width:"100%",textAlign:"center"}},r.a.createElement("div",{className:"lds-dual-ring"})):a&&!Array.isArray(a.body)?r.a.createElement("p",null," A following error has occured: ",a.body," "):a?r.a.createElement("section",null,a.body.map((function(e,t){return r.a.createElement("p",{style:u.root,key:t,onMouseEnter:function(e){return n(e)},onMouseLeave:function(e){return n(e)}},e)})),r.a.createElement("p",{style:{height:"50px"}})):null});s.defaultProps={isLoading:!1,contents:null};var m=s,p=function(){var e=Object(n.useState)(),t=e[0],a=e[1],o=Object(n.useState)(),l=o[0],c=o[1],u=Object(n.useState)(!1),s=u[0],p=u[1];Object(n.useEffect)((function(){if(l){p(!0);var e="https://lorem-silesium.herokuapp.com/api/paragraphs/"+l.paragraphs+"/words/"+l.words;fetch(e).then((function(e){if(e.ok)return e.json();throw new Error("Network issues, please retry")})).then((function(e){p(!1),a(e)})).catch((function(e){p(!1),a({status:444,word:"An error has occured: "+e.message})}))}}),[l]);return r.a.createElement("section",null,r.a.createElement(i,{formHandler:function(e){console.log(e.target[0].value),console.log(e.target[1].value),e.preventDefault(),c({paragraphs:e.target[0].value,words:e.target[1].value})}}),r.a.createElement(m,{isLoading:s,contents:t}))};t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(l.a,{title:"Home",keywords:["lorem","ślunska","śląska","godko","gadka","api","generator"]}),r.a.createElement("h2",null,"Lorem ipsum we ślůnskij godce"),r.a.createElement("h4",{style:{marginBottom:"0.5em"}},"Czy zawsze marzyłeś o tym, aby Twój kontent był po śląsku? Od dzisiaj to możliwe!"),r.a.createElement("p",{style:{marginBottom:"0.5em"}},'"Po co mi kolejny generator lorem?", zapytasz?',r.a.createElement("br",null),"A ja odpowiem obejrzyj ",r.a.createElement("a",{href:"https://www.youtube.com/watch?v=hrwLBeOcfms",target:"new"},"TO")," albo ",r.a.createElement("a",{href:"https://www.youtube.com/watch?v=osZ4KpUKPNo",target:"new"},"TO")," i nie zadawaj więcej takich pytań..."),r.a.createElement("p",null," Wybierz, ile chcesz paragrafów oraz słów w każdym z nich: "),r.a.createElement(p,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-e01eff4ba3a8bfe0ddc5.js.map