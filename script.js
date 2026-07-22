const intro = document.getElementById("intro");
const invite = document.getElementById("invite");

const prev = document.getElementById("prev");
const next = document.getElementById("next");

const pages = document.querySelectorAll(".page");

const lines = document.querySelectorAll("#constellation line");
const stars = document.querySelectorAll("#constellation circle");

let page = 0;

/* ---------- CREATE STARS ---------- */

const starBox = document.getElementById("stars");

for(let i=0;i<180;i++){

const star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"%";

star.style.top=Math.random()*100+"%";

star.style.animationDelay=Math.random()*4+"s";

star.style.animationDuration=(2+Math.random()*3)+"s";

starBox.appendChild(star);

}

/* ---------- INTRO ---------- */

setTimeout(()=>{

intro.querySelector("h1").innerHTML="Look Up";

},1000);

setTimeout(()=>{

intro.querySelector("p").innerHTML="Every star tells a story...";

},3000);

setTimeout(()=>{

lines.forEach(line=>{

line.style.animationPlayState="running";

});

stars.forEach(star=>{

star.style.animationPlayState="running";

});

},4500);

setTimeout(()=>{

intro.querySelector("h1").innerHTML="FAREWELL 2026";

intro.querySelector("p").innerHTML="A journey written among the stars.";

},7000);

setTimeout(()=>{

intro.style.opacity="0";

setTimeout(()=>{

intro.style.display="none";

invite.style.display="flex";

invite.style.opacity="0";

setTimeout(()=>{

invite.style.opacity="1";

invite.style.transition="1s";

},100);

},1000);

},9000);
/* ---------- NEXT PAGE ---------- */

next.addEventListener("click",()=>{

if(page < pages.length-1){

pages[page].style.transform="translateX(-80px)";
pages[page].style.opacity="0";

setTimeout(()=>{

pages[page].classList.remove("active");

page++;

pages[page].classList.add("active");

},300);

}

});

/* ---------- PREVIOUS PAGE ---------- */

prev.addEventListener("click",()=>{

if(page>0){

pages[page].classList.remove("active");

page--;

pages[page].classList.add("active");

}

});

/* ---------- KEYBOARD ---------- */

document.addEventListener("keydown",(e)=>{

if(invite.style.display==="flex"){

if(e.key==="ArrowRight"){

next.click();

}

if(e.key==="ArrowLeft"){

prev.click();

}

}

});

/* ---------- CARD CLICK ---------- */

const card=document.querySelector(".card");

card.addEventListener("click",(e)=>{

if(e.target.tagName==="BUTTON") return;

if(page < pages.length-1){

pages[page].classList.remove("active");

page++;

pages[page].classList.add("active");

}

});

/* ---------- FINISH ---------- */

pages[pages.length-1].insertAdjacentHTML(

"beforeend",

`

<div style="margin-top:40px;
font-size:15px;
letter-spacing:3px;
color:#9b7b00;
text-align:center;">

✦ Physics Department ✦

</div>

`

);
/* ---------- FLOATING STARS ---------- */

setInterval(()=>{

const stars=document.querySelectorAll(".star");

stars.forEach(star=>{

let y=parseFloat(star.dataset.y||0);

y+=0.15;

if(y>8)y=0;

star.dataset.y=y;

star.style.transform=`translateY(${y}px)`;

});

},50);