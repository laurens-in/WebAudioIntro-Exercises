(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const v="/assets/kick-809605ce.wav",b="/assets/snare-ffbb0e87.wav",P="/assets/closedHat-965ca857.wav",L="/assets/ride-0bc1f9ba.wav";AudioContext.prototype.createClock=function(o,e,s=.1,n=.1){let t=0,r=0,a=10**4,p=.01;const m=l=>e=l(e);n=n||s/2;const f=()=>{const l=this.currentTime,g=l+s+n;for(r===0&&(r=l+p);r<g;)r=Math.round(r*a)/a,r>=l&&o(r,e,t),r+=e,t++};let d;const y=()=>{f(),d=setInterval(f,s*1e3)},h=()=>clearInterval(d);return{setDuration:m,start:y,stop:()=>{t=0,r=0,h()},pause:()=>h(),duration:e}};const u=new AudioContext;document.addEventListener("click",()=>u.resume());const k=document.querySelector("#app"),c={length:11,kick:[1,0,0,0,0,0,0,0,0,0,0],snare:[0,0,0,1,0,0,0,0,0,0,0],ride:[0,0,0,0,0,0,1,0,0,0,0],hihat:[1,0,1,0,1,0,1,0,1,0,1]},w=[v,b,P,L],E=w.map(o=>fetch(o).then(e=>e.arrayBuffer()).then(e=>u.decodeAudioData(e)));Promise.all(E).then(o=>{o.forEach((e,s)=>{const n=document.createElement("button");n.innerHTML="Play "+s,n.addEventListener("click",()=>{i(e)}),k.appendChild(n),document.addEventListener("keydown",t=>{t.key===(s+1).toString()&&i(e)})}),u.createClock((e,s,n)=>{c.kick[n%c.length]===1&&i(o[0]),c.snare[n%c.length]===1&&i(o[1]),c.hihat[n%c.length]===1&&i(o[2]),c.ride[n%c.length]===1&&i(o[3])},.25).start()});const i=o=>{const e=u.createBufferSource();e.buffer=o,e.connect(u.destination),e.start(u.currentTime)};
