'use strict';

window.onload = () => {
    const subscribeModal = document.querySelector('#subscribe-modal');
    const modalClose = document.querySelector('.modal__close');

    modalClose.onclick = function (e) {
        subscribeModal.classList.remove('modal_active');
        setCookie('modalActive', 'false');
    };

    if (getCookie('modalActive') === null) {
        subscribeModal.classList.add('modal_active');
    }

    function setCookie(name, value) {
        document.cookie = name + '=' + encodeURIComponent(value);
    }

    function getCookie(name) {
        const cookies = document.cookie.split('; ');
        const result = cookies.find((str) => str.startsWith(name + '='));
        return result
            ? decodeURIComponent(result.substr(name.length + 1))
            : null;
    }
};
