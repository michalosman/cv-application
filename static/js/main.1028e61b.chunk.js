(this["webpackJsonpcv-application"]=this["webpackJsonpcv-application"]||[]).push([[0],{34:function(e,n,t){"use strict";t.r(n);var r,o,c,i,a,d,l,u,s,j,m,b,p,h,f,x,O,g,v,y,C,k,I,A,D,w,N,E,P,T,F,H,S,R=t(1),z=t.n(R),L=t(10),U=t.n(L),M=t(2),B=t(3),J=t(0),V=M.d.div(r||(r=Object(B.a)(["\n  background-color: ",";\n"])),(function(e){return e.theme.colors.dark})),W=M.d.div(o||(o=Object(B.a)(["\n  font-family: 'Zen Tokyo Zoo', cursive;\n  display: flex;\n  align-items: center;\n  max-width: 1800px;\n  padding: 3rem 8rem;\n  margin: 0 auto;\n  color: ",";\n  font-size: 2.2rem;\n\n  @media (max-width: 1600px) {\n    justify-content: center;\n  }\n"])),(function(e){return e.theme.colors.light})),_=function(){return Object(J.jsx)(V,{children:Object(J.jsx)(W,{children:Object(J.jsx)("h1",{children:"CV CREATOR"})})})},q=t(6),G=t(5),Z=t(4),Q=t(23),X=t(35),Y=t(18),K=M.d.input(c||(c=Object(B.a)(["\n  padding: 0.5rem;\n  border-radius: 5px;\n  border: 1px solid transparent;\n\n  &:focus {\n    border: 1px solid ",";\n  }\n"])),(function(e){return e.theme.colors.lightActive})),$=function(e){var n=e.type,t=e.name,r=e.placeholder,o=e.onChange,c=e.value;return Object(J.jsx)(K,{onChange:o,type:n,name:t,placeholder:r,value:c})},ee=M.d.section(i||(i=Object(B.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  padding: ",";\n  margin-bottom: 2rem;\n"])),(function(e){return e.padding})),ne=M.d.h3(a||(a=Object(B.a)(["\n  padding: ",";\n\n  ","\n"])),(function(e){return e.padding}),(function(e){return e.contrast&&Object(M.c)(d||(d=Object(B.a)(["\n      border-bottom: 1px solid ",";\n      color: ",";\n    "])),(function(e){return e.theme.colors.lightBorder}),(function(e){return e.theme.colors.blue}))})),te=M.d.div(l||(l=Object(B.a)(["\n  display: flex;\n  flex-direction: ",";\n  gap: 1rem;\n"])),(function(e){return"column"===e.direction&&"column"})),re=function(e){var n=e.padding,t=e.title,r=e.children,o=e.titlePadding,c=e.contrastTitle,i=e.direction;return Object(J.jsxs)(ee,{padding:n,children:[Object(J.jsx)(ne,{padding:o,contrast:c,children:t}),Object(J.jsx)(te,{direction:i,children:r})]})},oe=M.d.textarea(u||(u=Object(B.a)(["\n  height: 80px;\n  padding: 0.5rem;\n  padding-right: 2rem;\n  border-radius: 5px;\n  border: 1px solid transparent;\n  resize: none;\n\n  &:focus {\n    border: 1px solid ",";\n  }\n"])),(function(e){return e.theme.colors.lightActive})),ce=function(e){var n=e.onChange,t=e.name,r=e.placeholder,o=e.value;return Object(J.jsx)(oe,{onChange:n,name:t,placeholder:r,value:o})},ie=M.d.input(s||(s=Object(B.a)(["\n  display: none;\n"]))),ae=M.d.label(j||(j=Object(B.a)(["\n  padding: 0.5rem;\n  border-radius: 5px;\n  border: 1px solid transparent;\n  background-color: #fff;\n\n  &:active {\n    border: 1px solid ",";\n  }\n"])),(function(e){return e.theme.colors.lightActive})),de=function(e){var n=e.label,t=e.name,r=e.onChange;return Object(J.jsxs)(ae,{children:[Object(J.jsx)(ie,{type:"file",onChange:r,name:t}),n]})},le=function(e){var n=e.personalInfo,t=e.onChange;return Object(J.jsxs)(re,{title:"Personal Information",titlePadding:"0.5rem",direction:"column",children:[Object(J.jsx)($,{onChange:function(e){return t(e)},type:"text",name:"firstName",placeholder:"First name",value:n.firstName}),Object(J.jsx)($,{onChange:function(e){return t(e)},type:"text",name:"lastName",placeholder:"Last name",value:n.lastName}),Object(J.jsx)($,{onChange:function(e){return t(e)},type:"text",name:"title",placeholder:"Title",value:n.title}),Object(J.jsx)(de,{onChange:function(e){return t(e)},name:"photo",label:"Photo",value:n.photo}),Object(J.jsx)($,{onChange:function(e){return t(e)},type:"text",name:"address",placeholder:"Address",value:n.address}),Object(J.jsx)($,{onChange:function(e){return t(e)},type:"text",name:"phoneNumber",placeholder:"Phone number",value:n.phoneNumber}),Object(J.jsx)($,{onChange:function(e){return t(e)},type:"text",name:"email",placeholder:"Email",value:n.email}),Object(J.jsx)(ce,{onChange:function(e){return t(e)},name:"description",placeholder:"Description",value:n.description})]})},ue=M.d.button(m||(m=Object(B.a)(["\n  padding: 1rem;\n  border-radius: 5px;\n  font-weight: bold;\n\n  background-color: ",";\n  color: ",";\n\n  &:hover {\n    background-color: ",";\n  }\n\n  &:active {\n    background-color: ",";\n  }\n\n  ","\n\n  ","\n  ","\n"])),(function(e){return e.theme.colors.dark}),(function(e){return e.theme.colors.light}),(function(e){return e.theme.colors.darkHover}),(function(e){return e.theme.colors.darkActive}),(function(e){return e.primary&&Object(M.c)(b||(b=Object(B.a)(["\n      background-color: ",";\n      color: ",";\n\n      &:hover {\n        background-color: ",";\n      }\n\n      &:active {\n        background-color: ",";\n      }\n    "])),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.colors.light}),(function(e){return e.theme.colors.primaryHover}),(function(e){return e.theme.colors.primaryActive}))}),(function(e){return e.secondary&&Object(M.c)(p||(p=Object(B.a)(["\n      background-color: ",";\n      color: ",";\n\n      &:hover {\n        background-color: ",";\n      }\n\n      &:active {\n        background-color: ",";\n      }\n    "])),(function(e){return e.theme.colors.secondary}),(function(e){return e.theme.colors.light}),(function(e){return e.theme.colors.secondaryHover}),(function(e){return e.theme.colors.secondaryActive}))}),(function(e){return e.red&&Object(M.c)(h||(h=Object(B.a)(["\n      background-color: ",";\n      color: ",";\n\n      &:hover {\n        background-color: ",";\n      }\n\n      &:active {\n        background-color: ",";\n      }\n    "])),(function(e){return e.theme.colors.red}),(function(e){return e.theme.colors.light}),(function(e){return e.theme.colors.redHover}),(function(e){return e.theme.colors.redActive}))})),se=function(e){var n=e.text,t=e.onClick,r=e.primary,o=e.secondary,c=e.red;return Object(J.jsx)(ue,{onClick:t,primary:r,secondary:o,red:c,children:n})},je=function(e){var n=e.id,t=e.educationItem,r=e.onChange,o=e.onDelete;return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)($,{onChange:function(e){return r(e,n)},type:"text",name:"universityName",placeholder:"University name",value:t.universityName}),Object(J.jsx)($,{onChange:function(e){return r(e,n)},type:"text",name:"city",placeholder:"City",value:t.city}),Object(J.jsx)($,{onChange:function(e){return r(e,n)},type:"text",name:"degree",placeholder:"Degree",value:t.degree}),Object(J.jsx)($,{onChange:function(e){return r(e,n)},type:"text",name:"subject",placeholder:"Subject",value:t.subject}),Object(J.jsx)($,{onChange:function(e){return r(e,n)},type:"text",name:"from",placeholder:"From",value:t.from}),Object(J.jsx)($,{onChange:function(e){return r(e,n)},type:"text",name:"to",placeholder:"To",value:t.to}),Object(J.jsx)(se,{text:"Delete",onClick:function(){return o(n)}})]})},me=function(e){var n=e.education,t=e.onChange,r=e.onAdd,o=e.onDelete,c=n.map((function(e){return Object(J.jsx)(je,{id:e.id,educationItem:e,onChange:t,onDelete:o},e.id)}));return Object(J.jsxs)(re,{title:"Education",titlePadding:"0.5rem",direction:"column",children:[c,Object(J.jsx)(se,{text:"Add",onClick:r})]})},be=function(e){var n=e.id,t=e.experienceItem,r=e.onChange,o=e.onDelete;return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)($,{onChange:function(e){return r(e,n)},type:"text",name:"position",placeholder:"Position",value:t.position}),Object(J.jsx)($,{onChange:function(e){return r(e,n)},type:"text",name:"company",placeholder:"Company",value:t.company}),Object(J.jsx)($,{onChange:function(e){return r(e,n)},type:"text",name:"city",placeholder:"City",value:t.city}),Object(J.jsx)($,{onChange:function(e){return r(e,n)},type:"text",name:"from",placeholder:"From",value:t.from}),Object(J.jsx)($,{onChange:function(e){return r(e,n)},type:"text",name:"to",placeholder:"To",value:t.to}),Object(J.jsx)(se,{text:"Delete",onClick:function(){return o(n)}})]})},pe=function(e){var n=e.experience,t=e.onChange,r=e.onAdd,o=e.onDelete,c=n.map((function(e){return Object(J.jsx)(be,{id:e.id,experienceItem:e,onChange:t,onDelete:o},e.id)}));return Object(J.jsxs)(re,{title:"Experience",titlePadding:"0.5rem",direction:"column",children:[c,Object(J.jsx)(se,{text:"Add",onClick:r})]})},he=M.d.div(f||(f=Object(B.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  width: 210mm;\n  padding: 2rem;\n  border-radius: 5px;\n  background-color: ",";\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n"])),(function(e){return e.theme.colors.light})),fe=function(e){var n=e.cv,t=e.onChangePersonal,r=e.onChangeExperience,o=e.onAddExperience,c=e.onDeleteExperience,i=e.onChangeEducation,a=e.onAddEducation,d=e.onDeleteEducation,l=e.onPrint,u=e.onLoadExample,s=e.onReset;return Object(J.jsxs)(he,{children:[Object(J.jsx)(le,{personalInfo:n.personalInfo,onChange:t}),Object(J.jsx)(pe,{experience:n.experience,onChange:r,onAdd:o,onDelete:c}),Object(J.jsx)(me,{education:n.education,onChange:i,onAdd:a,onDelete:d}),Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)(se,{text:"Generate PDF",onClick:l,primary:!0}),Object(J.jsx)(se,{text:"Load Example",onClick:u,secondary:!0}),Object(J.jsx)(se,{text:"Reset",onClick:s,red:!0})]})]})},xe=t(19),Oe=t(20),ge=t(24),ve=t(21),ye=M.d.header(x||(x=Object(B.a)(["\n  grid-column: span 2;\n  padding: 2rem;\n  background-color: ",";\n  color: ",";\n"])),(function(e){return e.theme.colors.blue}),(function(e){return e.theme.colors.light})),Ce=function(e){var n=e.personalInfo,t=n.firstName,r=n.lastName,o=n.title;return Object(J.jsxs)(ye,{children:[Object(J.jsxs)("h1",{children:[t," ",r]}),Object(J.jsx)("p",{children:o})]})},ke=M.d.section(O||(O=Object(B.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: ",";\n"])),(function(e){return e.padding})),Ie=M.d.h4(g||(g=Object(B.a)(["\n  padding: ",";\n  line-height: 1.6;\n"])),(function(e){return e.padding})),Ae=function(e){var n=e.title,t=e.children,r=e.titlePadding;return Object(J.jsxs)(ke,{padding:r,children:[Object(J.jsx)(Ie,{children:n}),t]})},De=M.d.div(v||(v=Object(B.a)(["\n  display: flex;\n"]))),we=M.d.div(y||(y=Object(B.a)(["\n  width: 25%;\n  font-weight: bold;\n  margin-right: 2rem;\n"]))),Ne=M.d.div(C||(C=Object(B.a)(["\n  width: 70%;\n"]))),Ee=function(e){var n=e.experienceItem;return Object(J.jsxs)(De,{children:[Object(J.jsxs)(we,{children:[n.from," - ",n.to]}),Object(J.jsx)(Ne,{children:Object(J.jsx)(Ae,{title:n.position,children:Object(J.jsxs)("div",{children:[n.company,", ",n.city]})})})]})},Pe=M.d.div(k||(k=Object(B.a)(["\n  display: flex;\n"]))),Te=M.d.div(I||(I=Object(B.a)(["\n  width: 25%;\n  font-weight: bold;\n  margin-right: 2rem;\n"]))),Fe=M.d.div(A||(A=Object(B.a)(["\n  width: 70%;\n"]))),He=function(e){var n=e.educationItem;return Object(J.jsxs)(Pe,{children:[Object(J.jsxs)(Te,{children:[n.from," - ",n.to]}),Object(J.jsx)(Fe,{children:Object(J.jsxs)(Ae,{title:"".concat(n.universityName,", ").concat(n.city),children:[Object(J.jsxs)("p",{children:["Degree: ",n.degree]}),Object(J.jsxs)("p",{children:["Subject: ",n.subject]})]})})]})},Se=M.d.div(D||(D=Object(B.a)(["\n  padding: 2rem;\n  background-color: ",";\n"])),(function(e){return e.theme.colors.light})),Re=M.d.div(w||(w=Object(B.a)(["\n  font-style: italic;\n"]))),ze=function(e){var n=e.personalInfo,t=e.experience,r=e.education,o=t.map((function(e){return Object(J.jsx)(Ee,{experienceItem:e},e.id)})),c=r.map((function(e){return Object(J.jsx)(He,{educationItem:e},e.id)}));return Object(J.jsxs)(Se,{children:[Object(J.jsx)(re,{title:"Description",contrastTitle:!0,children:Object(J.jsx)(Re,{children:n.description})}),Object(J.jsx)(re,{title:"Experience",direction:"column",contrastTitle:!0,children:o}),Object(J.jsx)(re,{title:"Education",direction:"column",contrastTitle:!0,children:c})]})},Le=M.d.div(N||(N=Object(B.a)(["\n  padding: 2rem;\n  background-color: ",";\n"])),(function(e){return e.theme.colors.lightSecondary})),Ue=M.d.img(E||(E=Object(B.a)(["\n  margin-bottom: 2rem;\n"]))),Me=function(e){var n=e.personalInfo;return Object(J.jsxs)(Le,{children:[Object(J.jsx)(Ue,{src:n.photo}),Object(J.jsxs)(re,{title:"Personal Details",contrastTitle:!0,direction:"column",children:[Object(J.jsx)(Ae,{title:"Address",children:n.address}),Object(J.jsx)(Ae,{title:"Phone Number",children:n.phoneNumber}),Object(J.jsx)(Ae,{title:"Email",children:n.email})]})]})},Be=function(e){Object(ge.a)(t,e);var n=Object(ve.a)(t);function t(){return Object(xe.a)(this,t),n.apply(this,arguments)}return Object(Oe.a)(t,[{key:"render",value:function(){var e=this.props.cv;return Object(J.jsxs)(Je,{children:[Object(J.jsx)(Ce,{personalInfo:e.personalInfo}),Object(J.jsx)(ze,{personalInfo:e.personalInfo,experience:e.experience,education:e.education}),Object(J.jsx)(Me,{personalInfo:e.personalInfo})]})}}]),t}(R.Component),Je=M.d.div(P||(P=Object(B.a)(["\n  width: 210mm;\n  height: 297mm;\n  position: sticky;\n  top: 10px;\n  display: grid;\n  grid-template-columns: 150mm 60mm;\n  grid-template-rows: 35mm 262mm;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n"]))),Ve=Be,We={personalInfo:{firstName:"John",lastName:"Doe",title:"Senior Web Developer",photo:t.p+"static/media/example_photo.7a684f97.jpg",address:"Example Street 10",phoneNumber:"123456789",email:"john.doe@gmail.com",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus imperdiet nisl sed vestibulum. Donec gravida, nulla eget blandit fermentum, mauris nisi rutrum libero, ac pharetra erat est sit amet tellus. Quisque fermentum dolor a interdum fermentum. Maecenas vehicula ac ipsum nec gravida. Integer quis porta turpis. Aenean et metus."},experience:[{id:Object(X.a)(),position:"Senior Web Developer",company:"Facebook Inc.",city:"Menlo Park",from:"2015",to:"Present"},{id:Object(X.a)(),position:"Junior Web Developer",company:"Tesla Inc.",city:"Palo Alto",from:"2012",to:"2015"},{id:Object(X.a)(),position:"UI / UX Designer",company:"Google LLC",city:"Mountain View",from:"2010",to:"2012"},{id:Object(X.a)(),position:"Position",company:"Company name",city:"City name",from:"From",to:"To"}],education:[{id:Object(X.a)(),universityName:"University of Technology",city:"Oklahoma",degree:"Master",subject:"Science",from:"2008",to:"2010"},{id:Object(X.a)(),universityName:"University of Design Art",city:"New York",degree:"Bachelor",subject:"Visual Art",from:"2005",to:"2008"},{id:Object(X.a)(),universityName:"University name",city:"City name",degree:"",subject:"",from:"From",to:"To"}]},_e={personalInfo:{firstName:"",lastName:"",title:"",photo:t.p+"static/media/empty_avatar.cedf234c.png",address:"",phoneNumber:"",email:"",description:""},experience:[{id:Object(X.a)(),position:"",company:"",city:"",from:"",to:""}],education:[{id:Object(X.a)(),universityName:"",city:"",degree:"",subject:"",from:"",to:""}]},qe=function(){var e=Object(R.useState)(_e),n=Object(Q.a)(e,2),t=n[0],r=n[1],o=function(e){var n=e.target.name,t=e.target.files[0];if(t){var o=new FileReader;o.onload=function(){r((function(e){return Object(Z.a)(Object(Z.a)({},e),{},{personalInfo:Object(Z.a)(Object(Z.a)({},e.personalInfo),{},Object(G.a)({},n,o.result))})}))},o.readAsDataURL(t)}},c=Object(R.useRef)(),i=Object(Y.useReactToPrint)({content:function(){return c.current}});return Object(J.jsxs)(Ge,{children:[Object(J.jsx)(fe,{cv:t,onChangePersonal:function(e){var n=e.target,t=n.name,c=n.value;"file"!==n.type?r((function(e){return Object(Z.a)(Object(Z.a)({},e),{},{personalInfo:Object(Z.a)(Object(Z.a)({},e.personalInfo),{},Object(G.a)({},t,c))})})):o(e)},onChangeExperience:function(e,n){var t=e.target,o=t.name,c=t.value;r((function(e){var t=e.experience.map((function(e){return e.id===n?Object(Z.a)(Object(Z.a)({},e),{},Object(G.a)({},o,c)):e}));return Object(Z.a)(Object(Z.a)({},e),{},{experience:Object(q.a)(t)})}))},onAddExperience:function(){r((function(e){return Object(Z.a)(Object(Z.a)({},e),{},{experience:[].concat(Object(q.a)(e.experience),[{id:Object(X.a)(),position:"",company:"",city:"",from:"",to:""}])})}))},onDeleteExperience:function(e){r((function(n){var t=n.experience.filter((function(n){return n.id!==e}));return Object(Z.a)(Object(Z.a)({},n),{},{experience:Object(q.a)(t)})}))},onChangeEducation:function(e,n){var t=e.target,o=t.name,c=t.value;r((function(e){var t=e.education.map((function(e){return e.id===n?Object(Z.a)(Object(Z.a)({},e),{},Object(G.a)({},o,c)):e}));return Object(Z.a)(Object(Z.a)({},e),{},{education:Object(q.a)(t)})}))},onAddEducation:function(){r((function(e){return Object(Z.a)(Object(Z.a)({},e),{},{education:[].concat(Object(q.a)(e.education),[{id:Object(X.a)(),universityName:"",city:"",degree:"",subject:"",from:"",to:""}])})}))},onDeleteEducation:function(e){r((function(n){var t=n.education.filter((function(n){return n.id!==e}));return Object(Z.a)(Object(Z.a)({},n),{},{education:Object(q.a)(t)})}))},onPrint:i,onLoadExample:function(){r(We)},onReset:function(){r(_e)}}),Object(J.jsx)(Ve,{cv:t,ref:c})]})},Ge=M.d.main(T||(T=Object(B.a)(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 4rem;\n  max-width: 1800px;\n  padding: 5rem 8rem;\n  margin: 0 auto;\n  margin-bottom: 4rem;\n  @media (max-width: 1600px) {\n    flex-direction: column;\n    align-items: center;\n  }\n"]))),Ze=t(22),Qe=M.d.footer(F||(F=Object(B.a)(["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  padding: 0.5rem;\n  background-color: ",";\n  color: ",";\n"])),(function(e){return e.theme.colors.dark}),(function(e){return e.theme.colors.light})),Xe=M.d.a(H||(H=Object(B.a)(["\n  position: relative;\n  top: 0.2rem;\n  margin-left: 1rem;\n  color: ",";\n  font-size: 2rem;\n\n  &:hover {\n    color: ",";\n  }\n\n  &:active {\n    color: ",";\n  }\n"])),(function(e){return e.theme.colors.light}),(function(e){return e.theme.colors.lightHover}),(function(e){return e.theme.colors.lightActive})),Ye=function(){return Object(J.jsxs)(Qe,{children:[Object(J.jsx)("p",{children:"Copyright \xa9 2021 michalosman"}),Object(J.jsx)(Xe,{href:"https://github.com/michalosman",target:"_blank",children:Object(J.jsx)(Ze.a,{})})]})},Ke=function(){return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)(_,{}),Object(J.jsx)(qe,{}),Object(J.jsx)(Ye,{})]})},$e=Object(M.b)(S||(S=Object(B.a)(['\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n    word-wrap: break-word;\n  }\n\n  html {\n    font-size: 62.5%;\n    line-height: 1.6;\n    /* Footer support */\n    position: relative;\n    min-height: 100%;\n  }\n\n  body {\n    font-family: "Nunito", sans-serif;\n    font-size: 1.6rem;\n    background-color: ',";\n    color: ",";\n  }\n\n  header {\n    font-size: 2.4rem;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    line-height: 1.2;\n  }\n\n  a {\n    text-decoration: none;\n  }\n\n  img {\n    display: block;\n    width: 100%;\n  }\n\n  button,\n  input, \n  textarea {\n    border: none;\n    outline: none;\n    color: inherit;\n    font-family: inherit;\n    font-size: inherit;\n  }\n\n  button {\n    cursor: pointer;\n  }\n"])),(function(e){return e.theme.colors.background}),(function(e){return e.theme.colors.dark})),en={colors:{background:"#ccc",light:"#eee",lightHover:"#ccc",lightActive:"#aaa",lightSecondary:"#ddd",lightBorder:"#ccc",dark:"#333",darkHover:"#222",darkActive:"#111",blue:"#143E72",primary:"#1ba148",primaryHover:"#0a9037",primaryActive:"#098026",secondary:"#c25c0e",secondaryHover:"#b14b0d",secondaryActive:"#a03a0c",red:"#b3211e",redHover:"#a2100d",redActive:"#91000c"}};U.a.render(Object(J.jsx)(z.a.StrictMode,{children:Object(J.jsxs)(M.a,{theme:en,children:[Object(J.jsx)($e,{}),Object(J.jsx)(Ke,{})]})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.1028e61b.chunk.js.map