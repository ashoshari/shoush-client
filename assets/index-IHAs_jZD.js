import{r as a,j as e,a as M}from"./react-BHfQynsH.js";import{c as J}from"./react-dom-D7AI4CH_.js";import{L as C,c as _,R as $}from"./react-router-dom-B4fmH9TY.js";import{d as I,a as B,b as V,c as q,e as G,f as K,g as Y,C as z,h as F}from"./@mui-BObmwAS2.js";import{c as P,O as H,f as X}from"./react-router-DGtqSh3c.js";import{D as T}from"./react-datepicker-3n6fT9mT.js";import{E as W}from"./jspdf-BO9DrAYJ.js";import{a as Z}from"./jspdf-autotable-BUNA34cR.js";import"./@babel-D1ByG9qN.js";import"./scheduler-CzFDRTuY.js";import"./@remix-run-CA71pd9M.js";import"./clsx-B-dksMZM.js";import"./@emotion-DV4DrR78.js";import"./hoist-non-react-statics-Buxaj0Kl.js";import"./react-is-8JwjhRSi.js";import"./stylis-FDnFs_-n.js";import"./date-fns-DtkU1RN2.js";import"./react-onclickoutside-DdNPp3y5.js";import"./@floating-ui-CnmrosMm.js";import"./fflate-Cf-_J6lE.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function i(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=i(r);fetch(r.href,s)}})();function Q({state:n,setState:t}){const i="vacationsTabs animate",[o,r]=a.useState(!1),s=()=>{t(!n),r(!o)};return e.jsx("div",{className:"sidebarc",children:e.jsxs("ul",{className:"sidebarNav",children:[e.jsxs(C,{to:"/",className:"sidebarNavLinks",onClick:()=>t(!n),children:[e.jsx(I,{className:"icon"})," ",e.jsx("p",{children:"Home"})]}),e.jsxs(C,{to:"/employees",className:"sidebarNavLinks",onClick:()=>t(!n),children:[e.jsx(B,{className:"icon"})," ",e.jsx("p",{children:"Employees"})]}),e.jsx("div",{className:"vacationsTab",style:{cursor:"pointer"},onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),children:e.jsxs("div",{className:"vacationTitle",children:[e.jsx(V,{className:"icon"}),e.jsxs("p",{children:["Vacations ",e.jsx("i",{children:o?"↓":"→"})]}),e.jsxs("div",{className:o?i:"vacationsTabs",children:[e.jsx(C,{to:"/request-vacation",className:"requestVacation",onClick:s,children:"Request vacation"}),e.jsx(C,{to:"/vacations",className:"vacationsTabHeadline",onClick:s,children:"Vacations"})]})]})}),e.jsxs(C,{to:"/salaries",className:"sidebarNavLinks",onClick:()=>t(!n),children:[e.jsx(q,{className:"icon"})," ",e.jsx("p",{children:"Salaries"})]}),e.jsxs(C,{to:"/reports",className:"sidebarNavLinks",onClick:()=>t(!n),children:[e.jsx(G,{className:"icon"})," ",e.jsx("p",{children:"Reports"})]}),e.jsxs(C,{to:"/careers",className:"sidebarNavLinks",onClick:()=>t(!n),children:[e.jsx(K,{className:"icon"})," ",e.jsx("p",{children:"Careers"})]}),e.jsxs(C,{to:"/contact",className:"sidebarNavLinks",onClick:()=>t(!n),children:[e.jsx(Y,{className:"icon"})," ",e.jsx("p",{children:"Contact us"})]}),e.jsxs(C,{to:"/",className:"sidebarNavLinks",onClick:()=>t(!n),children:[e.jsx(I,{className:"icon"})," ",e.jsx("p",{children:"About us"})]})]})})}function ee({state:n,setState:t}){return e.jsx("nav",{className:"mobileNav",onClick:()=>t(!n),children:e.jsxs("div",{className:"navLink",href:"#",children:[e.jsx("div",{style:{backgroundColor:n?"#fff":"#000"}}),e.jsx("div",{style:{backgroundColor:n?"#fff":"#000"}}),e.jsx("div",{style:{backgroundColor:n?"#fff":"#000"}})]})})}const se=(n,t)=>{switch(t.type){case"LOGIN":return{...n,user:null,isLoading:!0};case"LOGIN_SUCCESS":return{...n,user:t.payload,isLoading:!1};case"LOGOUT":return{...n,user:null,isLoading:!1};case"DARKEN":return{...n,darken:t.payload};case"GET_EMPLOYEES":return{...n,employees:t.payload};default:return n}},U={user:JSON.parse(localStorage.getItem("user"))||null,employees:[],isLoading:!1,darken:!1},D=M.createContext(U),ne=({children:n})=>{const[t,i]=a.useReducer(se,U);a.useEffect(()=>{localStorage.setItem("user",JSON.stringify(t.user))},[t.user]);const o=async()=>{const s=await(await fetch("https://shoush-api.vercel.app/get-employees")).json();i({type:"GET_EMPLOYEES",payload:s})};return a.useEffect(()=>{o()},[]),e.jsx(D.Provider,{value:{user:t.user,isLoading:t.isLoading,darken:t.darken,employees:t.employees,getEmployees:o,dispatch:i},children:n})};function ae(){const{darken:n,user:t,dispatch:i}=a.useContext(D),[o,r]=a.useState(!1),s=P(),c=o?"sideBar display":"sideBar",p=d=>{d.preventDefault(),r(!o),t&&i({type:"LOGOUT"}),s("/login")};return e.jsxs("div",{className:"routes",children:[e.jsx(ee,{setState:r,state:o}),e.jsx("div",{className:c,children:e.jsx(Q,{setState:r,state:o})}),e.jsx(C,{to:"/",className:"loginLogout",onClick:p,children:t?e.jsx("p",{children:"Logout"}):e.jsx("p",{children:"Login"})}),e.jsx(H,{}),n?e.jsx("div",{className:"darken"}):null]})}const te="/shoush-client/assets/globe-CHt7HdzD.jpg";function re(){return e.jsxs("div",{className:"home",children:[e.jsxs("div",{className:"first",children:[e.jsxs("div",{className:"firstLeft",children:[e.jsx("h3",{children:"Necessity and invention"}),e.jsx("p",{children:"Shoush was founded in 1996, driven by the desire to democratize scientific research by expanding its availability, which meant giving scholarly publishers the software that they needed to excel in a new—and often intimidating—digital environment."}),e.jsx("p",{children:"Shoush’s initial development efforts resulted in Literatum, our online publishing and website development platform, first released in 1999. What was a five-person technology startup in Silicon Valley is now an influential global organization with a team of 500 in six offices across the United States, the UK, Jordan, the Czech Republic, Greece, and China."})]}),e.jsx("div",{className:"firstRight",children:e.jsx("img",{src:te,alt:"globe"})})]}),e.jsxs("div",{className:"second",children:[e.jsxs("div",{className:"secondLeft",children:[e.jsx("h3",{children:"Technology specifically for publishers"}),e.jsx("p",{children:"Over the 25+ years that Literatum has been in continuous development, we’ve gained a deep understanding of what it takes to power a successful online publishing business. Our product development is driven in part by our clients’ requirements for their own businesses. New features are regularly added to meet the design, editorial, and marketing needs of our expanding client base."}),e.jsx("h3",{style:{marginTop:"5rem "},children:"A fast-growing technology company"}),e.jsx("p",{children:"Today Shoush has over 200 clients, including some of the world’s largest publishers; several date back to our first years in business. Literatum is home to 32 million articles in over 15,000 journals, as well as nearly half a million books, in over a dozen languages and on more than 900 publication websites. The platform logs over 5.1 billion user sessions annually. We rival larger Silicon Valley companies in our aggressive pursuit of new technologies. Engineers comprise more than two thirds of our staff, and our ongoing, award-winning R&D team applies machine learning and AI-based technologies that keep our customers at the forefront of online publishing."})]}),e.jsxs("div",{className:"secondRight",children:[e.jsx("h3",{children:"Technology in the service of knowledge"}),e.jsx("p",{children:"Our clients want to promote and distinguish their brands while forging lasting connections with their readers. So we look at publishing through the eyes of readers and authors, because we believe that prioritizing their online experience is the best way to foster a loyal customer base."}),e.jsx("p",{children:"We’re building new tools to make the workflows of practitioners, clinicians, and researchers more convenient and productive—from discovery and reading to collaborating and authoring."}),e.jsx("p",{children:"Our focus today remains much the same as it was more than 25 years ago: providing superior technology and personal service to help publishers grow their online businesses."})]})]})]})}function le(){const n=a.useRef(),t=a.useRef(),i=a.useRef(),[o,r]=a.useState(""),s=P(),{dispatch:c}=a.useContext(D),p=async d=>{if(n.current.value.length<7)r("Username must be at least 7 characters in length");else if(t.current.value.length<7)r("Password must be at least 7 characters in length");else if(t.current.value!==i.current.value)r("passwords do not match");else{const m={username:n.current.value,password:t.current.value};await fetch("https://shoush-api.vercel.app/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(m)}),c({type:"LOGIN"});const u=await(await fetch("https://shoush-api.vercel.app/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(m)})).json();c({type:"LOGIN_SUCCESS",payload:u}),s("/")}};return e.jsxs("div",{className:"formContainer",children:[e.jsx("p",{className:"error",children:o}),e.jsxs("form",{className:"form",children:[e.jsxs("div",{className:"row",children:[e.jsx("label",{htmlFor:"",children:"Username"}),e.jsx("input",{type:"text",ref:n,placeholder:"Username",className:"formInput"})]}),e.jsxs("div",{className:"row",children:[e.jsx("label",{htmlFor:"",children:"Password"}),e.jsx("input",{type:"password",ref:t,placeholder:"Password",className:"formInput"})]}),e.jsxs("div",{className:"row",children:[e.jsx("label",{htmlFor:"",children:"Confirm password"}),e.jsx("input",{type:"password",ref:i,placeholder:"Confirm Password",className:"formInput"})]}),e.jsx("div",{className:"row",children:e.jsx("button",{type:"button",className:"btn",onClick:p,children:"Sign Up"})}),e.jsx("div",{className:"row",children:e.jsxs("p",{className:"register",children:["Already have an account ? ",e.jsx(C,{to:"/login",children:"Login"})]})})]})]})}function ie(){const{dispatch:n,isLoading:t}=a.useContext(D),i=a.useRef(),o=a.useRef(),[r,s]=a.useState(""),c=P(),p=async d=>{if(i.current.value.length<7)s("Username must be at least 7 characters in length");else if(o.current.value.length<7)s("Password must be at least 7 characters");else{const m={username:i.current.value,password:o.current.value};n({type:"LOGIN"});const u=await(await fetch("https://shoush-api.vercel.app/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(m)})).json();n({type:"LOGIN_SUCCESS",payload:u}),u?c("/"):s("Your login credentials don't match an account in our system.")}};return e.jsxs("div",{className:"formContainer",children:[e.jsx("p",{className:"error",children:r}),e.jsxs("form",{className:"form",children:[e.jsxs("div",{className:"row",children:[e.jsx("label",{htmlFor:"",children:"Username"}),e.jsx("input",{type:"text",ref:i,placeholder:"Username",className:"formInput"})]}),e.jsxs("div",{className:"row",children:[e.jsx("label",{htmlFor:"",children:"Password"}),e.jsx("input",{type:"password",ref:o,placeholder:"Password",className:"formInput"})]}),e.jsx("div",{className:"row",children:e.jsx("button",{type:"button",className:"btn",disabled:t,onClick:p,children:t?e.jsx(z,{color:"inherit",size:"15px"}):"Log In"})}),e.jsx("div",{className:"row",children:e.jsxs("p",{className:"register",children:["Don't have an account ? ",e.jsx(C,{to:"/signup",children:"Register"})]})})]})]})}function oe(){return e.jsx("form",{children:e.jsx("input",{type:"checkbox",checked:!0})})}function ce(){const[n,t]=a.useState(!0),i=a.useRef(),o=a.useRef(),[r,s]=a.useState(new Date),[c,p]=a.useState(new Date),d=a.useRef(),m=a.useRef(),[b,u]=a.useState({}),[j,x]=a.useState(!1),{employees:h}=a.useContext(D),y=f=>{f.target.value==="Annual"||f.target.value==="Sick"?t(!0):t(!1)},g=async()=>{var v,l,S,w,R,A,O,k;let f={};if((((l=(v=d==null?void 0:d.current)==null?void 0:v.value)==null?void 0:l.length)<1||((w=(S=d==null?void 0:d.current)==null?void 0:S.value)==null?void 0:w.length)>2)&&(f.numberOfDaysErr="please enter a valid number of days"),(Number((R=m==null?void 0:m.current)==null?void 0:R.value)>8||Number((A=m==null?void 0:m.current)==null?void 0:A.value)<1)&&(f.numberOfHoursErr="please enter a valid number of hours"),u(f),console.log(r),JSON.stringify(f)==="{}"){const E={name:i.current.value,type:o.current.value,startDate:r,numberOfDays:(O=d==null?void 0:d.current)==null?void 0:O.value,numberOfHours:(k=m==null?void 0:m.current)==null?void 0:k.value,endDate:c};await fetch("https://shoush-api.vercel.app/request-vacation",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(E)}).then(()=>{setTimeout(()=>{x(!0)},0)})}},N=async()=>{const f=new Date(r),v=d.current.value;f.setDate(f.getDate()+Number(v));const l=new Date(f);let S=l.getMonth()+1,w=l.getDate();S<10&&(S="0"+S),w<10&&(w="0"+w);const R=`${l.getFullYear()}-${S}-${w}`;p(new Date(R))};return h.length===0?e.jsx("div",{className:"formContainer",children:e.jsx("h1",{style:{textAlign:"center",fontSize:"3rem"},children:"There are no employees to request vacation."})}):e.jsx("div",{className:"formContainer",style:{width:j?"100%":"50%"},children:j?e.jsx("p",{className:"message",children:"Vacation has been requested successfully"}):e.jsxs("form",{className:"form",children:[e.jsxs("div",{className:"row",children:[e.jsx("label",{children:" Name"}),e.jsx("select",{ref:i,children:h&&h.map(f=>e.jsx("option",{children:Object.values(f)[2]},f._id))})]}),e.jsxs("div",{className:"row",children:[e.jsx("label",{children:"Choose vacation type:"}),e.jsxs("select",{onChange:y,ref:o,children:[e.jsx("option",{children:"Annual"}),e.jsx("option",{children:"Sick"}),e.jsx("option",{children:"Day time leave"})]})]}),e.jsxs("div",{className:"row",children:[e.jsx("label",{children:"Start Date"}),e.jsx(T,{selected:r,onChange:f=>s(f),showYearDropdown:!0,scrollableYearDropdown:!0,yearDropdownItemNumber:60,minDate:r})]}),n?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"row",children:[e.jsx("label",{children:"Number of days"}),e.jsx("input",{type:"number",ref:d,onChange:N}),e.jsx("p",{className:"error",children:b.numberOfDaysErr})]}),e.jsxs("div",{className:"row",children:[e.jsx("label",{children:"End date"}),e.jsx(T,{selected:c,onChange:f=>p(f),showYearDropdown:!0,scrollableYearDropdown:!0,yearDropdownItemNumber:60,maxDate:c})]})]}):e.jsxs("div",{className:"row",children:[e.jsx("label",{children:"Number of hours"}),e.jsx("input",{type:"number",ref:m}),e.jsx("p",{className:"error",children:b.numberOfHoursErr})]}),e.jsx("div",{className:"row",children:e.jsx("button",{type:"button",className:"btn",onClick:g,children:"Request"})})]})})}function de(){const[n,t]=a.useState(""),i=a.useRef(),o=a.useRef(),r=a.useRef(),[s,c]=a.useState(),[p,d]=a.useState(!1),{employees:m}=a.useContext(D),b=()=>{const j=new W;Z(j,{html:"#table",theme:"grid",headStyles:{fontSize:"15",halign:"center",fillColor:"#136629"},bodyStyles:{cellWidth:45},didParseCell:function(x){x.row.index===4&&(x.cell.styles.fillColor="#136629",x.cell.styles.textColor="#fff"),x.row.index===5&&(x.row.cells[1].styles.fillColor="#aed1b7",x.row.cells[3].styles.fillColor="#aed1b7",x.cell.styles.halign="center"),x.row.index===16&&(x.row.cells[1].styles.fillColor="#136629",x.row.cells[1].styles.textColor="#fff")}}),j.save("table.pdf")},u=async()=>{if(r.current.value===""||r.current.value>new Date().getFullYear())t("please enter a valid year");else if(Number(o.current.value)>12||Number(o.current.value)<1)t("please enter a valid month");else{const j={name:i.current.value,month:o.current.value,year:r.current.value},h=await(await fetch("https://shoush-api.vercel.app/report",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(j)})).json();h?(c(h),d(!0)):t("Report data not found in our system")}};return e.jsxs(e.Fragment,{children:[p?e.jsxs("table",{border:"1",id:"table",className:"report",children:[e.jsx("thead",{children:e.jsx("tr",{children:e.jsx("th",{colSpan:"4",style:{textAlign:"center",fontSize:"2.4rem"},children:"Salary Statement of the Month"})})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"bold",rowSpan:"1",children:"Employee Name"}),e.jsxs("td",{children:[s==null?void 0:s.name," "]}),e.jsx("td",{className:"bold",children:"Joining Date"}),e.jsx("td",{children:s==null?void 0:s.joiningDate})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"bold",children:"Emoployee Number"}),e.jsx("td",{children:s==null?void 0:s.id}),e.jsx("td",{className:"bold",children:"Designation"}),e.jsx("td",{children:s==null?void 0:s.designation})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"bold",children:"Account Number"}),e.jsx("td",{children:s==null?void 0:s.accNumber}),e.jsx("td",{className:"bold",children:"Total Paid Leaves"}),e.jsx("td",{children:s==null?void 0:s.totalPaidLeaves})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"bold",children:"Salary Month"}),e.jsx("td",{children:s==null?void 0:s.month}),e.jsx("td",{className:"bold",children:"Day Present"}),e.jsx("td",{children:s==null?void 0:s.dayPresent})]}),e.jsxs("tr",{children:[e.jsx("th",{colSpan:"2",style:{textAlign:"center"},children:"Earnings"}),e.jsx("th",{colSpan:"2",style:{textAlign:"center"},children:"Deductions"})]}),e.jsxs("tr",{children:[e.jsx("td",{}),e.jsx("td",{className:"bold",style:{textAlign:"center"},children:"Amount"}),e.jsx("td",{}),e.jsx("td",{className:"bold",style:{textAlign:"center"},children:"Amount"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"bold",children:"Basic Salary"}),e.jsx("td",{children:s==null?void 0:s.basicSalary}),e.jsx("td",{className:"bold",children:"SSC"}),e.jsx("td",{children:s==null?void 0:s.SSC})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"bold",children:"Acommodation"}),e.jsx("td",{children:s==null?void 0:s.accomodation}),e.jsx("td",{className:"bold",children:"Income tax"}),e.jsx("td",{children:s==null?void 0:s.incomeTax})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"bold",children:"Transportation"}),e.jsx("td",{children:s==null?void 0:s.transportation}),e.jsx("td",{className:"bold",children:"Medical Insurance"}),e.jsx("td",{children:s==null?void 0:s.medicalInsurance})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"bold",children:"Phone"}),e.jsx("td",{children:s==null?void 0:s.phone}),e.jsx("td",{className:"bold",children:"Loan"}),e.jsx("td",{children:s==null?void 0:s.loan})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"bold",children:"Meals"}),e.jsx("td",{children:s==null?void 0:s.meals}),e.jsx("td",{className:"bold",children:"Advance"}),e.jsx("td",{children:s==null?void 0:s.advance})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"bold",children:"Fuel"}),e.jsx("td",{children:s==null?void 0:s.fuel}),e.jsx("td",{className:"bold",children:"Misc. Deductions"}),e.jsx("td",{children:s==null?void 0:s.miscDeductions})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"bold",children:"Guaranteed Bonus"}),e.jsx("td",{children:s==null?void 0:s.bonus}),e.jsx("td",{}),e.jsx("td",{})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"bold",children:"Perf Incentives"}),e.jsx("td",{children:s==null?void 0:s.incentives}),e.jsx("td",{}),e.jsx("td",{})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"bold",children:"Arrears"}),e.jsx("td",{children:s==null?void 0:s.arrears}),e.jsx("td",{}),e.jsx("td",{})]}),e.jsxs("tr",{children:[e.jsx("th",{className:"bold",children:"Gross Earnings"}),e.jsx("td",{children:s==null?void 0:s.totalEarnings}),e.jsx("th",{className:"bold",children:"Gross Deductions"}),e.jsx("td",{children:s==null?void 0:s.totalDeductions})]}),e.jsxs("tr",{children:[e.jsx("td",{}),e.jsx("th",{className:"bold",children:"NET PAY"}),e.jsx("td",{className:"bold",children:s==null?void 0:s.netSalary}),e.jsx("td",{})]})]})]}):e.jsxs("div",{className:"formContainer",children:[e.jsx("div",{children:e.jsx("p",{className:"error",children:n})}),e.jsxs("form",{className:"form",children:[e.jsxs("div",{className:"row",children:[e.jsx("label",{children:" Name"}),e.jsx("select",{ref:i,children:m.map(j=>e.jsx("option",{children:Object.values(j)[3]},j._id))})]}),e.jsxs("div",{className:"row",children:[e.jsx("label",{children:" Month"}),e.jsx("input",{type:"text",ref:o,defaultValue:8})]}),e.jsxs("div",{className:"row",children:[e.jsx("label",{children:" Year"}),e.jsx("input",{type:"text",ref:r,defaultValue:2023})]}),e.jsx("div",{className:"row",children:e.jsx("button",{type:"button",onClick:u,children:"GO"})})]})]}),p?e.jsx("div",{className:"downloadBtn",style:{textAlign:"center"},children:e.jsx("button",{onClick:b,style:{width:"35%"},children:"Download"})}):null]})}function he(){const[n,t]=a.useState([]),[i,o]=a.useState({}),r=a.useRef(),s=a.useRef(),c=a.useRef(),[p,d]=a.useState(!1),m=async b=>{var h,y;let u={},j=r.current.value.split(" "),x=0;for(let g=0;g<j.length;g++)j[g]!==""&&x++;if(x<3&&(u.fullNameErr="please provide your full name"),c.current.value===""&&(u.yearsOfExperienceErr="please enter a valid number of years"),n.length===0&&(u.filesErr="please upload resume and/or resume image"),o(u),JSON.stringify(u)==="{}"){const g={fullName:r.current.value,designation:s.current.value,yearsOfExperience:c.current.value,submitDate:new Date},N=new FormData,f=`${Date.now()}${(h=n[0])==null?void 0:h.name}`,v=`${Date.now()}${(y=n[1])==null?void 0:y.name}`;for(let l=0;l<n.length;l++)N.append("files",n[l]);g.resume=f,g.resumeImage=v,await fetch("https://shoush-api.vercel.app/upload",{method:"POST",body:N}),await fetch("https://shoush-api.vercel.app/apply-career",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(g)}).then(()=>{setTimeout(()=>{d(!0)},0)})}};return e.jsx("div",{className:"formContainer",style:{width:p?"100%":"50%"},children:p?e.jsx("p",{className:"message",children:"Thanks for applying, we will contact you as soon as possible"}):e.jsxs("form",{className:"form",children:[e.jsxs("div",{className:"row",children:[e.jsx("label",{children:"Full name"}),e.jsx("input",{type:"text",ref:r})]}),e.jsx("p",{className:"error",children:i.fullNameErr}),e.jsxs("div",{className:"row",children:[e.jsx("label",{children:"Designation"}),e.jsxs("select",{ref:s,children:[e.jsx("option",{children:"Project Manager"}),e.jsx("option",{children:"Analyst"}),e.jsx("option",{children:"Full-stack developer"}),e.jsx("option",{children:"Back-end developer"}),e.jsx("option",{children:"Front-end developer"}),e.jsx("option",{children:"UX designer/Graphic designer"}),e.jsx("option",{children:"The (quality) tester"})]})]}),e.jsxs("div",{className:"row",children:[e.jsx("label",{children:"Years of experience"}),e.jsx("input",{type:"number",ref:c})]}),e.jsx("p",{className:"error",children:i.yearsOfExperienceErr}),e.jsxs("div",{className:"row",children:[e.jsxs("label",{htmlFor:"resumeFile",className:"downloadImg",children:[e.jsx(F,{className:"postIcon"}),e.jsx("span",{children:"Upload resume"})]}),e.jsx("input",{type:"file",accept:".png,.jpeg,.jpg",id:"resumeFile",name:"file",className:"upload",onChange:b=>t([...n,b.target.files[0]])})]}),e.jsxs("div",{className:"row",children:[e.jsxs("label",{htmlFor:"resumeImage",className:"downloadImg",children:[e.jsx(F,{className:"postIcon"}),e.jsx("span",{children:"Upload resume image"})]}),e.jsx("input",{type:"file",accept:"application/pdf,application/msword",id:"resumeImage",className:"upload",onChange:b=>t([...n,b.target.files[0]]),name:"image"})]}),e.jsx("p",{className:"error",children:i.filesErr}),e.jsx("div",{className:"row",children:e.jsx("button",{type:"button",className:"btn",onClick:m,children:"Request"})})]})})}const ue="/shoush-client/assets/company-BaDDz2Ub.jpg";function pe(){return e.jsxs("div",{className:"contact",children:[e.jsxs("div",{className:"infos",children:[e.jsx("div",{className:"email",children:"Email: shoush2022@hotmail.com"}),e.jsx("div",{className:"tel",children:"Tel: + 96279-7393-644"}),e.jsx("div",{className:"fax",children:"Fax: + 96278-0620-315"})]}),e.jsx("div",{className:"company",children:e.jsx("img",{src:ue,alt:"company",className:"companyImg"})})]})}function me({content:n,table:t,setEdit:i,state:o,updateState:r}){const[s,c]=a.useState(n),[p,d]=a.useState(),{dispatch:m,getEmployees:b}=a.useContext(D),[u,j]=a.useState(n.Manager);a.useEffect(()=>{d(JSON.stringify(n)===JSON.stringify(s))},[s,n]);const x=async h=>{m({type:"DARKEN",payload:!1}),t==="Employee"?await fetch("https://shoush-api.vercel.app/edit-employee",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(s)}).then(y=>{i(!1),b()}):await fetch("https://shoush-api.vercel.app/edit-salary",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(s)}).then(()=>{r(!o),i(!1)})};return e.jsx("div",{className:"window",children:e.jsxs("form",{className:"form",children:[e.jsx("div",{className:"cancelForm",onClick:()=>{i(!1),m({type:"DARKEN",payload:!1})},children:"X"}),Object.entries(s).map(([h,y])=>e.jsxs("div",{className:h==="Manager"?"isManager":"row",style:{display:h==="Total Earnings"||h==="Total Deductions"||h==="Net Salary"?"none":"flex"},children:[e.jsx("p",{children:h},h),h==="Manager"?e.jsx("input",{type:"checkbox",checked:u,onChange:g=>{j(!u),c({...s,Manager:g.target.checked})}}):e.jsx("input",{value:y,onChange:g=>{c({...s,[h]:g.target.value})},disabled:h==="_id"||h==="Account Number"||h==="employeeId"||h==="SSC"||h==="Hire Date"||h==="Birth Date"||h==="createdAt"||h==="updatedAt"})]},h)),e.jsxs("div",{className:"row",children:[e.jsx("button",{type:"button",className:"btn",disabled:p,onClick:x,style:{opacity:p?"0.6":"1"},children:"CONFIRM"}),e.jsx("button",{className:"btn",onClick:()=>{i(!1),m({type:"DARKEN",payload:!1})},children:"CANCEL"})]})]})})}function xe({id:n,data:t,setDelete:i,state:o,updateState:r}){const{dispatch:s,getEmployees:c}=a.useContext(D),p=async d=>{s({type:"DARKEN",payload:!1}),t==="Salary"?await fetch(`https://shoush-api.vercel.app/delete-salary/${d}`,{method:"POST",headers:{"Content-type":"application/json"}}).then(()=>{r(!o),i(!1)}):await fetch(`https://shoush-api.vercel.app/delete-employee/${d}`,{method:"POST",headers:{"Content-type":"application/json"}}).then(()=>{i(!1),c()})};return e.jsxs("div",{className:"delete",children:[e.jsxs("h4",{children:["Are you sure you want to delete this ",t," ?"]}),e.jsxs("div",{className:"deleteOptions",children:[e.jsx("button",{type:"button",className:"btn",onClick:()=>p(n),children:"Delete"}),e.jsx("button",{type:"button",className:"btn",onClick:()=>{i(!1),s({type:"DARKEN",payload:!1})},children:"Cancel"})]})]})}function je({setAddEmployee:n}){const t=a.useRef(),i=a.useRef(),o=a.useRef(),r=a.useRef(),s=a.useRef(),c=a.useRef(),p=a.useRef(),d=a.useRef(),m=a.useRef(),b=a.useRef(),[u,j]=a.useState({}),[x,h]=a.useState(new Date),[y,g]=a.useState(new Date),{dispatch:N,getEmployees:f}=a.useContext(D),v=()=>{let l={};const S=/^([\u0600-\u06ff]|[\u0750-\u077f]|[\ufb50-\ufbc1]|[\ufbd3-\ufd3f]|[\ufd50-\ufd8f]|[\ufd92-\ufdc7]|[\ufe70-\ufefc]|[\ufdf0-\ufdfd]|[ ])*$/g,w=/^[a-zA-Z]|[ ]+$/;S.test(t.current.value)||(l.nameArErr="Arabic name must be in arabic"),w.test(i.current.value)||(l.nameEnErr="English name must be in english");let R=i.current.value.split(" "),A=0;for(let E=0;E<R.length;E++)R[E]!==""&&A++;A<3&&(l.nameEnErr="please provide your full name");let O=t.current.value.split(" "),k=0;for(let E=0;E<O.length;E++)O[E]!==""&&k++;if(k<3&&(l.nameArErr="please provide your full name"),o.current.value===""&&(l.accountNumberErr="account number can't be empty"),(Number(r.current.value)>60||Number(r.current.value)<18||r.current.value==="")&&(l.ageErr="please enter a valid age"),s.current.value.length!==10&&(l.phoneNumberErr="please enter a valid phone number"),j(l),JSON.stringify(l)==="{}"){const E={nameAR:t.current.value,nameEN:i.current.value,accountNumber:o.current.value,age:r.current.value,phoneNumber:s.current.value,city:c.current.value,gender:p.current.value,maritalStatus:d.current.value,designation:m.current.value,isManager:b.current.checked,hireDate:y,birthDate:x};N({type:"DARKEN",payload:!1}),fetch("https://shoush-api.vercel.app/add-employee",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(E)}).then(()=>{n(!1),f()})}};return e.jsx("div",{className:"window",children:e.jsxs("form",{className:"form",children:[e.jsx("div",{className:"cancelForm",onClick:()=>{n(!1),N({type:"DARKEN",payload:!1})},children:"X"}),e.jsxs("div",{className:"row",children:[e.jsx("label",{children:"Arabic name"}),e.jsx("input",{type:"text",ref:t})]}),e.jsx("p",{className:"error",children:u.nameArErr}),e.jsxs("div",{className:"row",children:[e.jsx("label",{children:"English name"}),e.jsx("input",{type:"text",ref:i})]}),e.jsx("p",{className:"error",children:u.nameEnErr}),e.jsxs("div",{className:"row",children:[e.jsx("label",{children:"Account number"}),e.jsx("input",{type:"text",ref:o})]}),e.jsx("p",{className:"error",children:u.accountNumberErr}),e.jsxs("div",{className:"row",children:[e.jsx("label",{children:" "}),e.jsxs("select",{ref:p,children:[e.jsx("option",{children:"Male"}),e.jsx("option",{children:"Female"})]})]}),e.jsxs("div",{className:"row",children:[e.jsx("label",{children:"Age"}),e.jsx("input",{type:"number",ref:r})]}),e.jsx("p",{className:"error",children:u.ageErr}),e.jsxs("div",{className:"row",children:[e.jsx("label",{children:"Marital Status"}),e.jsxs("select",{ref:d,children:[e.jsx("option",{children:"single"}),e.jsx("option",{children:"married"}),e.jsx("option",{children:"widowed"}),e.jsx("option",{children:"divorced"}),e.jsx("option",{children:"separated"})]})]}),e.jsxs("div",{className:"row",children:[e.jsx("label",{children:"Designation"}),e.jsxs("select",{ref:m,children:[e.jsx("option",{children:"Project Manager"}),e.jsx("option",{children:"Analyst"}),e.jsx("option",{children:"Full-stack developer"}),e.jsx("option",{children:"Back-end developer"}),e.jsx("option",{children:"Front-end developer"}),e.jsx("option",{children:"UX designer/Graphic designer"}),e.jsx("option",{children:"The (quality) tester"})]})]}),e.jsxs("div",{className:"row",children:[e.jsx("label",{children:"Phone number"}),e.jsx("input",{type:"tel",ref:s})]}),e.jsx("p",{className:"error",children:u.phoneNumberErr}),e.jsxs("div",{className:"row",children:[e.jsx("label",{children:"City"}),e.jsxs("select",{ref:c,children:[e.jsx("option",{children:"Amman"}),e.jsx("option",{children:"Zarqa"}),e.jsx("option",{children:"Irbid"}),e.jsx("option",{children:"Aqaba"}),e.jsx("option",{children:"Mafraq"}),e.jsx("option",{children:"Madaba"}),e.jsx("option",{children:"Salt"}),e.jsx("option",{children:"Ajloun"}),e.jsx("option",{children:"Karak"}),e.jsx("option",{children:"Ma'an"}),e.jsx("option",{children:"Jerash"}),e.jsx("option",{children:"Tafilah"})]})]}),e.jsxs("div",{className:"isManager",children:["Manager ",e.jsx("input",{type:"checkbox",ref:b})]}),e.jsxs("div",{className:"row",children:[e.jsx("label",{children:"Hire date"}),e.jsx(T,{selected:y,onChange:l=>g(l),showYearDropdown:!0,scrollableMonthYearDropdown:!0,yearDropdownItemNumber:60,maxDate:y})]}),e.jsxs("div",{className:"row",children:[e.jsx("label",{children:"Birth Date"}),e.jsx(T,{selected:x,onChange:l=>h(l),showYearDropdown:!0,scrollableMonthYearDropdown:!0,yearDropdownItemNumber:60,maxDate:x})]}),e.jsxs("div",{className:"row",children:[e.jsx("button",{type:"button",onClick:v,className:"btn",children:"Add"}),e.jsx("button",{type:"button",className:"btn",onClick:()=>{n(!1),N({type:"DARKEN",payload:!1})},children:"Cancel"})]})]})})}function fe({setAddSalary:n,state:t,updateState:i}){const[o,r]=a.useState([]),s=a.useRef(),c=a.useRef(),p=a.useRef(),d=a.useRef(),m=a.useRef(),b=a.useRef(),u=a.useRef(),j=a.useRef(),x=a.useRef(),h=a.useRef(),[y,g]=a.useState({}),{dispatch:N}=a.useContext(D);a.useEffect(()=>{(async()=>{const S=await(await fetch("https://shoush-api.vercel.app/get-employees")).json();r(S)})()},[]);const f=async()=>{let v={};if((Number(c.current.value)>12||Number(c.current.value)<1)&&(v.monthErr="please enter a valid month"),p.current.value===""&&(v.yearErr="please enter a valid year"),d.current.value===""&&(v.basicSalaryErr="please enter a valid salary"),g(v),JSON.stringify(v)==="{}"){N({type:"DARKEN",payload:!1});const l={name:s.current.value,month:c.current.value,year:p.current.value,basicSalary:Number(d.current.value),accomodation:Number(m.current.value),transportation:Number(b.current.value),bonus:Number(u.current.value),incomeTax:Number(j.current.value),medicalInsurance:Number(x.current.value),loan:Number(h.current.value)};await fetch("https://shoush-api.vercel.app/add-salary",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(l)}).then(()=>{i(!t),n(!1)})}};return e.jsx("div",{className:"window",children:e.jsxs("form",{className:"form",children:[e.jsx("div",{className:"cancelForm",onClick:()=>{n(!1),N({type:"DARKEN",payload:!1})},children:"X"}),e.jsxs("div",{className:"row",children:[e.jsx("label",{children:" Name"}),e.jsx("select",{ref:s,children:o.map(v=>e.jsx("option",{children:Object.values(v)[2]},v._id))})]}),e.jsxs("div",{className:"row",children:[e.jsx("label",{children:" Month"}),e.jsx("input",{type:"text",ref:c})]}),e.jsx("p",{className:"error",children:y.monthErr}),e.jsxs("div",{className:"row",children:[e.jsx("label",{children:" Year"}),e.jsx("input",{type:"text",ref:p})]}),e.jsx("p",{className:"error",children:y.yearErr}),e.jsxs("div",{className:"row",children:[e.jsx("label",{children:"Basic salary"}),e.jsx("input",{type:"number",ref:d})]}),e.jsx("p",{className:"error",children:y.basicSalaryErr}),e.jsxs("div",{className:"row",children:[e.jsx("label",{children:"Accomodation"}),e.jsx("input",{type:"number",ref:m})]}),e.jsxs("div",{className:"row",children:[e.jsx("label",{children:"Transportation"}),e.jsx("input",{type:"number",ref:b})]}),e.jsxs("div",{className:"row",children:[e.jsx("label",{children:"Bonus"}),e.jsx("input",{type:"number",ref:u})]}),e.jsxs("div",{className:"row",children:[e.jsx("label",{children:"Income tax"}),e.jsx("input",{type:"number",ref:j})]}),e.jsxs("div",{className:"row",children:[e.jsx("label",{children:"Medical insurance"}),e.jsx("input",{type:"number",ref:x})]}),e.jsxs("div",{className:"row",children:[e.jsx("label",{children:"Loan"}),e.jsx("input",{type:"number",ref:h})]}),e.jsxs("div",{className:"row",children:[e.jsx("button",{type:"button",className:"btn",onClick:f,children:"Request"}),e.jsx("button",{type:"button",className:"btn",onClick:()=>{n(!1),N({type:"DARKEN",payload:!1})},children:"Cancel"})]})]})})}function L({table:n}){const[t,i]=a.useState([{}]),[o,r]=a.useState(""),[s,c]=a.useState(""),[p,d]=a.useState(!1),[m,b]=a.useState(!1),[u,j]=a.useState(!1),[x,h]=a.useState(""),{dispatch:y,employees:g}=a.useContext(D);a.useEffect(()=>{(async()=>{if(n==="Employee")i(g);else if(n==="Salary"){const w=await(await fetch("https://shoush-api.vercel.app/get-salaries")).json();i(w)}else if(n==="Vacation"){const w=await(await fetch("https://shoush-api.vercel.app/get-vacations")).json();i(w)}})()},[u,n,g]);const N=t==null?void 0:t.filter(l=>Object.values(l).join(" ").includes(o)),f=l=>{r(l.target.value.toLowerCase())},v=(l,S)=>{l.target.value==="approve"?fetch(`https://shoush-api.vercel.app/approve-vacation/${S}`,{method:"POST"}).then(()=>{j(!u)}):fetch(`https://shoush-api.vercel.app/reject-vacation/${S}`,{method:"POST"}).then(()=>{j(!u)})};return e.jsxs("div",{className:"container",children:[(t==null?void 0:t.length)===0?e.jsx("h1",{style:{textAlign:"center",fontSize:"3rem"},children:`Oops... ${n} table is Empty!`}):e.jsx("div",{className:"tableSearch",children:e.jsx("input",{type:"search",placeholder:"Search employees..",className:"searchInput",onChange:f,autoFocus:!0})}),e.jsx("div",{className:"tableContainer",style:{display:(t==null?void 0:t.length)===0?"none":"block"},children:e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[(N==null?void 0:N.length)>0&&Object.keys(N[0]).map(l=>e.jsx("th",{style:{display:l==="_id"?"none":"table-cell"},children:l},l)),e.jsx("th",{colSpan:"2",style:{backgroundColor:"#fff"}})]})}),e.jsx("tbody",{children:(N==null?void 0:N.length)>0&&(N==null?void 0:N.map((l,S)=>e.jsxs("tr",{children:[Object.values(l).map((w,R)=>e.jsx("td",{style:{display:R===0?"none":"table-cell"},children:String(w)},R)),n==="Vacation"?e.jsx("td",{children:e.jsx("button",{disabled:l.Status==="approved",className:"btn",value:"approve",style:{backgroundColor:l.Status==="approved"?"lightgrey":"#136629"},onClick:w=>v(w,l._id),children:"APPROVE"})}):e.jsx("td",{children:e.jsx("button",{className:"btn",onClick:()=>{c(l),y({type:"DARKEN",payload:!0})},children:"EDIT"})}),n==="Vacation"?e.jsx("td",{children:e.jsx("button",{className:"deleteBtn",disabled:l.Status==="rejected",value:"reject",style:{backgroundColor:l.Status==="rejected"?"lightgrey":"red"},onClick:w=>v(w,l._id),children:"REJECT"})}):e.jsx("td",{children:e.jsx("button",{className:"deleteBtn",onClick:()=>{b(!0),h(l._id),y({type:"DARKEN",payload:!0})},children:"DELETE"})})]},S)))})]})}),s?e.jsx(me,{content:s,table:n,setEdit:c,state:u,updateState:j}):null,p&&n==="Employee"?e.jsx(je,{setAddEmployee:d}):null,p&&n==="Salary"?e.jsx(fe,{setAddSalary:d,state:u,updateState:j}):null,m?e.jsx(xe,{id:x,data:n,setDelete:b,state:u,updateState:j}):null,e.jsx("div",{className:"addBtnContainer",children:!p&&n!=="Vacation"?e.jsxs("button",{className:"btn",onClick:()=>{d(!p),y({type:"DARKEN",payload:!0})},children:["Add ",n]}):null})]})}function Ne(){const{component:n}=X();if(n==="employees")return e.jsx("div",{className:"componentContainer",children:e.jsx(L,{table:"Employee"})});if(n==="projects")return e.jsx("div",{className:"componentContainer",children:e.jsx(oe,{})});if(n==="request-vacation")return e.jsx("div",{className:"componentContainer",children:e.jsx(ce,{})});if(n==="vacations")return e.jsx("div",{className:"componentContainer",children:e.jsx(L,{table:"Vacation"})});if(n==="salaries")return e.jsx("div",{className:"componentContainer",children:e.jsx(L,{table:"Salary"})});if(n==="reports")return e.jsx("div",{className:"componentContainer",children:e.jsx(de,{})});if(n==="careers")return e.jsx("div",{className:"componentContainer",children:e.jsx(he,{})});if(n==="contact")return e.jsx("div",{className:"componentContainer",children:e.jsx(pe,{})})}function be(){return e.jsx("div",{className:"not-found",children:"404 not found"})}const ve=_([{element:e.jsx(ae,{}),children:[{path:"/",element:e.jsx(re,{})},{path:"/signup",element:e.jsx(le,{})},{path:"/login",element:e.jsx(ie,{})},{path:"/:component",element:e.jsx(Ne,{})},{path:"*",element:e.jsx(be,{})}]}],{basename:"/shoush-client/"});J.createRoot(document.getElementById("root")).render(e.jsx(M.StrictMode,{children:e.jsx(ne,{children:e.jsx($,{router:ve})})}));
