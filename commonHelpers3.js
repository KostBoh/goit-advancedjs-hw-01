import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{a as d}from"./assets/vendor-21f89269.js";document.addEventListener("DOMContentLoaded",()=>{const n=document.querySelector(".feedback-form"),t=document.querySelector('[name="email"]'),a=document.querySelector('[name="message"]'),o="feedback-form-state",r=d(()=>{const e={email:t.value,message:a.value};localStorage.setItem(o,JSON.stringify(e))},500),s=()=>{const e=localStorage.getItem(o);if(e){const{email:c,message:l}=JSON.parse(e);t.value=c,a.value=l}},m=()=>{console.log("Form Data:",{email:t.value,message:a.value}),localStorage.removeItem(o),n.reset()};t.addEventListener("input",()=>{r()}),a.addEventListener("input",()=>{r()}),n.addEventListener("submit",e=>{e.preventDefault(),m()}),s()});
//# sourceMappingURL=commonHelpers3.js.map
