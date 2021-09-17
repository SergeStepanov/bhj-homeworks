'usse strict';

const editor = document.querySelector('#editor');

editor.addEventListener('input', function () {
    localStorage.text = editor.value;
});

window.onload = function () {
    editor.value = localStorage.text;
};
