import{_ as j,r as v,d as q,e as F,o as g,c as C,b as c,u as b,f as J,t as K,p as Q,a as X}from"./index-4a95d3bb.js";const Y=""+new URL("success-b79e3b70.mp3",import.meta.url).href,Z=""+new URL("fail-de2f2e09.mp3",import.meta.url).href;const $=l=>(Q("data-v-eac4107c"),l=l(),X(),l),ee={class:"snake"},te=$(()=>c("h1",null,"貪吃蛇大作戰",-1)),oe={key:0,class:"alert-container"},ne={class:"score"},ie={class:"canvas-container"},i=14,s=14,n=50,se={__name:"index",setup(l){const m=v(),p={};let r=v(!1),u=400,f=v(0),o=null,t={},a={},y=null;const I=()=>{o=m.value.getContext("2d")},k=(e=null)=>{e?(d(),S()):(O(),d(),S())},w=()=>{N(),B(),E(),P()},S=e=>{y=setInterval(()=>{L()},u)},L=e=>{w(),!T()&&(D(),W(),z(),R())},M=()=>{f.value+=1},R=()=>{a.position.x===t.position[0].x&&a.position.y===t.position[0].y&&(d(),H(),M(),U(),x("success"))},U=()=>{u-=30,h(),k(t)},T=()=>{const e={x:t.position[0].x+t.direction.x,y:t.position[0].y+t.direction.y};if(e.x<0||e.x>=s||e.y<0||e.y>=i)return h(),r.value=!0,x("fail"),setTimeout(()=>{r.value=!1},2e3),!0},B=()=>{o.fillStyle="wheat",o.fillRect(0,0,s*n,i*n)},E=()=>{o.strokeStyle="#8484843b",o.lineWidth=1;for(let e=0;e<=s;e+=1)o.beginPath(),o.moveTo(e*n,0),o.lineTo(e*n,i*n),o.stroke()},P=()=>{o.strokeStyle="#8484843b",o.lineWidth=1;for(let e=0;e<=i;e+=1)o.beginPath(),o.moveTo(0,e*n),o.lineTo(s*n,e*n),o.stroke()},W=()=>{o.fillStyle="blue";for(let e of t.position)o.fillRect(e.x*n,e.y*n,n,n)},z=()=>{o.beginPath(),o.fillStyle="red",o.arc(a.position.x*n+n/2,a.position.y*n+n/2,n/2,0,2*Math.PI),o.fill()},N=()=>{o.clearRect(0,0,s*n,i*n)},D=()=>{const e={x:t.position[0].x+t.direction.x,y:t.position[0].y+t.direction.y};t.position.unshift(e),t.position.pop()},H=()=>{t.position.push({x:t.position[t.position.length-1].x-t.direction.x,y:t.position[t.position.length-1].y-t.direction.y})},O=()=>{t={position:[{x:s/2,y:i/2},{x:s/2+1,y:i/2},{x:s/2+2,y:i/2}],size:1,direction:{x:0,y:-1}}},d=()=>{if(a={position:{x:Math.floor(Math.random()*s),y:Math.floor(Math.random()*i)}},t){for(let e of t.position)if(e.x===a.position.x&&e.y===a.position.y){d();return}}},V=()=>{u=400,f.value=0,r.value=!1},A=()=>{V(),k()},G=()=>{const e=document.createElement("audio");e.src=Y,p.success=e;const _=document.createElement("audio");_.src=Z,p.fail=_},x=e=>{p[e].play()};q(()=>{I(),w(),G(),document.addEventListener("keydown",e=>{e.key==="ArrowLeft"?t.direction={x:-1,y:0}:e.key==="ArrowRight"?t.direction={x:1,y:0}:e.key==="ArrowUp"?t.direction={x:0,y:-1}:e.key==="ArrowDown"?t.direction={x:0,y:1}:e.key==="Enter"&&A()})}),F(()=>{h()});const h=()=>{clearInterval(y),y=null};return(e,_)=>(g(),C("div",ee,[te,c("button",{onClick:x},"播放"),b(r)?(g(),C("div",oe,"撞牆了")):J("",!0),c("button",{onClick:A},"開始遊戲"),c("div",ne,[c("h1",null,K(b(f)),1)]),c("div",ie,[c("canvas",{class:"canvas",ref_key:"canvas",ref:m,width:"1000",height:"1000"},null,512)])]))}},ce=j(se,[["__scopeId","data-v-eac4107c"]]);export{ce as default};
