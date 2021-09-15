'use strict';

const hints = document.querySelectorAll('.has-tooltip');
const tooltipDivNew = document.createElement('div');
tooltipDivNew.classList.add('tooltip');

for (const item of hints) {
    item.addEventListener('click', funcHint);
}
let count = null;

function funcHint(e) {
    e.preventDefault();
    const hint = this.getAttribute('title');

    this.insertAdjacentElement('afterEnd', tooltipDivNew);

    const tooltipDiv = document.querySelector('.tooltip');
    tooltipDiv.textContent = hint;

    const { left, bottom } = this.getBoundingClientRect();
    tooltipDiv.style.left = left + 'px';
    tooltipDiv.style.top = bottom + 'px';

    if (count === hint) {
        count = null;

        tooltipDivNew.remove();

        count.remove();

        // console.log(`${count} ---1`);
    } else if (e.target) {
        tooltipDiv.classList.add('tooltip_active');
        count = this.nextElementSibling.textContent;
        // console.log(count);
    }
}
