// Smooth Active Navigation

const links = document.querySelectorAll("nav a");

links.forEach(link => {

link.addEventListener("click", function(e){

e.preventDefault();

const target = document.querySelector(this.getAttribute("href"));

target.scrollIntoView({
behavior:"smooth"
});

});

});

// Header Shadow

window.addEventListener("scroll", ()=>{

const header = document.querySelector("header");

if(window.scrollY > 50){

header.style.boxShadow = "0 10px 20px rgba(0,0,0,.25)";
header.style.background = "#3b2417";

}else{

header.style.boxShadow = "none";
header.style.background = "#4e342e";

}

});

// Fade In Animation

const cards = document.querySelectorAll(".card,.feature-box,.about,.contact");

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";
card.style.transform="translateY(60px)";
card.style.transition="1s";

observer.observe(card);

});

// Button Ripple Effect

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.05)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

});

// Gallery Image Hover

document.querySelectorAll(".gallery img").forEach(img=>{

img.addEventListener("mouseenter",()=>{

img.style.filter="brightness(110%)";

});

img.addEventListener("