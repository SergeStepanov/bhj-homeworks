'use strict';

const hints = document.querySelectorAll('.has-tooltip');

for (const item of hints) {
    const tooltipDivNew = document.createElement('div');
    tooltipDivNew.classList.add('tooltip');

    item.insertAdjacentElement('afterEnd', tooltipDivNew);

    item.addEventListener('click', funcHint);
}

function funcHint(e) {
    e.preventDefault();
    const hint = this.getAttribute('title');
    const tooltipDiv = document.querySelector('.tooltip');
    tooltipDiv.textContent = hint;

    const { left, bottom } = this.getBoundingClientRect();
    tooltipDiv.style.left = left + 'px';
    tooltipDiv.style.top = bottom + 'px';

    if (e.target) {
        tooltipDiv.classList.toggle('tooltip_active');
        console.log(tooltipDiv);
    }
}
