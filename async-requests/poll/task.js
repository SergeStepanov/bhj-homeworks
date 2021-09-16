'use strict';

const xhr = new XMLHttpRequest(); // запрос
const pollTitle = document.querySelector('.poll__title');
const pollAnswers = document.querySelector('.poll__answers');

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        const parseResponse = JSON.parse(xhr.responseText);
        const { title, answers } = parseResponse.data;

        pollTitle.innerHTML = title;

        // console.log(answers);
        for (let i = 0; i < answers.length; i++) {
            const element = answers[i];

            pollAnswers.insertAdjacentHTML(
                'beforeend',
                `<button class="poll__answer">${element}</button>`
            );
            const pollAnswer = document.querySelectorAll('.poll__answer');
            for (const iterator of pollAnswer) {
                iterator.addEventListener('click', onClick);
            }
        }
    }
};

function onClick(e) {
    if (e.target) {
        alert(`Спасибо, ваш голос засчитан!`);
    }
}

xhr.send();
