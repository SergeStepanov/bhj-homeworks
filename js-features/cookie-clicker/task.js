'use strict';

const counter = document.getElementById('clicker__counter');
const imgClicker = document.getElementById('cookie');

imgClicker.onclick = function () {
    counter.textContent++;
    imgClicker.width === 200
        ? (imgClicker.width = 150)
        : (imgClicker.width = 200);
};
