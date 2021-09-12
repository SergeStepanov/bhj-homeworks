'use strict';

const hints = document.querySelectorAll('.has-tooltip');

for (const item of hints) {
    item.insertAdjacentHTML('afterEnd', "<div class='tooltip'></div>");

    item.addEventListener('click', funcHint);
}

function funcHint(e) {
    e.preventDefault();
    const hint = this.getAttribute('title');
    const tooltipDiv = document.querySelector('.tooltip');
    tooltipDiv.textContent = hint;

    if (e.target) {
        tooltipDiv.classList.toggle('tooltip_active');
        console.log(tooltipDiv);
    }
}
