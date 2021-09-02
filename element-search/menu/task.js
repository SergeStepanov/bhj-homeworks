'use strict';

const menuLink = document.querySelectorAll('.menu__link');

for (const click of menuLink) {
    click.onclick = function () {
        const openMenu = Array.from(document.querySelectorAll('ul.menu_sub'));

        for (let i = 0; i < openMenu.length; i++) {
            openMenu[i].classList.toggle('menu_active');
        }

        console.log(openMenu);
        return false;
    };
}
console.log(menuLink);
