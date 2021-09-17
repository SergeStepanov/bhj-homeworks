'use strict';

const formSend = document.querySelector('#form');
const progress = document.querySelector('#progress');

formSend.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(formSend);
    const request = new XMLHttpRequest();

    request.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');

    request.upload.onloadstart = function () {
        progress.value = '0.2';
    };

    request.upload.onprogress = function () {
        progress.value = '0.52';
    };
    request.upload.onload = function () {
        progress.value = '0.75';
    };

    request.upload.onloadend = function () {
        progress.value = '1.0';
    };

    request.send(formSend);
});
