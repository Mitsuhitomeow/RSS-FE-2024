(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();const W="_main__section_info_1fs3l_1",B="_main__info_span_1fs3l_11",H="_main__info_answer_1fs3l_15",Y="_main__info_question_1fs3l_26",j="_main__info_guesses_1fs3l_37",_={main__section_info:W,main__info_span:B,main__info_answer:H,main__info_question:Y,main__info_guesses:j},k=[{question:"Who says meow?",answer:"cat"},{question:"An element with the symbol 'O'.",answer:"Oxygen"},{question:"A famous scientist known for the theory of relativity.",answer:"Einstein"},{question:"The capital of Japan.",answer:"Tokyo"},{question:"The largest mammal in the world.",answer:"Bluewhale"},{question:"The currency of Germany.",answer:"Euro"},{question:"A Shakespeare play about tragedy and betrayal.",answer:"Othello"},{question:"A programming language named after a snake.",answer:"Python"},{question:"The longest river in the world.",answer:"Nile"},{question:"A famous painting by Leonardo da Vinci with a mysterious smile.",answer:"MonaLisa"},{question:"A mythical bird that rises from its ashes.",answer:"Phoenix"},{question:"A programming language commonly used for web development.",answer:"JavaScript"},{question:"An operating system developed by Apple Inc.",answer:"macOS"},{question:"The largest social media platform.",answer:"Facebook"},{question:"A popular version control system used in software development.",answer:"Git"},{question:"The company known for its search engine.",answer:"Google"},{question:"The programming language known for its simplicity and readability.",answer:"Python"},{question:"A popular web browser developed by Google.",answer:"Chrome"},{question:"The process of finding and fixing errors in a computer program.",answer:"Debugging"},{question:"A widely used markup language for creating web pages.",answer:"HTML"},{question:"An acronym for a widely used data interchange format.",answer:"JSON"},{question:"A widely used relational database management system.",answer:"MySQL"},{question:"A widely used programming language for building mobile applications.",answer:"Java"},{question:"The term for a software program designed to cause damage to a computer system.",answer:"Malware"},{question:"An open-source operating system based on the Linux kernel.",answer:"Ubuntu"},{question:"A popular version of Unix used in web hosting.",answer:"Linux"},{question:"The process of converting human-readable code into machine code.",answer:"Compilation"},{question:"The organization that develops the Java programming language.",answer:"Oracle"},{question:"A widely used content management system for building websites.",answer:"WordPress"},{question:"The programming language known for its use in artificial intelligence applications.",answer:"Python"},{question:"The process of protecting information from unauthorized access.",answer:"Security"},{question:"An agile project management framework.",answer:"Scrum"},{question:"The programming language designed for creating dynamic web pages.",answer:"PHP"},{question:"The technology that allows data transmission over short distances.",answer:"Bluetooth"},{question:"A widely used integrated development environment (IDE) for Java.",answer:"Eclipse"}],p=[{key:"Q",code:"KeyQ"},{key:"W",code:"KeyW"},{key:"E",code:"KeyE"},{key:"R",code:"KeyR"},{key:"T",code:"KeyT"},{key:"Y",code:"KeyY"},{key:"U",code:"KeyU"},{key:"I",code:"KeyI"},{key:"O",code:"KeyO"},{key:"P",code:"KeyP"},{key:"A",code:"KeyA"},{key:"S",code:"KeyS"},{key:"D",code:"KeyD"},{key:"F",code:"KeyF"},{key:"G",code:"KeyG"},{key:"H",code:"KeyH"},{key:"J",code:"KeyJ"},{key:"K",code:"KeyK"},{key:"L",code:"KeyL"},{key:"Z",code:"KeyZ"},{key:"X",code:"KeyX"},{key:"C",code:"KeyC"},{key:"V",code:"KeyV"},{key:"B",code:"KeyB"},{key:"N",code:"KeyN"},{key:"M",code:"KeyM"}];let b,l,S,N;function D(n){b=Math.floor(Math.random()*k.length),l=k[b].answer.toUpperCase(),S=l.split("").map(()=>"_").join(""),N=k[b].question,console.log("Answer:",l);const e=document.createElement("span"),t=document.createElement("p"),o=document.createElement("p"),s=document.createElement("span");s.textContent="Hint: ",s.className=`${_.main__info_span}`,e.className=`${_.main__info_answer}`,t.className=`${_.main__info_question}`,o.className=`${_.main__info_guesses}`,e.textContent=`${S}`,t.textContent=`${N}`,o.textContent="guesses: 6 / 6",n.append(e),n.append(t),n.append(o),t.prepend(s)}function U(){const n=document.querySelector("[class*=main__section_game]"),e=document.createElement("section");e.className=`${_.main__section_info}`,n.append(e),D(e)}const V="_main__image_gallows_w70ha_1",z={main__image_gallows:V};function X(){const n=document.querySelector("[class*=main__section_gallows]"),e=document.createElement("img");e.setAttribute("src","./6.svg"),e.setAttribute("alt","Gallows Image"),e.className=`${z.main__image_gallows}`,n.append(e)}const Z="_main__section_keyboard_1se6h_1",ee="_main__keyboard_key_1se6h_7",O={main__section_keyboard:Z,main__keyboard_key:ee},v="/mitsuhitomeow-JSFE2023Q4/musicMouseClick.mp3",C="/mitsuhitomeow-JSFE2023Q4/musickPressKey.mp3";function E(n,e){n.forEach(t=>{const o=document.createElement("button"),s=document.querySelector("[class*=header__img_sound]"),a=new Audio(v),i=new Audio(C);o.textContent=`${t.key}`,o.addEventListener("click",()=>{const d=window.screen.width;o.disabled=!0,s.classList.contains("sound")&&d>768&&a.play(),s.classList.contains("sound")&&d<=768&&i.play()}),o.className=`${O.main__keyboard_key}`,e.append(o)})}const ne=p.slice(0,10),te=p.slice(10,19),oe=p.slice(19,p.length);function se(){const n=document.querySelector("[class*=main__section_game]"),e=document.createElement("section"),t=document.createElement("div"),o=document.createElement("div"),s=document.createElement("div");e.className=`${O.main__section_keyboard}`,E(ne,t),E(te,o),E(oe,s),n.append(e),e.append(t,o,s)}const ae=new Audio(v),J=new Audio(C),M=n=>{const e=document.querySelector("[class*=header__img_sound]"),t=document.querySelector("[class*=modal]");n.code==="Enter"&&(e.classList.contains("sound")&&J.play(),document.removeEventListener("keydown",M),t.remove(),x())},ie=()=>{const n=document.querySelector("[class*=header__img_sound]"),e=document.querySelector("[class*=modal]"),t=window.screen.width;n.classList.contains("sound")&&t>768&&ae.play(),n.classList.contains("sound")&&t<=768&&J.play(),e.remove(),x()},ce="/mitsuhitomeow-JSFE2023Q4/musicFanfar.mp3",re="/mitsuhitomeow-JSFE2023Q4/musicGameOver.mp3";function de(n){const e=document.querySelector("[class*=header__img_sound]");n==="You WIN!"&&e.classList.contains("sound")&&new Audio(ce).play(),n==="You Lost!"&&e.classList.contains("sound")&&new Audio(re).play()}const me="_modal_17dtx_1",le="_modal__content_17dtx_11",ue="_modal__content_title_17dtx_39",_e="_modal__content_answer_17dtx_45",pe="_modal__button_play_17dtx_53",m={modal:me,modal__content:le,modal__content_title:ue,modal__content_answer:_e,modal__button_play:pe};function K(n,e){const t=document.createElement("div"),o=document.createElement("div"),s=document.createElement("p"),a=document.createElement("p"),i=document.createElement("button");t.id=m.modal,t.style.display="block",s.textContent=`${n}`,a.textContent=`Word: ${e}`,i.textContent="Play Again",t.classList.add(m.modal),o.className=m.modal__content,i.className=m.modal__button_play,s.className=m.modal__content_title,a.className=m.modal__content_answer,o.appendChild(s),o.appendChild(a),o.appendChild(i),t.appendChild(o),document.body.appendChild(t),document.addEventListener("keydown",M),i.addEventListener("click",ie),de(n)}function ye(){const n=new Audio(C),e=[...l],t=[...S];let o=6;const s=document.querySelectorAll("[class*=main__keyboard_key]"),[a,i,d,F]=[document.querySelector("[class*=main__info_guesses]"),document.querySelector("[class*=main__image_gallows]"),document.querySelector("[class*=main__info_answer]"),document.querySelector("[class*=header__img_sound]")];a.textContent=`guesses: ${o} / 6`,i.setAttribute("src","./6.svg"),d.textContent=t.join("");const R=JSON.parse(JSON.stringify(p));let f=!0;function L(){o===0&&(K("You Lost!",l),o=6,f=!1),JSON.stringify(e)===JSON.stringify(t)&&(K("You WIN!",l),f=!1)}document.addEventListener("keydown",r=>{f&&(R.forEach(w=>{const c=w;r.code===c.code&&s.forEach(G=>{const h=G;c.key===h.textContent&&(h.disabled=!0,F.classList.contains("sound")&&n.play()),c.key===h.textContent&&!e.includes(c.key)&&(o-=1,c.key="",a.textContent=`guesses: ${o} / 6`,i.setAttribute("src",`./${o}.svg`)),e.includes(c.key)&&e.forEach((Q,I)=>{Q===c.key&&(t[I]=c.key,d.textContent=t.join(""))})})}),L())}),s.forEach(r=>{r.addEventListener("click",()=>{e.includes(r.textContent)&&e.forEach((w,c)=>{w===r.textContent&&(t[c]=r.textContent,d.textContent=t.join(""))}),e.includes(r.textContent)||(o-=1,a.textContent=`guesses: ${o} / 6`,i.setAttribute("src",`./${o}.svg`)),L()})})}function x(){const n=document.querySelector("[class*=main__section_gallows]"),e=document.querySelector("[class*=main__section_game]");n.innerHTML="",e.innerHTML="",X(),U(),se(),ye()}const ge="_footer__wrapper_1nnqm_1",fe={footer__wrapper:ge};function we(){const n=document.createElement("footer"),e=document.createElement("div"),t=document.createElement("span");n.className="footer",e.className=`${fe.footer__wrapper}`,document.body.append(n),n.append(e),e.append(t),t.textContent="© RSSchool Production."}const he="/mitsuhitomeow-JSFE2023Q4/favicon.svg";function ke(){const n=document.createElement("link");n.rel="icon",n.href=he,document.head.append(n)}const be="_header__wrapper_gh6pa_1",Ee="_header__img_sound_gh6pa_8",qe="_title_gh6pa_34",q={header__wrapper:be,header__img_sound:Ee,title:qe},P="/mitsuhitomeow-JSFE2023Q4/sound-off.svg",$="/mitsuhitomeow-JSFE2023Q4/sound-on.svg",Ae="/mitsuhitomeow-JSFE2023Q4/musicBackground.mp3",y=new Audio(Ae),g=new Audio(v),u=new(window.AudioContext||window.webkitAudioContext);function T(n){n.addEventListener("canplaythrough",()=>{const e=u.createBufferSource(),t=u.createBuffer(1,u.sampleRate*.33,u.sampleRate);e.buffer=t,e.connect(u.destination),e.start()}),n.load()}function Se(){const n=document.querySelector("[class*=header__img_sound]");n.addEventListener("click",()=>{n.getAttribute("src")===$?(n.setAttribute("src",P),n.classList.remove("sound"),T(g),y.pause(),g.play()):(n.setAttribute("src",$),n.classList.add("sound"),T(g),y.play(),g.play())}),y.addEventListener("ended",()=>{setTimeout(()=>y.play(),1e3)})}function ve(){const n=document.createElement("header"),e=document.createElement("h1"),t=document.createElement("div"),o=document.createElement("img");o.setAttribute("src",P),document.body.append(n),n.append(t),t.append(e),t.append(o),e.innerText="Hagman Game",n.className="header",t.className=`${q.header__wrapper}`,e.className=`${q.title}`,o.className=`${q.header__img_sound}`,Se()}const Ce="_main__wrapper_amlpr_1",xe="_main__section_gallows_amlpr_14",Le="_main__section_game_amlpr_24",A={main__wrapper:Ce,main__section_gallows:xe,main__section_game:Le};function Ne(){const n=document.createElement("main"),e=document.createElement("div"),t=document.createElement("div"),o=document.createElement("section");document.body.appendChild(n),n.appendChild(e),e.appendChild(o),e.appendChild(t),n.className="main",e.className=`${A.main__wrapper}`,o.className=`${A.main__section_gallows}`,t.className=`${A.main__section_game}`}ke();ve();Ne();we();x();
//# sourceMappingURL=index--2J6eSd2.js.map
