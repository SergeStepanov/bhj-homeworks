'use strict';

const loaderImg = document.querySelector('.loader'); // картинка загрузки
const xhr = new XMLHttpRequest(); // запрос
const itemDiv = document.querySelector('#items'); // куда грузить

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/');

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        loaderImg.classList.remove('loader_active');

        const parseResponseText = JSON.parse(xhr.responseText);
        // console.log(parseResponseText);

        const valuteObj = parseResponseText.response.Valute;
        // console.log(valuteObj);

        for (const keyValute in valuteObj) {
            const elem = valuteObj[keyValute];
            // console.log(elem);

            itemDiv.insertAdjacentHTML(
                'beforeEnd',
                `<div class="item"><div class="item__code">${obj(
                    elem,
                    'CharCode'
                )}</div><div class="item__value">${obj(
                    elem,
                    'Value'
                )}</div><div class="item__currency">руб.</div></div>`
            );
        }
    }
};

function obj(obj, key) {
    if (obj[key]) {
        return obj[key];
    } else {
        return obj(obj[key], key);
    }
}

xhr.send();
