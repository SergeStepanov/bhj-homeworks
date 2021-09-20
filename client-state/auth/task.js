'use strict';

const signinForm = document.querySelector('#signin__form');
const signin = document.querySelector('#signin');
const welcomeUser = document.querySelector('#welcome');
const userId = document.querySelector('#user_id');

signinForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(signinForm);
    const response = new XMLHttpRequest();

    response.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');

    response.onreadystatechange = function () {
        if (response.readyState === 4) {
            const parseResponse = JSON.parse(response.responseText);

            if (parseResponse.success === true) {
                localStorage.userId = parseResponse.user_id;
                userId.textContent = localStorage.userId;
                welcomeUser.classList.add('welcome_active');
                signin.classList.remove('signin_active');
            } else if (parseResponse.success === false) {
                alert('Неверный логин или пароль.');

                signinForm.reset();
            }
        }
        console.log(response.responseText);
    };

    response.send(formData);
});
