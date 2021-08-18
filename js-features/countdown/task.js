'use strict';

let idTimer = document.getElementById('timer');

const intervalTimer = setInterval(function () {
    if (idTimer.textContent <= 0) {
        clearInterval(intervalTimer);
        alert('Вы победили в конкурсе!');
    } else {
        idTimer.textContent--;
    }
}, 1000);
