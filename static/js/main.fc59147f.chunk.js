(this["webpackJsonpcreate-react-app"]=this["webpackJsonpcreate-react-app"]||[]).push([[0],{100:function(e,t,a){e.exports=a(112)},110:function(e,t,a){var n={"./cover_summary":31,"./cover_summary.js":31,"./projects/portfolio.png":70,"./projects/raft":44,"./projects/raft - \u526f\u672c.png":71,"./projects/raft.js":44,"./projects/raft.png":72,"./projects/robotics.gif":73,"./projects_config.yaml":74,"./projects_data":21,"./projects_data.js":21,"./shared/PowerToysSetup-0.19.1-x64.msi":75,"./shared/arm_logo.png":46,"./shared/ic_logo.png":45,"./shared/ic_qt.png":76};function r(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=o,e.exports=r,r.id=110},111:function(e,t,a){var n={"./cover_summary":[31,9],"./cover_summary.js":[31,9],"./projects/portfolio.png":[70,7],"./projects/raft":[44,9],"./projects/raft - \u526f\u672c.png":[71,7],"./projects/raft.js":[44,9],"./projects/raft.png":[72,7],"./projects/robotics.gif":[73,7],"./projects_config.yaml":[74,7],"./projects_data":[21,9],"./projects_data.js":[21,9],"./shared/PowerToysSetup-0.19.1-x64.msi":[75,7],"./shared/arm_logo.png":[46,7],"./shared/ic_logo.png":[45,7],"./shared/ic_qt.png":[76,7]};function r(e){return Promise.resolve().then((function(){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}var r=n[e],o=r[0];return a.t(o,r[1])}))}r.keys=function(){return Object.keys(n)},r.id=111,e.exports=r},112:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return Me}));var n=a(12),r=a(0),o=a.n(r),c=a(10),l=a.n(c),i=a(169),u=a(168),s=a(55),m=a(91),p=Object(m.a)({palette:{primary:{main:"#556cd6"},secondary:{main:"#19857b"},error:{main:s.a.A400},background:{default:"#ffffff"}},typography:{h1:{fontSize:"2rem",fontWeight:300},h2:{fontSize:"1.5rem"},h3:{fontSize:"1rem"}}}),d=a(27),f=a(34);function h(e){if("string"!=typeof e)return{};var t=e.substr(e.indexOf("#")+1).split("?");if(t.length>2)return{};var a={hashPath:t[0]};return 2===t.length&&(a=t[1].split("&").reduce((function(e,t){if(""!==t){var a=t.split("=").map((function(e){return decodeURIComponent(e)}));e[a[0]]=a[1]}return e}),a)),console.log(a),a}var g=o.a.createContext();g.Consumer;function b(e){var t=Object(r.useState)({}),a=Object(n.a)(t,2),c=a[0],l=a[1];function i(e,t){var a=Object(f.a)(Object(f.a)({},c),{},Object(d.a)({},e,t));"string"!==typeof t&&delete a[e],window.location.hash=function(e){var t="#";return e.hashPath?t+=e.hashPath:t+="/",delete e.hashPath,Object.keys(e).length>0&&(t=(t+=Object.keys(e).reduce((function(t,a){return t+encodeURIComponent(a)+"="+encodeURIComponent(e[a])+"&"}),"?")).substring(0,t.length-1)),t}(a)}function u(e){return[c[e],function(t){return i(e,t)}]}var s=u("hashPath"),m=Object(n.a)(s,2),p=m[0],b=m[1],E=u("project"),v=Object(n.a)(E,2),y=v[0],A=v[1],j=u("summary"),S=Object(n.a)(j,2),w=S[0],C=S[1];return Object(r.useEffect)((function(){window.onhashchange=function(e){e.preventDefault(),l(h(e.newURL))},l(h(window.location.hash)),console.log("should run once")}),[]),o.a.createElement(g.Provider,{value:{hashStatePath:p,setHashStatePath:b,hashStateProj:y,setHashStateProj:A,hashStateSummary:w,setHashStateSummary:C}},e.children)}var E=a(21),v=a(154),y=a(43),A=a(151),j=a(152),S=a(170),w=a(153),C=a(159),O=a(156),x=a(114),P=a(157),I=a(158),W=a(155),M=a(62),k=a.n(M),Y=a(84),D=a.n(Y),L=a(24),U=a.n(L),K=a(85),F=a.n(K),N=a(80),J=a.n(N),B=a(81),R=a.n(B),z=a(82),G=a.n(z),Z=a(83),H=a.n(Z);function V(e){var t={icon:o.a.createElement(o.a.Fragment,null),backgroundColor:"red"},a={academic:{icon:o.a.createElement(J.a,null)},placement:{icon:o.a.createElement(R.a,null)},extracurricular:{icon:o.a.createElement(G.a,null)},management:{icon:o.a.createElement(H.a,null)}};return Object(f.a)(Object(f.a)({},t),a[e.toLowerCase()])}var X=a(31),q=a(115),T=Object(A.a)((function(e){return{coverTopMargin:{height:"48px"},coverMain:{height:"calc(100vh - ".concat("56px"," - ").concat("48px"," - ").concat("16px",")"),textAlign:"center","& #coverMainIntro":{marginBottom:e.spacing(3),"& > *":{marginTop:e.spacing(2)}},"& #coverMainSummary":{margin:e.spacing(1),height:"60%",textAlign:"left"},"& #coverMainSummaryButton":{height:"56px"},"& #coverMainSummaryPopper":{padding:e.spacing(1)},"& #coverMainSummaryContent":{overflow:"auto",height:"calc(100% - ".concat("56px",")"),"& ul":{marginTop:e.spacing(1)},"& li":{marginBottom:e.spacing(1)}}},coverScroll:{justifyContent:"center",marginBottom:"16px","& svg":{height:"56px",width:"56px"}},ad:{textAlign:"left","&::before":{color:"#46a049",border:"1px solid #46a049",content:"'Ad'",padding:"1px 5px",fontSize:"0.875rem",marginRight:"6px",borderRadius:"3px"}}}}));function Q(){var e=T();return o.a.createElement(j.a,{maxWidth:"md",id:"cover"},o.a.createElement(S.a,{className:e.coverTopMargin}),o.a.createElement(S.a,{className:e.coverMain,id:"coverMain"},o.a.createElement(_,null),o.a.createElement($,null)),o.a.createElement(w.a,{container:!0,className:e.coverScroll,id:"coverScroll"},o.a.createElement(v.a,{"aria-label":"scroll-down"},o.a.createElement(k.a,null))))}function _(){var e=T();return o.a.createElement(S.a,{id:"coverMainIntro"},o.a.createElement(W.a,{href:"",className:e.ad,onClick:function(e){return e.preventDefault()}},o.a.createElement("b",null,"Looking for Full-Time Position")," Imperial College Preliminary Year Student who Understand Project Management"),o.a.createElement(y.a,{variant:"h1"},"Ben Shen's Reactive Portfolio"),o.a.createElement(O.a,null,o.a.createElement(x.a,{startIcon:o.a.createElement(D.a,null)},"Curriculum "),o.a.createElement(x.a,{startIcon:o.a.createElement(U.a,null)},"GitHub"),o.a.createElement(x.a,{startIcon:o.a.createElement(F.a,null)},"LinkedIn")))}function $(){var e=T(),t=Object(r.useState)(0),a=Object(n.a)(t,2),c=a[0],l=a[1],i=Object(r.useState)(0),u=Object(n.a)(i,2),s=u[0],m=u[1],p=Object(r.useState)(null),d=Object(n.a)(p,2),f=d[0],h=d[1],g=Object(X.default)();return o.a.createElement(q.a,{className:e.mainSummary,id:"coverMainSummary"},o.a.createElement(P.a,{value:c,showLabels:!0,onChange:function(e,t){return l(t)},id:"coverMainSummaryButton"},g.map((function(e,t){var a=V(e.category).icon;return o.a.createElement(I.a,{key:t,label:e.category,icon:a,onMouseOver:function(e){h(e.currentTarget),m(t)},onMouseOut:function(e){return h(null)}})}))),g[s].img?o.a.createElement(C.a,{open:Boolean(f),anchorEl:f,placement:"top"},o.a.createElement(q.a,{className:e.mainSummaryPopover,id:"coverMainSummaryPopper"},g[s].img)):o.a.createElement(o.a.Fragment,null),o.a.createElement(S.a,{mx:3,className:e.mainSummaryContent,id:"coverMainSummaryContent"},g[c].content))}var ee=a(3),te=a(160),ae=a(161),ne=a(162),re=a(163),oe=a(164),ce=a(177),le=a(89),ie=a.n(le),ue=a(90),se=a.n(ue),me=Object(A.a)((function(e){return{root:{display:"block",marginLeft:e.spacing(2),marginRight:e.spacing(2),"& > span":{display:"flex",height:e.spacing(1),backgroundColor:"#e1e4e8",borderRadius:"8px",overflow:"hidden"}},popup:{border:"1px solid",padding:e.spacing(1),backgroundColor:e.palette.background.paper}}}));function pe(e){var t=e.data,a=e.unit||"bytes",r=me(),c=o.a.useState(null),l=Object(n.a)(c,2),i=l[0],u=l[1],s=o.a.useState(0),m=Object(n.a)(s,2),p=m[0],d=m[1],f=Boolean(i);if("undefined"==typeof t)return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:r.root},o.a.createElement("span",{style:{backgroundColor:"#808080"},onMouseOver:function(e){u(e.currentTarget)},onMouseOut:function(e){return u(null)}})),o.a.createElement(C.a,{open:f,anchorEl:i},o.a.createElement("div",{className:r.popup},"Data not available")));var h=t.reduce((function(e,t){return e+t.value}),0);return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:r.root},o.a.createElement("span",null,t.map((function(e,t){return o.a.createElement("span",{style:{width:"".concat((e.value/h*100).toFixed(1),"%"),backgroundColor:e.color},onMouseOver:function(e){u(e.currentTarget),d(t)},onMouseOut:function(e){return u(null)},key:t})})))),o.a.createElement(C.a,{open:f,anchorEl:i},o.a.createElement("div",{className:r.popup},t[p].name,": ",t[p].value," ",a)))}var de=a(63),fe=Object(A.a)((function(e){return{root:{maxWidth:345,minWidth:273},media:{height:"200px",margin:e.spacing(1)},clickableMedia:{cursor:"pointer","&:hover::after":{display:"block",position:"relative",color:"#ffffff",content:"'\\A \\A \\A Click to view Preview'",whiteSpace:"pre",fontSize:"large",backgroundColor:"#000000cc",textAlign:"center",height:"100%",width:"100%"}},expand:{transform:"rotate(0deg)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:s.a[500]}}}));function he(e){var t=e.projectData,n=e.setHashStateProj,r=e.setUserPrompt,c=V(t.category||""),l=fe();return o.a.createElement(te.a,{className:l.root},o.a.createElement(ae.a,{avatar:o.a.createElement(ce.a,{alt:"","aria-label":"recipe",style:{backgroundColor:c.backgroundColor}},c.icon),action:o.a.createElement(v.a,{"aria-label":"Source Code",onClick:function(e){e.preventDefault(),"string"!=typeof t.sourceCode||t.sourceCode.length<=0?r({info:"The Source Code for ".concat(t.title," is not publicly available")}):window.open(t.sourceCode,"_blank")},href:t.sourceCode},o.a.createElement(U.a,null)),title:t.title,subheader:t.date}),o.a.createElement(pe,{data:t.codeComposition,unit:"bytes"}),o.a.createElement(ne.a,{className:Object(ee.a)(l.media,Object(d.a)({},l.clickableMedia,"undefined"!=typeof t.preview)),image:a(110)("./"+t.imgSrc),onClick:function(e){e.preventDefault(),n(t.title)}}),o.a.createElement(re.a,null,o.a.createElement(de.a,{children:t.summary})),o.a.createElement(oe.a,{disableSpacing:!0},o.a.createElement(v.a,{"aria-label":"add to favorites"},o.a.createElement(ie.a,null)),o.a.createElement(v.a,{"aria-label":"share"},o.a.createElement(se.a,null))))}var ge=Object(A.a)((function(e){return{}}));function be(e){ge();var t=Object(r.useContext)(g).setHashStateProj;return o.a.createElement(j.a,{maxWidth:e.maxWidth,id:"portfolio"},o.a.createElement(w.a,{spacing:2,justify:"center",container:!0},e.dataProjects.map((function(a,n){return o.a.createElement(w.a,{item:!0,key:n},o.a.createElement(he,Object.assign({},e,{projectData:a,setHashStateProj:t})))}))))}var Ee=a(173),ve=a(172);function ye(e){return o.a.createElement(ve.a,Object.assign({elevation:6,variant:"filled"},e))}function Ae(e){var t=e.duration,a=e.userPrompt,n=e.setUserPrompt,r=Object.keys(a)[0],c=a[r];if("string"!=typeof c||c.length<=0)return o.a.createElement(o.a.Fragment,null);var l=function(e,t){"clickaway"!==t&&n({})};return o.a.createElement(Ee.a,{open:Boolean(c),autoHideDuration:t,onClose:l},o.a.createElement(ye,{onClose:l,severity:r},c))}var je=a(171),Se=a(167),we=a(165),Ce=a(175),Oe=a(166),xe=Object(A.a)((function(e){return{preview:{padding:e.spacing(2)},appBar:{position:"relative"},title:{marginLeft:e.spacing(2),flex:1},fabButton:{position:"absolute",zIndex:2147483647,top:0,left:0,right:0,margin:"0 auto"}}})),Pe=o.a.forwardRef((function(e,t){return o.a.createElement(Ce.a,Object.assign({direction:"up",ref:t},e))}));function Ie(e){var t=e.lutProjectName,c=e.dataProjects,l=e.fullWidth,i=e.maxWidth,u=e.setUserPrompt,s=xe(),m=o.a.createElement(we.a,null),p=Object(r.useContext)(g),d=p.hashStateProj,f=p.setHashStateProj,h=c[t[d]],b=Object(r.useState)(m),E=Object(n.a)(b,2),v=E[0],y=E[1],A=Object(r.useState)(!0),j=Object(n.a)(A,2),S=j[0],w=j[1],C=function(){f(void 0),y(m)};return Object(r.useEffect)((function(){h&&("string"===typeof h.previewSrc?a(111)("./"+h.previewSrc).then((function(e){return y(e.default)})).catch((function(){return u({error:"Server Error, unable to retrieve preview data"})})):(u({info:"The Preview for ".concat(h.title," is not currently available")}),C()))}),[h]),o.a.createElement(je.a,{fullWidth:l,maxWidth:i,open:Boolean(h),onEntered:function(){S&&(u({success:"You can checkout the source code by click the GitHub icon."}),w(!1))},onClose:C,TransitionComponent:Pe},o.a.createElement(Oe.a,{color:"secondary","aria-label":"add",className:s.fabButton,onClick:function(e){e.preventDefault(),"string"!=typeof h.sourceCode||h.sourceCode.length<=0?u({info:"The Source Code for ".concat(h.title," is not publicly available")}):window.open(h.sourceCode,"_blank")}},o.a.createElement(U.a,null)),o.a.createElement(Se.a,{dividers:!0},v))}var We=E.default.reduce((function(e,t,a){return e[t.title]=a,e}),{});function Me(){var e=Object(r.useState)({info:""}),t=Object(n.a)(e,2),a=t[0],c=t[1];return o.a.createElement(u.a,{theme:p},o.a.createElement(i.a,null),o.a.createElement(b,null,o.a.createElement(Q,{setUserPrompt:c,dataProjects:E.default,lutProjectName:We}),o.a.createElement(be,{setUserPrompt:c,maxWidth:"lg",dataProjects:E.default}),o.a.createElement(Ie,{setUserPrompt:c,fullWidth:!0,maxWidth:"lg",dataProjects:E.default,lutProjectName:We}),o.a.createElement(Ae,{duration:5e3,userPrompt:a,setUserPrompt:c})))}l.a.render(o.a.createElement(Me,null),document.querySelector("#root"))},21:function(e,t,a){"use strict";a.r(t),t.default=[{title:"Portfolio",category:"Extracurricular",summary:"boobar",previewSrc:null,imgSrc:"projects/portfolio.png",footerIcons:[],date:"2020-06-20T21:59:48Z",codeComposition:[{color:"#f1e05a",name:"JavaScript",value:20015},{color:"#3572A5",name:"Python",value:7508},{color:"#e34c26",name:"HTML",value:1794}]},{title:"Raft Consensus",category:"Academic",summary:"Raft Consensus",previewSrc:"projects/raft.js",imgSrc:"projects/raft.png",footerIcons:[],date:"2020-02-11T10:26:01Z",sourceCode:"https://github.com/BenShen98/raft",codeComposition:[{color:"#6e4a7e",name:"Elixir",value:25954},{color:"#427819",name:"Makefile",value:1237},{color:"#89e051",name:"Shell",value:833}]},{title:"Probabilistic Localization",category:"Academic",summary:"Probabilistic Localization using Monte Carlo Particle Filter.\nThe graph above shows the particle evolution as the module receives the same reading in one direction.\n",previewSrc:null,imgSrc:"projects/robotics.gif",date:"2019-10-16T17:49:03Z",sourceCode:"https://github.com/BenShen98/robotics",codeComposition:[{color:"#3572A5",name:"Python",value:87565}]}]},31:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return y}));var n=a(0),r=a.n(n),o=a(43),c=a(27),l=a(92),i=a(151),u=a(3),s=Object(i.a)((function(e){return{root:{},explainable:{borderBottom:"1px dashed",textDecoration:"none",cursor:"pointer","& sup":{fontSize:"0.875rem",marginRight:"4px",lineHeight:"0"}}}}));function m(e){var t=e.children,a=e.sameWindow,n=Object(l.a)(e,["children","sameWindow"]),o=s(),i=n.href,m=n.title;return r.a.createElement("a",Object.assign({className:Object(u.a)(Object(c.a)({},o.explainable,Boolean(i)||Boolean(m))),onClick:function(e){Boolean(n.href)&&!Boolean(a)&&(e.preventDefault(),window.open(n.href,"_blank"))}},n),t)}var p=a(45),d=a.n(p),f=a(46),h=a.n(f),g={title:"QS Ranking",href:"https://www.topuniversities.com/universities/imperial-college-london"},b={title:"Electronic and Information Engineering",href:"https://www.imperial.ac.uk/study/ug/courses/electrical-engineering-department/electronic-information-meng/#structure"},E={title:"A consensus algorithm that can resist non-Byzantine fault, have same fault-tolerance and performance as Paxos",href:"https://raft.github.io/"},v={title:"A dynamic, functional language that leverages the Erlang VM, known for running low-latency, distributed and fault-tolerant systems.",href:"https://elixir-lang.org/"};function y(e){return[{category:"Academic",img:r.a.createElement("img",{src:d.a,height:"40px"}),content:r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{variant:"subtitle1"},r.a.createElement("b",null,"Imperial College London")," Oct 2017 -- Jun 2021",r.a.createElement("br",null),r.a.createElement(m,b,"EIE"),"  (MEng, Computer Science and Electronic Engineering)"),r.a.createElement(o.a,{component:"div"},r.a.createElement("ul",null,r.a.createElement("li",null,"Completing Bachelor with Master in ",r.a.createElement(m,g,"8th Globally Ranked University")),r.a.createElement("li",null,"Estimated to complete with First-Class Honours (72% Rolling Average)"),r.a.createElement("li",null,"Implemented ",r.a.createElement(m,E,"Raft Consensus algorithm")," using ",r.a.createElement(m,v,"Elixir")),r.a.createElement("li",null,"Built a robot with extendible arm and wrote particle model, won third place along 20 groups"),r.a.createElement("li",null,"Wrote a Compiler which can Compile ANSI C to MIPS Assembly and Python"))))},{category:"Placement",img:r.a.createElement("img",{src:h.a,height:"40px"}),content:r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{variant:"subtitle1"},r.a.createElement("b",null,"Arm")," Apr 2020  -- Sep 2020 ",r.a.createElement("br",null),"Six-months Industrial Placement in GIC and GPU Team."),r.a.createElement(o.a,{component:"div"},r.a.createElement("ul",null,r.a.createElement("li",null))))},{category:"Extracurricular",content:r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,null,"On my leisure time, I like to exploring new technology and apply them in projects. ",r.a.createElement("br",null),"It help me come across different area of Software Engineering and DevOps."),r.a.createElement(o.a,{component:"div"},r.a.createElement("ul",null,r.a.createElement("li",null))))},{category:"Management",content:r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,null),r.a.createElement(o.a,{component:"div"},r.a.createElement("ul",null,r.a.createElement("li",null))))}]}},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n).a.createElement("h1",null,"llolo");t.default=r},45:function(e,t,a){e.exports=a.p+"static/media/ic_logo.6509646c.png"},46:function(e,t){e.exports="data:image/png;base64,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"},70:function(e,t,a){e.exports=a.p+"static/media/portfolio.b433a55d.png"},71:function(e,t,a){e.exports=a.p+"static/media/raft - \u526f\u672c.284f3dd3.png"},72:function(e,t,a){e.exports=a.p+"static/media/raft.c79b7142.png"},73:function(e,t,a){e.exports=a.p+"static/media/robotics.b2823d43.gif"},74:function(e,t,a){e.exports=a.p+"static/media/projects_config.8c7d2840.yaml"},75:function(e,t,a){e.exports=a.p+"static/media/PowerToysSetup-0.19.1-x64.8a02ef6f.msi"},76:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAmVBMVEX///8AYpsAPHIAOnEAPnX7/f4AM24AQXcAWZIAWI+Elq4AK2p6jand4+rR2OGQnrQASH8AMG4AXZUAQ34AUooiSXkAZp85WYQAJ2gAI2cAT4kAAFouU4BYb5IWRXhQaY7o7vKcqb1ieZoAG2LU2+QAO3cARX9qgJ/DzNgAAFSyvMsAU44ANW6otcbl6u+2wc8AF2E2WIMAD2J8Yt/RAAAE6ElEQVR4nO2d7XKiPABGIXyLImBMgdoWW6tuX6rdvf+LW0Bdo6Xd6uqbjz7nhyPB6TxnkkAS6MQwADiRhegA16b84YiOcGXKW90NV7obRqHtDkSHuCZORllhiU5xTabPzGTJi+gYV+SuqA1jnW8Y4yII/Pmd6BhX5J7YNrEeRMe4IvcBY+w/vQ1N06QwVJnWUO9WStM0LfS9lpaLitRYVb8UHeU6TJ9GKatbKUtHmZbDmscsNXf4eV90nMvzmJg8mXaKw9A8JH8VHemyzJ7SI0M/X4kOdVEmBTsyZHOtbovr8FiwaaeR6FgXZEzfC7JYo0qc5e8Fa5706Ym9UUcjNc3nqehgF2Psd9ZhcSM62KUouxupmYa6rJ0uk85GWg9sZqKjXYhmDbETdy062oXozbsFmTaXmkXRbWjOe6KjXYjHgnWji+E0sXm8PXao+gTD2dwNHmI/6MKfL/ifqch0U0UP7yYW2ytN/NieH6q7pmGP64/Xp6pj3N1Cq6y5XyQ/RQc9Gzc0jOgtjekHdUhj/21gGLktOuiZOFHlrlZ3sRk3q6Rd0NicL1aD0FZ1bDN0SZZVxCLE6qY+QaossxNl7/wuYcwL2Eet1KRx3VCZaXmig56L4xJzY8j1PcbeG6raD1vDOTkwpKPnET0wJLFJFDa0w/6YM6T5zfC1Nwl9tje8WYQqGyavxoTuDFnhLtvydbjtmLVhcWcME4X7YWZwhkG4W3ka5Cln6OQKGya8obsfZg83c+KdocqtlDPkV2W2KzeaGVJ+Zc3zdTTkx9djLQ35OoShIuhvaPwxZJ2GbGNoKHs/XC4rdzYY03oG7KepTyeDaEdTWhPHafEwiEIvUvNR4vKW2Flm7eaHxMr2bItIW2pbb4pOgaOExBz2B99jou6r3xXhln99jzuwfe5A6RkwN90NvP1BbchN9ZWeAR8btm996WtYZHkSMJrkIfW0NKwms/IljKtlGd1bWhqGZV328tbM81eZjoZ00pRt/7NrrKVhO2qDoVrAEIby82VDVceljsOPvE1/a9ieqw0PRt5qPsnvh+TgxQty32C1n0dnckUfIPZd+/Bx6B774EDlJ6Rcbws87sDWoh+2zw+/ZKjJtfSbzIBhqBgwhKH8wBCG8gNDGMoPDGEoPzCEofzAEIbyA0MYyg8MYSg/MISh/MAQhvIDQxjKDwxhKD8whKH8wBCG8gNDGMoPDGEoPzCEofzAEIbyA0MYyg8MYSg/MISh/MAQhvIDQxjKDwxhKD8whKH8wBCG8gNDGMoPDGEoPzCEofzAEIbyA0MYys83NWSaG9L585wyfQ1pNhlOe+Mw0NWQJttdOjNNd2Gx/uzSGeVES8Nwv0tnz9XTkN+lU0vDCXfKCzQ07NilUzfD9zs8wlB6voWh+SVDNXd/KMtmF5ZDQ2dHbchNNCzPccpSdOCTef2RZ8QmHFa+hy+vf5Xnt2vRgU9nndhHeB3ftmxHrIqR8Ht0frZLZ91O70WHPYuE74WfzfGVvdbAEIbyA0MYyg8MYSg/MISh/MAQhvIDQxjKDwxhKD/NauKhIbeamPILjaoa5u7oAPeD782hJTrsWfSGJyA67Mk4y+UyOoX696Izn0Z5G57KL9GZAUf065Oqyj45d7v6+x+XAmdwLqKTf4nlov8vLGaiBf5K1O/9C3016hH8r/wGAvq8+cS9N54AAAAASUVORK5CYII="}},[[100,1,2]]]);
//# sourceMappingURL=main.fc59147f.chunk.js.map