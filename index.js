// 1 Завдання
const slider = document.querySelector(".slider__input");
const image = document.querySelector(".slider__image");

slider.addEventListener("input", _.debounce((event) => {
    image.style.width = `${slider.value}px`;
    image.style.height = `${slider.value}px`;
}, 500));

const box = document.getElementById("box");

const moveBox = (e) => {
  box.style.left = `${e.pageX - 25}px`; 
  box.style.top = `${e.pageY - 25}px`; 
};

document.addEventListener("mousemove", _.throttle(moveBox, 50));

