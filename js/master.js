let upto = document.querySelector('.upto');

onscroll = function (){
if(scrollY >= 700){
    upto.classList.add("show");
} else{
    upto.classList.remove("show");
}
}
upto.onclick = function(){
scrollTo ({
    top: 0,
    behavior: "smooth",
})
}



const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.main-nav')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})

document.querySelectorAll('.nav-link').forEach(n => n.
addEventListener('click', () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))



let tabs = document.querySelectorAll('.tabs li');
let tabsArray = Array.from(tabs);
let divs = document.querySelectorAll(".contentli > div");
let divsArray = Array.from(divs);

tabsArray.forEach((ele) => {
    ele.addEventListener("click", function (e) {
        tabsArray.forEach((ele) => {
            ele.classList.remove("actiive");
        });
        e.currentTarget.classList.add("actiive");
        divsArray.forEach((div) => {
            div.style.display = "none";
        });
        document.querySelector(e.currentTarget.dataset.cont).style.display = "block";
    });
});



let nums = document.querySelectorAll(".nums .num");
let section = document.querySelector('.section6');
let started = false;

window.onscroll = function() {
    if (window.scrollY >= section.offsetTop) {
        if(!started) {
            nums.forEach((num) => startCount(num));
        }
        started = true;
    }
}

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count)
        }
    }, 2300 / goal);
}

startCount(document.querySelectorAll('.nums .num'))
