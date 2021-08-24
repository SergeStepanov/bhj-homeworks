'use strict';

const modalMain = document.querySelector('#modal_main');
const modalSuccess = document.querySelector('#modal_success');
const modalClose = document.querySelectorAll('.modal__close');
const btnShowSuccess = document.querySelector('.show-success');

modalMain.classList.add('modal_active');

for (const click of modalClose) {
    click.onclick = function () {
        modalMain.classList.remove('modal_active');
        modalSuccess.classList.remove('modal_active');
    };
}

btnShowSuccess.onclick = function () {
    modalMain.classList.remove('modal_active');
    modalSuccess.classList.add('modal_active');
};
