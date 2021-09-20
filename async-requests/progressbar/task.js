'use strict';

const formSend = document.querySelector('#form');
const progress = document.querySelector('#progress');

formSend.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(formSend);
    const request = new XMLHttpRequest();

    request.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');

    request.upload.onprogress = function (event) {
        progress.value = event.loaded / event.total;
        // console.log(progress.value);
    };

    request.send(formData);
});
