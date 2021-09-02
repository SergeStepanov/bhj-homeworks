'use strict';

const left = document.querySelector('.slider__arrow_prev');
const rigth = document.querySelector('.slider__arrow_next');
const sliderItems = Array.from(document.querySelectorAll('.slider__item'));

left.onclick = sliderLeft;

rigth.onclick = sliderRigth;

function sliderRigth() {
    let indSlide = sliderItems.findIndex(
        (ind) => ind === document.querySelector('.slider__item_active')
    );
    console.log(`index = ${indSlide}`);

    if (indSlide + 1 >= sliderItems.length) {
        sliderItems[indSlide].classList.remove('slider__item_active');
        sliderItems[0].classList.add('slider__item_active');
    } else {
        sliderItems[indSlide].classList.remove('slider__item_active');
        sliderItems[indSlide + 1].classList.add('slider__item_active');
    }
}

function sliderLeft() {
    let indSlide = sliderItems.findIndex(
        (ind) => ind === document.querySelector('.slider__item_active')
    );
    console.log(`index = ${indSlide}`);

    if (indSlide <= 0) {
        sliderItems[indSlide].classList.remove('slider__item_active');
        sliderItems[sliderItems.length - 1].classList.add(
            'slider__item_active'
        );
    } else {
        sliderItems[indSlide].classList.remove('slider__item_active');
        sliderItems[indSlide - 1].classList.add('slider__item_active');
    }
}
