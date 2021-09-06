'use strict';

function rotatorInterval() {
    const elem = document.querySelector('.rotator__case_active');
    const parentElem = elem.closest('.rotator');

    if (elem === parentElem.lastElementChild) {
        parentElem.firstElementChild.classList.add('rotator__case_active');
        parentElem.lastElementChild.classList.remove('rotator__case_active');
    } else if (elem) {
        elem.classList.remove('rotator__case_active');
        elem.nextElementSibling.classList.add('rotator__case_active');
    }
}

const interval = setInterval(rotatorInterval, 1000);
