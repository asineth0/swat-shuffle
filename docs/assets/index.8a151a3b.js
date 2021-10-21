const c=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}};c();const u=document.querySelector("#start"),a=document.querySelector("#words"),m=document.querySelector("#config"),n=document.querySelector("#display");a.value=`le baladeur
une bande dessin\xE9e (une BD)
chanter
le chocolat
un dessin
dessiner
dormir
l'\xE9cole
\xE9couter
\xE9couter de la musique
envoyer un e-mail
\xE9tudier
lire
les frites
la glace
un journal
un magazine
manger
les math\xE9matiques/les maths
la musique classique
la musique moderne
parler
anglais
fran\xE7ais
regarder
la radio
regarder la t\xE9l\xE9vision
un roman
un texto/ un SMS
surfer sur Internet
t\xE9l\xE9phoner
t\xE9l\xE9phoner \xE0 des amis
travailler
les vacances
une voiture
la voiture de sport
Tu aimes...?
aimer
Qu'est-ce que tu aimes faire?
Oui, j'aime
j'adore
Non, je d\xE9teste
je n'aime pas
un crayon de couleur
un crayon
aimer
faire
j'aime bien
j'aime mieux/je pr\xE9f\xE8re`;const d=()=>{m.classList.add("hidden"),n.classList.remove("hidden");for(let e=n.children.length-1;e>=0;e--)n.children[e].remove();const t=a.value.trim().split(`
`).map(e=>e.trim()).filter(e=>e);for(let e=t.length-1;e>0;e--){const o=Math.floor(Math.random()*(e+1));[t[e],t[o]]=[t[o],t[e]]}for(const e of t){const o=document.createElement("div");o.classList.add("flex","items-center","justify-center","bg-gray-900","border","border-gray-700","rounded-md");const i=document.createElement("p");i.innerText=e,i.classList.add("text-2xl"),o.appendChild(i),n.appendChild(o)}if(n.classList.forEach(e=>{e.startsWith("grid-cols")&&n.classList.remove(e)}),!(t.length<2)){if(t.length<6)return n.classList.add("grid-cols-2");if(t.length<10)return n.classList.add("grid-cols-3");if(t.length<20)return n.classList.add("grid-cols-4");n.classList.add("grid-cols-5")}};u.addEventListener("click",()=>{d(),addEventListener("keypress",t=>{console.log(t.key),t.key===" "&&d()})});
