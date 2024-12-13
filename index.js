// 1 Завдання
const slider = document.querySelector(".slider__input");
const image = document.querySelector(".slider__image");

slider.addEventListener("input", _.debounce((event) => {
    image.style.width = `${slider.value}px`;
    image.style.height = `${slider.value}px`;
}, 500));

// 2 Завдання
const sliderEl = document.querySelector(".slider__input");
const imageEl = document.querySelector(".slider__image");

sliderEl.addEventListener("input", _.debounce((e) => {
    imageEl.style.width = `${sliderEl.value}px`;
    imageEl.style.height = `${sliderEl.value}px`;
}, 500));
