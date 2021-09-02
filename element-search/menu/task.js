'use strict';
const menuLink = document.querySelectorAll('.menu__link');

for (const click of menuLink) {
    click.onclick = function () {
        const openMenu = document.querySelectorAll('ul.menu_sub');

        for (const elem of openMenu) {
            if (click.closest('li') === elem.closest('li')) {
                elem.classList.toggle('menu_active');
                return false;
            }
        }
    };
}
