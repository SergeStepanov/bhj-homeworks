'use strict';

const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab__content');

for (const tab of tabs) {
    tab.addEventListener('click', (e) => {
        e.preventDefault();
        tab.classList.toggle('tab_active');
    });
}
console.log(tabs, tabContents);
