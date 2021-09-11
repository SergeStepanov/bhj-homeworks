'use strict';

const chatActive = document.querySelector('.chat-widget');
const chatInput = document.querySelector('.chat-widget__input');
const messages = document.querySelector('.chat-widget__messages');

chatActive.addEventListener('click', openChat);

function openChat(event) {
    event.preventDefault();

    chatActive.classList.add('chat-widget_active');
}

chatInput.addEventListener('keyup', sendMessage);

function sendMessage(e) {
    // console.log(e.key, e.code);

    if (e.key === 'Enter' && chatInput.value !== '') {
        messages.innerHTML += `
        <div class="message message_client">
            <div class="message__time">${nowTime()}</div>
            <div class="message__text">${chatInput.value}</div>
        </div>
        `;

        messages.innerHTML += `
        <div class="message">
            <div class="message__time">${nowTime()}</div>
            <div class="message__text">${botMessage()}</div>
        </div>
        `;

        chatInput.value = '';
    }
}

function botMessage() {
    const messagesArr = [
        'Приювет!!!',
        'До свидания',
        'Добро пожаловать в чат!',
        'Да.',
        'Нет.',
        'и т.д.',
    ];

    let rand = Math.floor(Math.random() * messagesArr.length);

    return messagesArr[rand];
}

function nowTime() {
    const nowDate = new Date();

    const nowHours =
        nowDate.getHours() < 10
            ? `0${nowDate.getHours()}`
            : `${nowDate.getHours()}`;

    const nowMinutes =
        nowDate.getMinutes() < 10
            ? `0${nowDate.getMinutes()}`
            : `${nowDate.getMinutes()}`;

    const nowSeconds =
        nowDate.getSeconds() < 10
            ? `0${nowDate.getSeconds()}`
            : `${nowDate.getSeconds()}`;

    return `${nowHours}:${nowMinutes}:${nowSeconds}`;
}
