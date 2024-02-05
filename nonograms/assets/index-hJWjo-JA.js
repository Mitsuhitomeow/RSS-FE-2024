(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();class L{constructor(){this.second=0,this.minute=0,this.running=!1,this.intervalId=null,this.span=null,this.time="00:00"}start(){this.time=`${L.formatTime(this.minute)}:${L.formatTime(this.second)}`,this.running=!0,this.intervalId=setInterval(()=>{this.tick(),this.span.innerHTML="",this.span.innerHTML=this.time},1e3)}pause(){this.intervalId!==null&&(clearInterval(this.intervalId),this.intervalId=null,this.running=!1)}restart(){this.second=0,this.minute=0,this.time="00:00",this.span.innerHTML=this.time}tick(){this.second+=1,this.second===60&&(this.second=0,this.minute+=1),this.time=`${L.formatTime(this.minute)}:${L.formatTime(this.second)}`}static formatTime(e){return e<10?`0${e}`:e}getTime(){return this.time}isRunning(){return this.running}}const R="/mitsuhitomeow-JSFE2023Q4/nonograms/audio/square.mp3",V="/mitsuhitomeow-JSFE2023Q4/nonograms/audio/cross.mp3",Q="/mitsuhitomeow-JSFE2023Q4/nonograms/audio/empty.mp3",j=new Audio(R),K=new Audio(V),A=new Audio(Q);class W{constructor(e,n){this.ground=document.createElement("section"),this.columns=[],this.matrix=[],this.time=n,this.initPlayground(e),this.addClick()}updatePlayground(e){this.initPlayground(e),this.addClick()}initPlayground(e){switch(this.ground.innerHTML="",this.ground.className="main__section-playground",e){case 5:this.ground.classList.add("ease__scale");break;case 10:this.ground.classList.add("medium__scale");break;default:this.ground.classList.add("hard__scale")}for(let t=0;t<e+1;t+=1){const s=document.createElement("div");this.ground.append(s),s.className="row",t===0&&(s.className="first__row");for(let o=0;o<e+1;o+=1){const i=document.createElement("div");if(s.append(i),i.className="column",t===0&&(i.className="hint hint__top hint__background"),o===0&&(i.className="hint hint__left hint__background"),t===0&&o===0){const c=document.createElement("span");this.time.span=c,c.innerHTML=this.time.time,i.append(c),c.className="section__time",i.className="zero hint__background"}this.columns.push(i)}}}addClick(){this.columns.forEach(e=>{const n=e;e.classList.contains("column")&&(n.addEventListener("click",()=>{if(this.time.isRunning()||this.time.start(),e.innerHTML===""&&!e.classList.contains("cross")){const t=JSON.parse(localStorage.getItem("sound"));t===!0&&!e.classList.contains("black")?j.play():t===!0&&e.classList.contains("black")&&A.play(),e.classList.toggle("black")}else e.classList.remove("black")}),n.addEventListener("contextmenu",t=>{t.preventDefault();const s=JSON.parse(localStorage.getItem("sound"));this.time.isRunning()||this.time.start(),e.innerHTML===""&&!e.classList.contains("black")?(s===!0&&!e.classList.contains("cross")&&K.play(),n.classList.toggle("cross"),n.innerHTML=`
              <svg viewBox="0 0 25 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                  <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-469.000000, -1041.000000)" fill="#000000">
                    <path d="M487.148,1053.48 L492.813,1047.82 C494.376,1046.26 494.376,1043.72 492.813,1042.16 C491.248,1040.59 488.712,1040.59 487.148,1042.16 L481.484,1047.82 L475.82,1042.16 C474.257,1040.59 471.721,1040.59 470.156,1042.16 C468.593,1043.72 468.593,1046.26 470.156,1047.82 L475.82,1053.48 L470.156,1059.15 C468.593,1060.71 468.593,1063.25 470.156,1064.81 C471.721,1066.38 474.257,1066.38 475.82,1064.81 L481.484,1059.15 L487.148,1064.81 C488.712,1066.38 491.248,1066.38 492.813,1064.81 C494.376,1063.25 494.376,1060.71 492.813,1059.15 L487.148,1053.48" id="cross" sketch:type="MSShapeGroup">
                    </path>
                  </g>
                </g>
              </svg>
            `):(n.classList.remove("cross"),n.innerHTML="",s===!0&&A.play())}))})}getElement(){return this.ground}}const Y={5:[{name:"Dinosaur",pixels:[[0,0,0,1,1],[0,0,1,1,0],[0,1,1,1,1],[1,1,1,1,0],[0,1,0,1,0]]},{name:"Smile Face",pixels:[[0,1,1,1,0],[1,0,1,0,1],[1,1,1,1,1],[1,0,0,0,1],[0,1,1,1,0]]},{name:"Anchor",pixels:[[0,1,1,1,0],[0,0,1,0,0],[0,0,1,0,0],[1,0,1,0,1],[0,1,1,1,0]]},{name:"Alien",pixels:[[1,1,0,1,1],[0,1,1,1,0],[1,1,1,1,1],[0,1,1,1,0],[0,1,0,1,0]]},{name:"Smile Face",pixels:[[1,1,1,1,1],[0,1,1,1,0],[0,0,1,0,0],[0,1,0,1,0],[1,1,1,1,1]]}],10:[{name:"Creeper Face",pixels:[[1,1,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,1],[1,0,1,1,0,0,1,1,0,1],[1,0,1,1,0,0,1,1,0,1],[1,0,0,0,1,1,0,0,0,1],[1,0,0,1,1,1,1,0,0,1],[1,0,0,1,1,1,1,0,0,1],[1,0,0,1,0,0,1,0,0,1],[1,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,1]]},{name:"Vampyre",pixels:[[0,0,1,1,1,1,1,1,0,0],[0,1,0,0,0,0,0,0,1,0],[0,1,0,1,0,0,1,0,1,0],[0,1,0,0,0,0,0,0,1,0],[0,1,1,0,1,1,0,1,1,0],[0,0,0,1,0,0,1,0,0,0],[0,0,1,0,0,0,0,1,0,0],[0,1,0,0,1,1,0,0,1,0],[1,0,1,1,0,0,1,1,0,1],[1,0,0,1,1,1,1,0,0,1]]},{name:"Question mark",pixels:[[0,0,1,1,1,1,1,1,0,0],[0,1,1,0,0,0,0,1,1,0],[0,1,1,0,0,0,0,1,1,0],[0,0,0,0,0,0,0,1,1,0],[0,0,0,0,0,0,1,1,1,0],[0,0,0,0,1,1,1,1,0,0],[1,0,0,0,1,1,0,0,0,1],[1,1,1,0,0,0,0,1,1,1],[1,1,1,0,1,1,0,1,1,1],[1,1,1,0,1,1,0,1,1,1]]},{name:"Snail",pixels:[[0,0,1,1,1,1,0,0,0,0],[0,1,1,0,1,1,1,0,0,0],[1,1,1,1,0,1,1,1,0,0],[1,0,1,1,1,0,1,1,0,0],[1,1,1,1,1,0,1,1,0,0],[1,1,1,1,0,1,1,0,0,0],[1,1,1,1,1,1,1,0,1,0],[1,1,1,1,1,1,0,0,0,1],[0,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,0]]},{name:"Leaf",pixels:[[0,0,0,0,0,1,1,1,1,1],[0,0,0,1,1,1,0,1,0,1],[0,0,1,1,0,1,0,1,1,1],[0,1,0,1,0,1,1,0,0,1],[0,1,0,1,0,1,1,1,1,1],[0,1,0,1,1,0,0,0,1,0],[0,1,1,1,1,1,1,1,1,0],[0,0,1,0,0,0,0,1,0,0],[0,1,0,1,1,1,1,0,0,0],[1,1,0,0,0,0,0,0,0,0]]}],15:[{name:"Smile Face",pixels:[[0,0,0,0,0,1,1,1,1,1,0,0,0,0,0],[0,0,1,1,1,1,1,1,1,1,1,1,1,0,0],[0,0,1,0,1,0,0,0,0,0,1,0,1,0,0],[0,0,1,1,0,0,0,0,0,0,0,1,1,0,0],[0,0,1,0,0,0,0,0,0,0,0,0,1,0,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[1,1,0,1,0,1,1,0,1,0,1,1,0,1,1],[1,1,0,1,1,1,1,0,1,0,1,1,0,1,1],[1,1,0,0,1,1,0,0,0,1,1,0,0,1,1],[0,1,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,0,1,0,0,0,1,1,1,1,0,0,1,0,0],[0,0,1,1,0,0,0,0,0,0,0,1,1,0,0],[0,0,0,0,1,1,0,0,0,1,1,0,0,0,0],[0,0,0,0,0,1,1,1,1,1,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,1,0,0,0,0,0]]},{name:"Mouse",pixels:[[0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],[0,0,0,0,0,1,1,1,1,0,0,1,1,0,1],[0,0,0,1,1,1,0,0,1,0,0,1,0,1,0],[1,1,1,0,1,0,0,1,1,0,0,1,0,0,0],[1,1,0,0,0,0,0,1,0,0,0,1,1,0,0],[0,1,1,1,1,0,0,1,1,0,0,0,1,1,0],[0,0,0,0,1,1,0,0,1,1,0,0,0,1,1],[0,0,0,0,0,1,0,0,0,1,1,1,0,0,1],[0,0,0,0,0,1,1,0,0,0,0,1,1,0,1],[0,0,0,1,1,1,1,0,0,0,0,0,1,1,1],[0,0,0,1,0,1,0,0,1,1,0,0,0,1,1],[0,0,0,0,0,1,0,0,1,0,0,0,0,1,0],[0,0,0,0,0,0,1,0,1,0,0,0,0,1,0],[0,0,0,0,0,1,1,1,1,1,0,0,0,1,0],[0,0,0,1,1,1,0,1,1,0,1,1,1,0,0]]},{name:"Treble clef",pixels:[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,0,1,1,1,1,1,1,1,1,1,1],[1,1,1,0,1,0,1,1,1,1,1,1,1,1,1],[0,0,1,0,1,0,1,0,0,0,0,0,0,0,0],[1,1,1,0,1,0,1,1,1,1,1,1,1,0,1],[0,1,1,0,0,1,1,0,0,0,0,0,0,0,0],[1,1,0,0,1,1,1,1,1,1,0,1,1,0,1],[1,0,1,0,0,1,1,0,0,0,0,0,0,0,0],[1,0,0,0,1,0,1,1,1,1,0,1,0,1,1],[1,0,1,0,1,0,1,0,0,0,0,0,0,0,0],[1,1,0,0,0,1,1,1,1,0,1,1,1,1,1],[1,1,1,0,1,1,0,0,0,0,0,0,0,0,0],[1,0,1,0,1,1,1,1,1,1,1,1,1,1,1],[1,1,0,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]]},{name:"Alarm clock",pixels:[[0,0,1,1,1,0,0,0,0,0,1,1,1,0,0],[0,1,1,1,0,1,1,1,1,1,0,1,1,1,0],[1,1,1,0,1,1,1,0,1,1,1,0,1,1,1],[1,1,0,1,1,1,1,0,1,1,1,1,0,1,1],[1,0,1,1,1,1,1,1,1,1,0,1,1,0,1],[0,0,1,1,1,1,1,1,1,0,1,1,1,0,0],[0,1,1,1,1,1,1,1,0,1,1,1,1,1,0],[0,1,0,0,1,0,0,0,1,1,1,0,0,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,0,1,1,1,1,1,1,1,1,1,1,1,0,0],[0,0,1,1,1,1,1,0,1,1,1,1,1,0,0],[0,0,0,1,1,1,1,0,1,1,1,1,0,0,0],[0,0,1,0,0,1,1,1,1,1,0,0,1,0,0],[0,1,0,0,1,0,1,1,1,0,1,0,0,1,0],[0,0,1,1,0,0,0,0,0,0,0,1,1,0,0]]},{name:"Sun",pixels:[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,0,1,1,1,1,1,1,1],[1,1,0,1,1,1,1,0,1,1,1,1,0,1,1],[1,1,1,0,1,1,1,1,1,1,1,0,1,1,1],[1,1,1,1,1,0,0,0,0,0,1,1,1,1,1],[1,1,1,1,0,0,0,0,0,0,0,1,1,1,1],[1,1,1,1,0,0,1,0,1,0,0,1,1,1,1],[1,0,0,1,0,0,0,0,0,0,0,1,0,0,1],[1,1,1,1,0,1,0,0,0,1,0,1,1,1,1],[1,1,1,1,0,0,1,1,1,0,0,1,1,1,1],[1,1,1,1,1,0,0,0,0,0,1,1,1,1,1],[1,1,1,0,1,1,1,1,1,1,1,0,1,1,1],[1,1,0,1,1,1,1,0,1,1,1,1,0,1,1],[1,1,1,1,1,1,1,0,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]]}]},N={images:Y},U="/mitsuhitomeow-JSFE2023Q4/nonograms/audio/win.mp3",X=new Audio(U),[S,_,C]=[document.createElement("div"),document.createElement("div"),document.createElement("span")];S.classList.add("modal");_.classList.add("modal-content");C.classList.add("close");C.innerHTML=`
<svg viewBox="0 0 25 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
    <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-469.000000, -1041.000000)" fill="#000000">
      <path d="M487.148,1053.48 L492.813,1047.82 C494.376,1046.26 494.376,1043.72 492.813,1042.16 C491.248,1040.59 488.712,1040.59 487.148,1042.16 L481.484,1047.82 L475.82,1042.16 C474.257,1040.59 471.721,1040.59 470.156,1042.16 C468.593,1043.72 468.593,1046.26 470.156,1047.82 L475.82,1053.48 L470.156,1059.15 C468.593,1060.71 468.593,1063.25 470.156,1064.81 C471.721,1066.38 474.257,1066.38 475.82,1064.81 L481.484,1059.15 L487.148,1064.81 C488.712,1066.38 491.248,1066.38 492.813,1064.81 C494.376,1063.25 494.376,1060.71 492.813,1059.15 L487.148,1053.48" id="cross" sketch:type="MSShapeGroup">
      </path>
    </g>
  </g>
</svg>
`;document.body.appendChild(S);S.appendChild(_);_.appendChild(C);function ee(a){_.innerHTML="",_.appendChild(C);const[e,n,t]=[document.createElement("div"),document.createElement("p"),document.createElement("p")];_.appendChild(e),e.appendChild(n),e.appendChild(t),e.className="modal__content_win",n.className="modal__title",n.textContent="Great!",t.className="modal__subtitle",t.textContent=` You have solved the nonogram in ${a} seconds!`,S.style.display="flex",JSON.parse(localStorage.getItem("sound"))===!0&&X.play()}function T(){S.style.display="none"}function G(a){a.target===S&&T()}document.removeEventListener("click",G);C.removeEventListener("click",T);document.addEventListener("click",G);C.addEventListener("click",T);function te(a,e){const n=document.querySelectorAll(".hint__left"),t=document.querySelectorAll(".hint__top"),s=(o,i)=>{o.forEach((c,l)=>{const r=i[l];r.forEach((d,g)=>{const m=document.createElement("span");m.textContent=r[g],m.className="hint__number",c.append(m)})})};s(n,a),s(t,e)}function D(a){const e=a.length,n=a[0].length,t=a.map(o=>o.reduce((i,c)=>(c===1?i[i.length-1]+=1:i[i.length-1]!==0&&i.push(0),i),[0]).filter(i=>i!==0));t.forEach(o=>{o.length===0&&o.push(0)});const s=Array.from({length:n},()=>[]);for(let o=0;o<n;o+=1){let i=0;for(let c=0;c<e;c+=1)a[c][o]===1?i+=1:i!==0&&(s[o].push(i),i=0);i!==0&&s[o].push(i),s[o].length===0&&s[o].push(0)}te(t,s)}const k=document.createElement("div"),v=document.createElement("div"),w=document.createElement("span");k.classList.add("modal");v.classList.add("modal-content");w.classList.add("close");w.innerHTML=`
<svg viewBox="0 0 25 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
    <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-469.000000, -1041.000000)" fill="#000000">
      <path d="M487.148,1053.48 L492.813,1047.82 C494.376,1046.26 494.376,1043.72 492.813,1042.16 C491.248,1040.59 488.712,1040.59 487.148,1042.16 L481.484,1047.82 L475.82,1042.16 C474.257,1040.59 471.721,1040.59 470.156,1042.16 C468.593,1043.72 468.593,1046.26 470.156,1047.82 L475.82,1053.48 L470.156,1059.15 C468.593,1060.71 468.593,1063.25 470.156,1064.81 C471.721,1066.38 474.257,1066.38 475.82,1064.81 L481.484,1059.15 L487.148,1064.81 C488.712,1066.38 491.248,1066.38 492.813,1064.81 C494.376,1063.25 494.376,1060.71 492.813,1059.15 L487.148,1053.48" id="cross" sketch:type="MSShapeGroup">
      </path>
    </g>
  </g>
</svg>
`;document.body.appendChild(k);k.appendChild(v);v.appendChild(w);function ne(){const a=JSON.parse(localStorage.getItem("results"));let e=a!==null?a:[];const n=document.createElement("div");if(v.innerHTML="",v.appendChild(w),v.append(n),a!==null)e=e.sort((t,s)=>{const o=new Date(`1970-01-01T${t.time}`),i=new Date(`1970-01-01T${s.time}`);return o-i}),e.forEach((t,s)=>{const o=t;let i=s;const[c,l,r,d]=[document.createElement("div"),document.createElement("span"),document.createElement("span"),document.createElement("span")];n.appendChild(c),c.appendChild(l),c.appendChild(r),c.appendChild(d),l.textContent=`${i+=1}. Name of the puzzle: ${o.name}`,r.textContent=`Difficulty: ${o.size}`,d.textContent=`Passage time: ${o.time}`});else{const t=document.createElement("span");n.append(t),t.textContent="No Data.."}k.style.display="flex"}function J(){k.style.display="none"}function se(a){a.target===k&&J()}document.addEventListener("click",se);w.addEventListener("click",J);function oe(a){const n=JSON.parse(localStorage.getItem("results"))!==null?JSON.parse(localStorage.getItem("results")):[];n.length===5&&n.shift(),n.push(a),localStorage.setItem("results",JSON.stringify(n))}function ie(){ne()}let q,z,h;function H(a){z=a}function ae(a){h=a}function ce(a,e){const n=document.querySelectorAll(".column"),t=a;h=q,(!h||h.length!==n.length)&&(h=Array.from({length:n.length},()=>0));const s=(o,i)=>{if(q=h,o.classList.contains("cross")||(h[i]===0?h[i]=1:h[i]=0,!h.every((M,Z)=>M===z.flat()[Z])))return;e.pause();const l=e.getTime(),[r,d,g,m]=[document.querySelector(".main__options-select"),document.querySelector(".image__section"),document.querySelector(".main__section-playground"),document.querySelector(".result__btn")],u=r.value,f=Array.from(r.options).find(M=>M.value===u),p={size:f?f.textContent:"",name:d.value,time:l,sec:e.second};oe(p),m.disabled=!1,h=Array.from({length:n.length},()=>0),g.classList.add("block__events"),ee(l)};n.forEach((o,i)=>{o.removeEventListener("click",()=>s(o,i)),o.addEventListener("click",()=>s(o,i))}),D(t)}function $(a){const[e,n]=[document.querySelectorAll(".column"),document.querySelector(".main__section-playground")];h=Array.from({length:e.length},()=>0),q=h,e.forEach(t=>{const s=t;s.classList.remove("black","cross","cross_solution"),s.innerHTML=""}),a.pause(),a.restart(),n.classList.contains("block__events")&&n.classList.remove("block__events")}function le(a){const e=[],[n,t,s,o]=[document.querySelector(".continue__btn"),document.querySelector(".main__options-select"),document.querySelector(".image__section"),document.querySelectorAll(".column")];o.forEach(r=>{r.classList.contains("cross")?e.push(1):e.push(0)});const i=t.value,c=s.value,l={resultImage:z,imageMatrix:h,crosses:e,sizeSelect:i,imageSelect:c,time:a};n.disabled=!1,localStorage.setItem("saveGame",JSON.stringify(l)),localStorage.setItem("continue",JSON.stringify(!1))}function E(){const[a,e]=[document.querySelectorAll(".hint__top"),document.querySelectorAll(".hint__left")];a.forEach(n=>{const t=n;t.innerHTML=""}),e.forEach(n=>{const t=n;t.innerHTML=""})}function re(){return new Promise(a=>{setTimeout(()=>{a()})})}const P=new Event("change");async function de(a){const e=JSON.parse(localStorage.getItem("saveGame"));function n(t){const s=a;s.time=t.time,s.second=t.second,s.minute=t.minute,s.hour=t.hour,s.span.innerHTML=t.time}try{const{time:t,sizeSelect:s,imageSelect:o,crosses:i}=e,[c,l]=[document.querySelector(".main__options-select"),document.querySelector(".reset__btn")];c.value=s,c.dispatchEvent(P),await re(),E();const r=document.querySelector(".image__section"),d=document.querySelectorAll(".column"),{imageMatrix:g}=e;r.value=o,r.dispatchEvent(P);let m=0;l.disabled=!0,d.forEach((u,f)=>{const p=u;p.innerHTML="",p.classList.remove("black","cross","cross_solution"),setTimeout(()=>{g[f]===0&&p.classList.remove("black","cross","cross_solution"),g[f]===1&&(p.classList.remove("black","cross","cross_solution"),p.classList.add("black")),i[f]===1&&(p.classList.remove("black","cross","cross_solution"),p.classList.add("cross"),p.innerHTML=`
            <svg viewBox="0 0 25 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-469.000000, -1041.000000)" fill="#000000">
                  <path d="M487.148,1053.48 L492.813,1047.82 C494.376,1046.26 494.376,1043.72 492.813,1042.16 C491.248,1040.59 488.712,1040.59 487.148,1042.16 L481.484,1047.82 L475.82,1042.16 C474.257,1040.59 471.721,1040.59 470.156,1042.16 C468.593,1043.72 468.593,1046.26 470.156,1047.82 L475.82,1053.48 L470.156,1059.15 C468.593,1060.71 468.593,1063.25 470.156,1064.81 C471.721,1066.38 474.257,1066.38 475.82,1064.81 L481.484,1059.15 L487.148,1064.81 C488.712,1066.38 491.248,1066.38 492.813,1064.81 C494.376,1063.25 494.376,1060.71 492.813,1059.15 L487.148,1053.48" id="cross" sketch:type="MSShapeGroup">
                  </path>
                </g>
              </g>
            </svg>
          `),f===d.length-1&&(l.disabled=!1)},m),m+=20}),ae(g),n(t)}catch(t){throw new Error(t.message)}}function me(){return new Promise(a=>{setTimeout(()=>{a()})})}const O=new Event("change");async function ue(){try{const[a,e]=[document.querySelector(".main__options-select"),document.querySelectorAll(".option__size")],n=Math.floor(Math.random()*e.length);a.value=e[n].value,a.dispatchEvent(O),await me(),E();const[t,s]=[document.querySelector(".image__section"),document.querySelectorAll(".option__image")],o=Math.floor(Math.random()*e.length);t.value=s[o].value,t.dispatchEvent(O)}catch(a){throw new Error(a.message)}}function he(a){const[e,n,t,s,o]=[document.querySelector(".main__options-select"),document.querySelector(".image__section"),document.querySelectorAll(".column"),document.querySelector(".main__section-playground"),document.querySelector(".reset__btn")];s.classList.add("block__events");const i=n.value,c=e.value,r=N.images[c].find(g=>g.name===i).pixels.flat();let d=0;o.disabled=!0,t.forEach((g,m)=>{const u=g;a.pause(),a.restart(),u.innerHTML="",u.classList.remove("black","cross","cross_solution"),setTimeout(()=>{r[m]===0?(u.classList.remove("black","cross","cross_solution"),u.classList.add("cross_solution"),u.innerHTML=`
        <svg viewBox="0 0 25 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
            <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-469.000000, -1041.000000)" fill="#000000">
              <path d="M487.148,1053.48 L492.813,1047.82 C494.376,1046.26 494.376,1043.72 492.813,1042.16 C491.248,1040.59 488.712,1040.59 487.148,1042.16 L481.484,1047.82 L475.82,1042.16 C474.257,1040.59 471.721,1040.59 470.156,1042.16 C468.593,1043.72 468.593,1046.26 470.156,1047.82 L475.82,1053.48 L470.156,1059.15 C468.593,1060.71 468.593,1063.25 470.156,1064.81 C471.721,1066.38 474.257,1066.38 475.82,1064.81 L481.484,1059.15 L487.148,1064.81 C488.712,1066.38 491.248,1066.38 492.813,1064.81 C494.376,1063.25 494.376,1060.71 492.813,1059.15 L487.148,1053.48" id="cross" sketch:type="MSShapeGroup">
              </path>
            </g>
          </g>
        </svg>
      `):r[m]===1&&(u.classList.remove("black","cross","cross_solution"),u.classList.add("black")),m===t.length-1&&(o.disabled=!1)},d),d+=20})}function ge(a,e){const n=a,[t,s,o,i,c,l,r]=[document.createElement("div"),document.createElement("button"),document.createElement("button"),document.createElement("button"),document.createElement("button"),document.createElement("button"),document.createElement("button")];[s,o,i,c,l,r].forEach(u=>{u.classList.add("btn"),t.appendChild(u)}),s.addEventListener("click",()=>$(e)),o.addEventListener("click",()=>le(e)),i.addEventListener("click",()=>de(e)),c.addEventListener("click",ie),l.addEventListener("click",()=>he(e)),r.addEventListener("click",ue),a.appendChild(t),n.className="main__section-buttons",t.className="main__block-buttons",s.classList.add("reset__btn"),i.classList.add("continue__btn"),i.classList.add("reset__btn"),c.classList.add("result__btn"),s.textContent="Reset",o.textContent="Save",i.textContent="Continue",c.textContent="Results",l.textContent="Solution",r.textContent="Random Game";const g=JSON.parse(localStorage.getItem("saveGame")),m=JSON.parse(localStorage.getItem("results"));i.disabled=g===null,c.disabled=m===null}function F(){const[a,e,n,t]=[document.querySelectorAll(".hint"),document.querySelector(".zero"),document.querySelector(".main__options-select"),document.querySelector(".image__section")],s=JSON.parse(localStorage.getItem("darkmode"));a.forEach(o=>{o.classList.contains("darkmode__hint")?o.classList.remove("darkmode__hint"):o.classList.add("darkmode__hint")}),e.classList.contains("darkmode__hint")?e.classList.remove("darkmode__hint"):e.classList.add("darkmode__hint"),n.classList.contains("darkmode__size")?s!==!0&&n.classList.remove("darkmode__size"):n.classList.add("darkmode__size"),t.classList.contains("darkmode__image")?t.classList.remove("darkmode__image"):t.classList.add("darkmode__image")}class pe{constructor(e,n=5){this.time=e,this.ground=new W(n,e),this.value=5,this.size=this.value,this.arrayPictures=N.images,this.matrixPicture=this.arrayPictures[this.size][0].pixels,[this.section,this.sectionButton,this.sizeControl,this.imageSection,this.container]=[document.createElement("section"),document.createElement("section"),document.createElement("select"),document.createElement("select"),document.createElement("div")],this.initGroundSize(),this.initButtonsSection(this.time),this.initImageSelection(this.value),this.initGameOnStartAsync()}initGroundSize(){const[e,n,t]=[document.createElement("option"),document.createElement("option"),document.createElement("option")];this.section.appendChild(this.container),this.container.appendChild(this.sizeControl),this.sizeControl.appendChild(e),this.sizeControl.appendChild(n),this.sizeControl.appendChild(t),this.sizeControl.className="main__options-select",this.container.className="options__container",this.section.className="select__ground-container",t.className="option__size",n.className="option__size",e.className="option__size",e.setAttribute("value","5"),n.setAttribute("value","10"),t.setAttribute("value","15"),e.textContent="5x5",n.textContent="10x10",t.textContent="15x15",this.sizeControl.value=this.value,this.sizeControl.addEventListener("change",()=>{this.size=+this.sizeControl.value,this.initImageSelection(this.size),this.ground.updatePlayground(this.size),this.initGameOnStartAsync(),JSON.parse(localStorage.getItem("darkmode"))===!0&&F(),this.handleChanged(),E()})}initImageSelection(e){this.arrayPictures=N.images[e],this.imageSection.innerHTML="",this.imageSection.className="image__section",this.container.appendChild(this.imageSection);const n=this.imageSection.cloneNode(!0);this.container.replaceChild(n,this.imageSection),this.imageSection=n,this.imageSection.removeEventListener("change",()=>this.handleChanged()),this.imageSection.addEventListener("change",()=>this.handleChanged()),this.arrayPictures.forEach(t=>{const s=document.createElement("option");this.imageSection.appendChild(s),s.className="option__image",s.textContent=t.name,s.setAttribute("value",`${t.name}`)})}initGameOnStartAsync(){(async()=>{try{await this.section.appendChild(this.ground.getElement()),H(this.matrixPicture),this.initGameOnStart()}catch(n){throw new Error(`Ошибка в АСИНХРОННОМ генерировании подсказок(${n})`)}})()}handleChanged(){const{value:e}=this.imageSection,t=this.arrayPictures.find(s=>s.name===e).pixels;this.matrixPicture=t,H(this.matrixPicture),$(this.time),E(),D(this.matrixPicture)}initGameOnStart(){const e=this.arrayPictures[0].pixels;ce(e,this.time)}initButtonsSection(e){ge(this.sectionButton,e)}getElementsButton(){return this.sectionButton}getMatrixPicture(){return this.matrixPicture}getElement(){return this.section}getValue(){return this.value}}const fe="/mitsuhitomeow-JSFE2023Q4/nonograms/svg/darkmodeSun.svg",Le="/mitsuhitomeow-JSFE2023Q4/nonograms/svg/darkmodeMoon.svg";function x(){const[a,e,n,t,s,o]=[document.querySelector(".header__title"),document.querySelector(".footer__title"),document.querySelector(".header__darkmode_btn"),document.querySelector(".sound__btn"),document.querySelectorAll(".modal-content"),document.querySelectorAll(".btn")];document.body.classList.toggle("darkmode__background"),a.classList.toggle("darkmode__title"),e.classList.toggle("darkmode__title"),n.classList.toggle("darkmode__active"),t.classList.toggle("darkmode__sound"),s.forEach(i=>i.classList.toggle("darkmode__modal")),o.forEach(i=>i.classList.toggle("darkmode__buttons")),F()}const B=[{name:"Sun",image:fe},{name:"Moon",image:Le}];function _e(a){let e=0;const[n,t]=[document.createElement("div"),document.createElement("img")];a.append(n),n.append(t),n.className="header__darkmode_btn",t.className=`header__image_${B[0].name.toLowerCase()} darkmode_image`;const s=l=>{const{name:r,image:d}=B[l];t.setAttribute("src",d),t.setAttribute("alt",r)},o=l=>{l===1?localStorage.setItem("darkmode",!0):localStorage.setItem("darkmode",!1)},i=()=>{e===0?e+=1:e-=1,t.innerHTML="",s(e),o(e)};s(e);const c=JSON.parse(localStorage.getItem("darkmode"));c===null&&localStorage.setItem("darkmode",!1),document.addEventListener("DOMContentLoaded",()=>{n.removeEventListener("click",()=>{i(),x()}),n.addEventListener("click",()=>{i(),x()}),c===!0&&(i(),x())})}const I=JSON.parse(localStorage.getItem("darkmode"));let y=I===null||I===!1?"#2b2b2b":"#fff";const b=[{class:"sound__on",imageHTML:`
      <svg width="30" height="30" viewBox="-20 0 190 190" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M109.235 130.989C120.797 116.713 120.581 93.5461 108.36 79.5901L115.325 73.1741C130.587 90.6141 130.815 119.585 116.293 137.363L109.235 130.989ZM102.794 125.173L95.998 119.036C102.017 111.331 101.821 99.0421 95.299 91.6211L102.005 85.4441C111.455 96.2201 111.66 114.094 102.794 125.173ZM55.783 85.2681L84.79 65.5911L85.367 146.142L55.092 125.659L55.783 85.2681ZM30.383 117.566C30.383 114.158 30.239 99.4881 30.239 92.4051C30.239 86.3011 33.304 84.2981 38.206 84.2981C42.759 84.2981 47.243 84.7521 47.243 84.7521L47.529 126.563C47.529 126.563 41.78 127.244 38.434 127.244C32.879 127.243 30.383 124.291 30.383 117.566Z" fill="${y}"/>
      </svg>
    `},{class:"sound__off",imageHTML:`
      <svg width="30" height="30" viewBox="-20 0 190 190" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M130.466 117.217L123.796 124.141L112.24 112.782L101.015 124.3L94.091 117.629L105.433 106.091L93.885 94.7381L100.428 87.9411L112.095 99.3121L123.492 87.7171L130.29 94.2601L118.901 105.945L130.466 117.217ZM55.973 85.2681L84.98 65.5911L85.557 146.142L55.283 125.659L55.973 85.2681ZM30.573 117.566C30.573 114.158 30.429 99.4881 30.429 92.4051C30.429 86.3011 33.495 84.2981 38.396 84.2981C42.948 84.2981 47.433 84.7521 47.433 84.7521L47.719 126.563C47.719 126.563 41.97 127.244 38.624 127.244C33.069 127.243 30.573 124.291 30.573 117.566Z" fill="${y}"/>
      </svg>
    `}],ve=a=>{y=a===1?"#2b2b2b":"#fff"};function Se(a){let e=1,n=I===!1?1:0;const t=document.createElement("div");t.className="sound__btn";const s=()=>{t.innerHTML=b[e].imageHTML,localStorage.setItem("sound",JSON.stringify(!1)),a.append(t)},o=(l,r)=>{ve(l);let{imageHTML:d}=b[r];r===0?d=`
        <svg width="30" height="30" viewBox="-20 0 190 190" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M109.235 130.989C120.797 116.713 120.581 93.5461 108.36 79.5901L115.325 73.1741C130.587 90.6141 130.815 119.585 116.293 137.363L109.235 130.989ZM102.794 125.173L95.998 119.036C102.017 111.331 101.821 99.0421 95.299 91.6211L102.005 85.4441C111.455 96.2201 111.66 114.094 102.794 125.173ZM55.783 85.2681L84.79 65.5911L85.367 146.142L55.092 125.659L55.783 85.2681ZM30.383 117.566C30.383 114.158 30.239 99.4881 30.239 92.4051C30.239 86.3011 33.304 84.2981 38.206 84.2981C42.759 84.2981 47.243 84.7521 47.243 84.7521L47.529 126.563C47.529 126.563 41.78 127.244 38.434 127.244C32.879 127.243 30.383 124.291 30.383 117.566Z" fill="${y}"/>
        </svg>
      `:d=`
        <svg width="30" height="30" viewBox="-20 0 190 190" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M130.466 117.217L123.796 124.141L112.24 112.782L101.015 124.3L94.091 117.629L105.433 106.091L93.885 94.7381L100.428 87.9411L112.095 99.3121L123.492 87.7171L130.29 94.2601L118.901 105.945L130.466 117.217ZM55.973 85.2681L84.98 65.5911L85.557 146.142L55.283 125.659L55.973 85.2681ZM30.573 117.566C30.573 114.158 30.429 99.4881 30.429 92.4051C30.429 86.3011 33.495 84.2981 38.396 84.2981C42.948 84.2981 47.433 84.7521 47.433 84.7521L47.719 126.563C47.719 126.563 41.97 127.244 38.624 127.244C33.069 127.243 30.573 124.291 30.573 117.566Z" fill="${y}"/>
        </svg>
      `,t.innerHTML=d},i=()=>{n===0?n+=1:n-=1,t.innerHTML="",o(n,e)},c=()=>{e===0?e+=1:e-=1,t.innerHTML="",t.classList.toggle(b[0].class),JSON.parse(localStorage.getItem("sound"))===!1?localStorage.setItem("sound",JSON.stringify(!0)):localStorage.setItem("sound",JSON.stringify(!1)),o(n,e)};s(),t.removeEventListener("click",c),t.addEventListener("click",c),document.addEventListener("DOMContentLoaded",()=>{const l=document.querySelector(".header__darkmode_btn");l.removeEventListener("click",i),l.addEventListener("click",i)})}class Ce{constructor(){this.header=null,this.footer=null,this.main=null,this.components=[],this.initHeader(),this.initMain(),this.initFooter()}initHeader(){this.header=document.createElement("header");const e=document.createElement("div"),n=document.createElement("h1");n.textContent="Nonograms",this.header.className="header",e.className="header__container container",n.className="header__title title",this.header.append(e),e.append(n),this.components.push(this.header),_e(e),Se(e)}initMain(){this.main=document.createElement("main");const[e,n]=[document.createElement("div"),document.createElement("div")],t=new L,s=new pe(t);this.main.className="main",e.className="main__container container",this.main.append(e),e.append(s.getElementsButton()),e.append(s.getElement()),e.append(n),this.components.push(this.main)}initFooter(){this.footer=document.createElement("footer");const e=document.createElement("div"),n=document.createElement("h1");n.textContent="© RS School Production 2024",this.footer.className="footer",e.className="footer__container container",n.className="footer__title title",this.footer.append(e),e.append(n),this.components.push(this.footer)}getElement(){return this.components.forEach(e=>{document.body.append(e)})}}const ke=new Ce;ke.getElement();
//# sourceMappingURL=index-hJWjo-JA.js.map
