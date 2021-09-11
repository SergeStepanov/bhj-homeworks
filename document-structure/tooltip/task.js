'use strict';

const hints = document.querySelectorAll('.has-tooltip');

for (const item of hints) {
    item.addEventListener('click', funcHint);
}

function funcHint(e) {
    e.preventDefault();
    const hint = this.getAttribute('title');
    const tooltipDiv = document.createElement(
        `<div class='tooltip tooltip_active' style='left: 0; top: 0'>\`${hint}\`</div>`
    );
    this.insertAdjacentElement(afterEnd, tooltipDiv);

    if (e.target) {
        console.log(hint);
    }
}
