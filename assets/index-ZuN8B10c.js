(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=o(s);fetch(s.href,a)}})();const T="_main__section_info_1fs3l_1",M="_main__info_span_1fs3l_11",R="_main__info_answer_1fs3l_15",P="_main__info_question_1fs3l_26",Q="_main__info_guesses_1fs3l_37",l={main__section_info:T,main__info_span:M,main__info_answer:R,main__info_question:P,main__info_guesses:Q},k=[{question:"who says meow",answer:"cat"},{question:"An element with the symbol 'O'",answer:"Oxygen"},{question:"A famous scientist known for the theory of relativity",answer:"Einstein"},{question:"The capital of Japan",answer:"Tokyo"},{question:"The largest mammal in the world",answer:"Bluewhale"},{question:"The currency of Germany",answer:"Euro"},{question:"A Shakespeare play about tragedy and betrayal",answer:"Othello"},{question:"A programming language named after a snake",answer:"Python"},{question:"The longest river in the world",answer:"Nile"},{question:"A famous painting by Leonardo da Vinci with a mysterious smile",answer:"MonaLisa"},{question:"A mythical bird that rises from its ashes",answer:"Phoenix"}],u=[{key:"Q",code:"KeyQ",keyCode:81,status:"active"},{key:"W",code:"KeyW",keyCode:87,status:"active"},{key:"E",code:"KeyE",keyCode:69,status:"active"},{key:"R",code:"KeyR",keyCode:82,status:"active"},{key:"T",code:"KeyT",keyCode:84,status:"active"},{key:"Y",code:"KeyY",keyCode:89,status:"active"},{key:"U",code:"KeyU",keyCode:85,status:"active"},{key:"I",code:"KeyI",keyCode:73,status:"active"},{key:"O",code:"KeyO",keyCode:79,status:"active"},{key:"P",code:"KeyP",keyCode:80,status:"active"},{key:"A",code:"KeyA",keyCode:65,status:"active"},{key:"S",code:"KeyS",keyCode:83,status:"active"},{key:"D",code:"KeyD",keyCode:68,status:"active"},{key:"F",code:"KeyF",keyCode:70,status:"active"},{key:"G",code:"KeyG",keyCode:71,status:"active"},{key:"H",code:"KeyH",keyCode:72,status:"active"},{key:"J",code:"KeyJ",keyCode:74,status:"active"},{key:"K",code:"KeyK",keyCode:75,status:"active"},{key:"L",code:"KeyL",keyCode:76,status:"active"},{key:"Z",code:"KeyZ",keyCode:90,status:"active"},{key:"X",code:"KeyX",keyCode:88,status:"active"},{key:"C",code:"KeyC",keyCode:67,status:"active"},{key:"V",code:"KeyV",keyCode:86,status:"active"},{key:"B",code:"KeyB",keyCode:66,status:"active"},{key:"N",code:"KeyN",keyCode:78,status:"active"},{key:"M",code:"KeyM",keyCode:77,status:"active"}];let h,r,b,S;function G(t){h=Math.floor(Math.random()*k.length),r=k[h].answer.toUpperCase(),b=r.split("").map(()=>"_").join(""),S=k[h].question;const e=document.createElement("span"),o=document.createElement("p"),n=document.createElement("p"),s=document.createElement("span");s.textContent="Hint: ",s.className=`${l.main__info_span}`,e.className=`${l.main__info_answer}`,o.className=`${l.main__info_question}`,n.className=`${l.main__info_guesses}`,e.textContent=`${b}`,o.textContent=`${S}`,n.textContent="guesses: 6 / 6",t.append(e),t.append(o),t.append(n),o.prepend(s)}function I(){const t=document.querySelector("[class*=main__section_game]"),e=document.createElement("section");e.className=`${l.main__section_info}`,t.append(e),G(e)}const Y="_main__image_gallows_w70ha_1",H={main__image_gallows:Y};function W(){const t=document.querySelector("[class*=main__section_gallows]"),e=document.createElement("img");e.setAttribute("src","./6.svg"),e.setAttribute("alt","Gallows Image"),e.className=`${H.main__image_gallows}`,t.append(e)}const B="_main__section_keyboard_1se6h_1",j="_main__keyboard_key_1se6h_7",A={main__section_keyboard:B,main__keyboard_key:j},K="/mitsuhitomeow-JSFE2023Q4/musickPressKey.mp3";function C(t,e){t.forEach(o=>{const n=document.createElement("button"),s=document.querySelector("[class*=header__img_sound]"),a=new Audio(K);n.textContent=`${o.key}`,n.addEventListener("click",()=>{n.disabled=!0,s.classList.contains("sound")&&a.play()}),n.className=`${A.main__keyboard_key}`,e.append(n)})}const D=u.slice(0,10),U=u.slice(10,19),V=u.slice(19,u.length);function X(){const t=document.querySelector("[class*=main__section_game]"),e=document.createElement("section"),o=document.createElement("div"),n=document.createElement("div"),s=document.createElement("div");e.className=`${A.main__section_keyboard}`,C(D,o),C(U,n),C(V,s),t.append(e),e.append(o,n,s)}const Z="/mitsuhitomeow-JSFE2023Q4/musicFanfar.mp3",z="/mitsuhitomeow-JSFE2023Q4/musicGameOver.mp3";function ee(t){const e=document.querySelector("[class*=header__img_sound]");t==="You WIN!"&&e.classList.contains("sound")&&new Audio(Z).play(),t==="You Lost!"&&e.classList.contains("sound")&&new Audio(z).play()}const te="_modal_14ydd_1",ne="_modal__content_14ydd_11",oe="_modal__content_title_14ydd_28",se="_modal__content_answer_14ydd_34",ae="_modal__button_play_14ydd_42",_={modal:te,modal__content:ne,modal__content_title:oe,modal__content_answer:se,modal__button_play:ae};function y(t,e){const o=document.createElement("div"),n=document.createElement("div"),s=document.createElement("p"),a=document.createElement("p"),i=document.createElement("button");o.id=_.modal,o.style.display="block",s.textContent=`${t}`,a.textContent=`Word: ${e}`,i.textContent="Play Again",o.classList.add(_.modal),n.className=_.modal__content,i.className=_.modal__button_play,s.className=_.modal__content_title,a.className=_.modal__content_answer,n.appendChild(s),n.appendChild(a),n.appendChild(i),o.appendChild(n),document.body.appendChild(o),i.addEventListener("click",()=>{o.style.display="none",q()}),ee(t)}function ie(){const t=new Audio(K),e=[...r],o=[...b];let n=6;const s=document.querySelectorAll("[class*=main__keyboard_key]"),[a,i,f,L]=[document.querySelector("[class*=main__info_guesses]"),document.querySelector("[class*=main__image_gallows]"),document.querySelector("[class*=main__info_answer]"),document.querySelector("[class*=header__img_sound]")];a.textContent=`guesses: ${n} / 6`,i.setAttribute("src","./6.svg"),f.textContent=o.join("");const x=JSON.parse(JSON.stringify(u));let m=!0;document.addEventListener("keydown",d=>{m&&x.forEach(g=>{const c=g;d.code===c.code&&s.forEach(O=>{const w=O;c.key===w.textContent&&(w.disabled=!0,L.classList.contains("sound")&&t.play()),c.key===w.textContent&&!e.includes(c.key)&&(n-=1,c.key="",a.textContent=`guesses: ${n} / 6`,i.setAttribute("src",`./${n}.svg`)),e.includes(c.key)&&e.forEach((F,J)=>{F===c.key&&(o[J]=c.key,f.textContent=o.join(""))})}),n===0&&(y("You Lost!",r),n=6,m=!1),JSON.stringify(e)===JSON.stringify(o)&&(y("You WIN!",r),m=!1)})}),s.forEach(d=>{d.addEventListener("click",()=>{e.includes(d.textContent)&&e.forEach((g,c)=>{g===d.textContent&&(o[c]=d.textContent,f.textContent=o.join(""))}),e.includes(d.textContent)||(n-=1,a.textContent=`guesses: ${n} / 6`,i.setAttribute("src",`./${n}.svg`)),JSON.stringify(e)===JSON.stringify(o)&&(y("You WIN!",r),n=6,m=!1),n===0&&(y("You Lost!",r),m=!1)})})}function q(){const t=document.querySelector("[class*=main__section_gallows]"),e=document.querySelector("[class*=main__section_game]");t.innerHTML="",e.innerHTML="",W(),I(),X(),ie()}const ce="_footer__wrapper_1nnqm_1",de={footer__wrapper:ce};function re(){const t=document.createElement("footer"),e=document.createElement("div"),o=document.createElement("span");t.className="footer",e.className=`${de.footer__wrapper}`,document.body.append(t),t.append(e),e.append(o),o.textContent="© RSSchool Production."}const _e="/mitsuhitomeow-JSFE2023Q4/favicon.svg";function me(){const t=document.createElement("link");t.rel="icon",t.href=_e,document.head.append(t)}const le="_header__wrapper_gh6pa_1",ue="_header__img_sound_gh6pa_8",ye="_title_gh6pa_34",E={header__wrapper:le,header__img_sound:ue,title:ye},$="/mitsuhitomeow-JSFE2023Q4/sound-off.svg",N="/mitsuhitomeow-JSFE2023Q4/sound-on.svg",pe="/mitsuhitomeow-JSFE2023Q4/musicBackground.mp3",p=new Audio(pe);function fe(){const t=document.querySelector("[class*=header__img_sound]");t.addEventListener("click",()=>{t.getAttribute("src")===N?(t.setAttribute("src",$),t.classList.remove("sound"),p.pause()):(t.setAttribute("src",N),t.classList.add("sound"),p.play())}),p.addEventListener("ended",()=>{setTimeout(()=>p.play(),1e3)})}function ge(){const t=document.createElement("header"),e=document.createElement("h1"),o=document.createElement("div"),n=document.createElement("img");n.setAttribute("src",$),document.body.append(t),t.append(o),o.append(e),o.append(n),e.innerText="Hagman Game",t.className="header",o.className=`${E.header__wrapper}`,e.className=`${E.title}`,n.className=`${E.header__img_sound}`,fe()}const we="_main__wrapper_amlpr_1",ke="_main__section_gallows_amlpr_14",he="_main__section_game_amlpr_24",v={main__wrapper:we,main__section_gallows:ke,main__section_game:he};function Ce(){const t=document.createElement("main"),e=document.createElement("div"),o=document.createElement("div"),n=document.createElement("section");document.body.appendChild(t),t.appendChild(e),e.appendChild(n),e.appendChild(o),t.className="main",e.className=`${v.main__wrapper}`,n.className=`${v.main__section_gallows}`,o.className=`${v.main__section_game}`}me();ge();Ce();re();q();
