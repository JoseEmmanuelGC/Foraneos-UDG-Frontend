class API{constructor(){this.host="https://api.foraneos-udg.ml/api/"}static async getAll(e,t){let a,o;try{const n=await fetch(`https://api.foraneos-udg.ml/api/${e}`,{method:"GET",headers:{token:t}});console.log(n),o=await n.status;const s=await n.json();console.log(s),a=await s}catch(e){return e}return{status:o,response:a}}async get(e,t){let a,o;try{const n=await fetch(`${this.host}/${e}/${t}`,{method:"GET"});o=await n.status;const s=await n.json();a=await s}catch(e){return e}return{status:o,response:a}}async insert(e,t,a){const o=await fetch(`${this.host}/${e}`,{method:"POST",body:new URLSearchParams(t),headers:{token:a}}),n=await o.status,s=await o.json();return{status:n,response:await s}}async update(e,t,a,o){const n=await fetch(`${this.host}/${e}/${a}`,{method:"PUT",body:new URLSearchParams(t),headers:{token:o}}),s=await n.status,r=await n.json();return{status:s,response:await r}}async delete(e,t,a){await fetch(`${this.host}/${e}/${t}`,{method:"DELETE",headers:{token:a}})}async login(e,t){const a=await fetch(`${this.host}/auth/login`,{method:"POST",body:new URLSearchParams({email:e,password:t})}),o=await a.status,n=await a.json();return{status:o,response:await n}}async logout(e){const t=await fetch(`${this.host}/auth/logout`,{method:"GET",headers:{token:e}}),a=await t.status,o=await t.json();return{status:a,response:await o}}async activeSession(e){const t=await fetch(`${this.host}/auth/session`,{method:"GET",headers:{token:e}}),a=await t.status,o=await t.json();return{status:a,response:await o}}}export default API;const fetch=require("node-fetch"),{URLSearchParams:URLSearchParams}=require("url");class API{constructor(){this.host="https://api.foraneos-udg.ml/api/"}async getAll(e,t){let a,o;try{const n=await fetch(`${this.host}/${e}`,{method:"GET",headers:{token:t}});o=await n.status;const s=await n.json();a=await s}catch(e){return e}return{status:o,response:a}}async get(e,t){let a,o;try{const n=await fetch(`${this.host}/${e}/${t}`,{method:"GET"});o=await n.status;const s=await n.json();a=await s}catch(e){return e}return{status:o,response:a}}async insert(e,t,a){const o=await fetch(`${this.host}/${e}`,{method:"POST",body:new URLSearchParams(t),headers:{token:a}}),n=await o.status,s=await o.json();return{status:n,response:await s}}async update(e,t,a,o){const n=await fetch(`${this.host}/${e}/${a}`,{method:"PUT",body:new URLSearchParams(t),headers:{token:o}}),s=await n.status,r=await n.json();return{status:s,response:await r}}async delete(e,t,a){await fetch(`${this.host}/${e}/${t}`,{method:"DELETE",headers:{token:a}})}async login(e,t){const a=await fetch(`${this.host}/auth/login`,{method:"POST",body:new URLSearchParams({email:e,password:t})}),o=await a.status,n=await a.json();return{status:o,response:await n}}async logout(e){const t=await fetch(`${this.host}/auth/logout`,{method:"GET",headers:{token:e}}),a=await t.status,o=await t.json();return{status:a,response:await o}}async activeSession(e){const t=await fetch(`${this.host}/auth/session`,{method:"GET",headers:{token:e}}),a=await t.status,o=await t.json();return{status:a,response:await o}}}module.exports=new API;class Cookie{static getCookie(){return`; ${document.cookie}`.split("; sesion=")[1].split(";")}}export default Cookie;class Cookie{static getCookie(e){var t=("; "+document.cookie).split("; "+e+"=");if(2==t.length)return t.pop().split(";").shift()}static logOut(){let e="Thu, 01 Jan 1970 00:00:00 UTC",t=Cookie.getCookie("userToken");console.log(t),document.cookie=`userToken=;path=/;expires=${e};`,document.cookie=`userName=;path=/;expires=${e};`,document.cookie=`userRole=;path=/;expires=${e};`,fetch("https://api.foraneos-udg.ml/auth/logout",{method:"GET",headers:{"Content-Type":"application/json",hash:`${t}`}}).then(e=>{200==e.status&&(console.log("200"),window.location.href="./index.html")}),console.log("s")}static haveSession(){null!=Cookie.getCookie("userToken")&&window.location.replace("./index.html")}static noSession(){null==Cookie.getCookie("userToken")&&window.location.replace("./index.html")}static exito(e,t,a){let o=new Date;o.setTime(o.getTime()+3e5),document.cookie=`userToken=${e};path=/;expires=${o.toGMTString()};`,document.cookie=`userName=${t};path=/;expires=${o.toGMTString()};`,document.cookie=`userRole=${a};path=/;expires=${o.toGMTString()};`,console.log("exito"),window.location.replace("./home.html")}}export default Cookie;function getParametro(e){const t=window.location.search.substring(1).split("&");for(let a=0;a<t.length;a+=1){const o=t[a].split("=");if(o[0]==e)return o[1]}return null}import Cookie from"./cookie.js";import Validator from"./Svalidator.js";function iniciar(){Cookie.noSession(),function(){const e=document.querySelector("#datos_perfil"),t=document.querySelector("#username"),a=document.querySelector("#userdate");let o=Cookie.getCookie("userToken");fetch("https://api.foraneos-udg.ml/api/users/1",{method:"GET",headers:{"Content-Type":"application/json",hash:`Bearer ${o}`}}).then(e=>e.json()).then(o=>{200==o.status&&(console.log(o),t.innerHTML=`<h4>Username: ${o.username}</h4>`,e.innerHTML=`<p>Nombre Completo: ${o.name} ${o.firstSurname} ${o.secondSurname}</p>\n      <p>Correo Electronico: ${o.mainEmail}</p>`,a.innerHTML=`\n      <input id="username" type="text" name="username" value=${o.username} class="input3" readonly>\n      <input id="name" type="text" name="name" value=${o.name}  class="input3" readonly>\n      <input id="lastname" type="text" name="lastname" value="${o.firstSurname} ${o.secondSurname}" class="input3" readonly>\n      <input id="infemail" type="email" name="email" value=${o.mainEmail} class="input3" readonly>\n      <input id="regpassword" type="password" name="password" value=${o.password} class="input3" readonly>\n      <input id="birthdate" type="date" name="birthdate" value=${o.birthdate} class="input3" readonly>\n      `)})}()}window.onload=iniciar;const contenido=document.querySelector("#datos_perfil"),username=document.querySelector("#username"),datos=document.querySelector("#userdate"),miInit={method:"GET",headers:{"Content-Type":"application/json",hash:"$2b$17$f9/IC.1PDPvGNv/EI2YvxOKuBORKF5GlauVpO5fDkkh5fsRxNHO/e"},cache:"default"};fetch("https://api.foraneos-udg.ml/api/users/1",miInit).then(e=>e.json()).then(e=>{console.log(e),username.innerHTML=`<h4>Username: ${e.username}</h4>`,contenido.innerHTML=`<p>Nombre Completo: ${e.name} ${e.firstSurname} ${e.secondSurname}</p>\n    <p>Correo Electronico: ${e.mainEmail}</p>`,datos.innerHTML=`\n    <input id="username" type="text" name="username" value=${e.username} class="input3" readonly>\n    <input id="name" type="text" name="name" value=${e.name}  class="input3" readonly>\n    <input id="lastname" type="text" name="lastname" value="${e.firstSurname} ${e.secondSurname}" class="input3" readonly>\n    <input id="infemail" type="email" name="email" value=${e.mainEmail} class="input3" readonly>\n    <input id="regpassword" type="password" name="password" value=${e.password} class="input3" readonly>\n    <input id="birthdate" type="date" name="birthdate" value=${e.birthdate} class="input3" readonly>\n    `}).catch(e=>{console.error(e)});class Validator{static functionsarray(){return{isMaxLength30:{tipo:["name"],metodo:function(e){return e.length>30},msg:"Es mayor a 30 caracteres"},isMinLength6:{tipo:["newPassword"],metodo:function(e){return e.length<6},msg:"Es menor a 6 caracteres"},isMail:{tipo:["email"],metodo:function(e){return!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)},msg:"No es un email valido"},isWord:{tipo:["name"],metodo:function(e){return!/[a-zA-ZñÑ]{3,}/.test(e)},msg:"No es una palabra valida"},isVacio:{tipo:["email","password","weight","height","name","mobile"],metodo:function(e){return 0==e.length},msg:"Ingrese los datos"},isWeight:{tipo:["weight"],metodo:function(e){return e.length>3||Number(e)<0||Number(e)>250},msg:"Peso entre 0 y 250kg"},isHeight:{tipo:["height"],metodo:function(e){return e.length>3||Number(e)<0||Number(e)>300},msg:"Altura entre 0 y 300 CM"},isSpace:{tipo:["password","name","mobile"],metodo:function(e){return" "==e[0]},msg:"No puede iniciar con espacio"},isMobile:{tipo:["mobile"],metodo:function(e){return 10!=e.length},msg:"Ingrese un numero de 10 digitos"}}}static validateSomething(e,t){let a=[],o=Validator.functionsarray();for(var n in o){var s=o[n];-1!=s.tipo.indexOf(e)&&s.metodo(t)&&a.push(s.msg)}return a}static deleteErrors(){for(var e=document.getElementsByClassName("error-msg");e.length>0;)e[0].parentNode.removeChild(e[0]);document.querySelectorAll(".error").forEach(function(e){e.classList.remove("error")})}static validate(e){let t,a=e.target.parentNode;Validator.deleteErrors();for(let n of a)if("submit"!=n.type&&(t=Validator.validateSomething(n.name,n.value)).length>0){e.preventDefault(),n.classList.add("error");var o=document.createElement("div");o.classList.add("error-msg"),t.forEach(function(e){var t=document.createElement("h1"),a=document.createTextNode(e);t.appendChild(a),o.appendChild(t)}),n.parentNode.insertBefore(o,n.nextSibling)}}static listen2(){const e=document.getElementsByClassName("form");for(let t of e)for(let e of t.children)"submit"==e.type&&e.addEventListener("click",Validator.validate,!1)}static listen(e){for(let t of e.children)"submit"==t.type&&t.addEventListener("submit",Validator.validate,!1)}static haiteva(e){console.log("x: ",e)}}export default Validator;function validatorRegister(){var e=document.getElementById("name").value,t=document.getElementById("lastname").value,a=document.getElementById("regemail").value,o=document.getElementById("regpassword").value,n=document.getElementById("confirpass").value,s=!1;if(console.log(e),console.log(o),s)s=!0;else{if(null==e||0==e.length||0==/^[a-zA-Z_áéíóúñÁÉÍÓÚÑ\s]*$/.test(e))return document.getElementById("name").style.borderColor="red",!1;if(document.getElementById("name").style.borderColor="black",null==t||0==t.length||0==/^[a-zA-Z_áéíóúñÁÉÍÓÚÑ\s]*$/.test(t))return document.getElementById("lastname").style.borderColor="red",!1;if(document.getElementById("lastname").style.borderColor="black",null==a||0==a.length||0==/[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/.test(a))return document.getElementById("regemail").style.borderColor="red",!1;if(document.getElementById("regemail").style.borderColor="black",null==o||0==o.length||0==/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,20}$/.test(o))return document.getElementById("regpassword").style.borderColor="red",!1;if(document.getElementById("regpassword").style.borderColor="black",null==n||0==n.length||0==/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,20}$/.test(n)||n!==o)return document.getElementById("confirpass").style.borderColor="red",!1;document.getElementById("confirpass").style.borderColor="black"}if(s)return document.getElementById("name").style.borderColor="black",document.getElementById("lastname").style.borderColor="black",document.getElementById("regemail").style.borderColor="black",document.getElementById("regpassword").style.borderColor="black",document.getElementById("confirpass").style.borderColor="black",!0}