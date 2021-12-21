/* sliderFunction */
const SLIDER = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider-Section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const BTNR = document.querySelector("#btnR");
const BTNL = document.querySelector("#btnL");

SLIDER.insertAdjacentElement('afterbegin', sliderSectionLast);
/* functionNext */
function Next(){
    let sliderSectionFirst = document.querySelectorAll(".slider-Section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        SLIDER.style.transition = "none";
        SLIDER.insertAdjacentElement('beforeend', sliderSectionFirst);
        SLIDER.style.marginLeft = "-100%";
    }, 500);
}
/* functionPrev */
function Prev(){
    let sliderSection = document.querySelectorAll(".slider-Section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        SLIDER.style.transition = "none";
        SLIDER.insertAdjacentElement('afterbegin', sliderSectionLast);
        SLIDER.style.marginLeft = "-100%";
    }, 500);
}
/* buttons call the function Next */
BTNR.addEventListener('click', function(){
    Next();
});
BTNL.addEventListener('click', function(){
    Prev();
});

 /* autoSlider */ 
setInterval(function(){
    Next();
}, 4000)
    

