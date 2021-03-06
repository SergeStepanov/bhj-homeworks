'use strict';

const btnClick = document.querySelector('.dropdown__value'); //div js
const btnUl = document.querySelector('.dropdown__list'); //ul
const dropdownItems = Array.from(document.querySelectorAll('.dropdown__item')); //li

btnClick.addEventListener('click', () => {
    btnUl.classList.add('dropdown__list_active');
}); //ok

dropdownItems.forEach((item) => {
    item.addEventListener('click', onClick);
});

function onClick(event) {
    event.preventDefault();

    btnClick.textContent = this.textContent;

    btnUl.classList.remove('dropdown__list_active');
}
