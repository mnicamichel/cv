/* .btn-left, .btn-right */
var btnLeft = document.querySelector(".btn-left");
var btnRight = document.querySelector(".btn-right");
var slider = document.querySelector("#slider");
var sliderSection = document.querySelectorAll(".slider-section");
const root = document.documentElement;

var sliderSectionLength = sliderSection.length;

var operacion = 0;
var counter = 0;
var widthImg = 100 / sliderSectionLength;

function setWidth(){
    var carruselesWidth = 100 * sliderSectionLength;
    slider.style.width = `${carruselesWidth}%`; 
    
    root.style.setProperty("--var-slider-section",`100%/${sliderSectionLength}`); 
}

function toRight(){
    if(counter >= sliderSectionLength -1){
        operacion = 0;
        counter = 0;

        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none";
    }
    else{
        counter++;
        operacion = operacion + widthImg;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "all ease .6s";
    }
}

function toLeft(){
    counter--;
    if(counter < 0){
        counter = sliderSectionLength - 1;
        operacion = widthImg * (sliderSectionLength - 1);

        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none";
    }
    else{
        operacion = operacion - widthImg;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "all ease .6s";
    }
}

setWidth();
btnRight.addEventListener("click", toRight);
btnLeft.addEventListener("click", toLeft);
setInterval(toRight, 4000);