"use strict";(self.webpackChunkdeloorpodiatry=self.webpackChunkdeloorpodiatry||[]).push([[137],{7504:function(e,t,a){a.r(t),a.d(t,{default:function(){return o}});var n=a(7294);const r={_origin:"https://api.emailjs.com"},l=(e,t,a)=>{if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!a)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class s{constructor(e){this.status=e.status,this.text=e.responseText}}const i=(e,t,a={})=>new Promise(((n,l)=>{const i=new XMLHttpRequest;i.addEventListener("load",(({target:e})=>{const t=new s(e);200===t.status||"OK"===t.text?n(t):l(t)})),i.addEventListener("error",(({target:e})=>{l(new s(e))})),i.open("POST",r._origin+e,!0),Object.keys(a).forEach((e=>{i.setRequestHeader(e,a[e])})),i.send(t)}));var c=(e,t,a,n)=>{const s=n||r._userID,c=(e=>{let t;if(t="string"==typeof e?document.querySelector(e):e,!t||"FORM"!==t.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t})(a);l(s,e,t);const m=new FormData(c);return m.append("lib_version","3.2.0"),m.append("service_id",e),m.append("template_id",t),m.append("user_id",s),i("/api/v1.0/email/send-form",m)},m=a(2737);function o(){return n.createElement(m.Z,{fullMenu:!0},n.createElement("article",{id:"main"},n.createElement("header",null,n.createElement("h2",null,"Online Booking"),n.createElement("p",null,"Message")),n.createElement("section",{className:"wrapper style5"},n.createElement("form",{className:"contact-form",onSubmit:function(e){e.preventDefault(),c("service_0chynl7","template_16jwiip",e.target,"EGNQWEE6BAcALUqlj").then((e=>{"undefined"!=typeof window&&window.location.reload()}),(e=>{console.log(e.text)}))}},n.createElement("label",{className:"form-child"},"Name"),n.createElement("input",{className:"form-child",type:"text",name:"user_name"}),n.createElement("label",{className:"form-child"},"Email"),n.createElement("input",{className:"form-child",type:"email",name:"user_email"}),n.createElement("label",{className:"form-child"},"Phone Number"),n.createElement("input",{className:"form-child",type:"text",name:"contact"}),n.createElement("label",{className:"form-child"},"Isurance"),n.createElement("input",{className:"form-child",type:"text",name:"insurance"}),n.createElement("label",{className:"form-child"},"Isurance Plan"),n.createElement("input",{className:"form-child",type:"text",name:"plan"}),n.createElement("label",{className:"form-child"},"DOB"),n.createElement("input",{className:"form-child",type:"date",name:"date"}),n.createElement("input",{className:"form-child send",type:"submit",value:"Send"})))))}}}]);
//# sourceMappingURL=component---src-pages-providers-js-ea01d364cecf3fb60a34.js.map