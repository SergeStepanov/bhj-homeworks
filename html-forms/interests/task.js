'use strict';

const inputsInterestValue = document.querySelectorAll('.interests_active');

for (const item of inputsInterestValue) {
    const inputInteres = item.closest('li').querySelector('input');

    inputInteres.addEventListener('change', (e) => {
        const interest = item.querySelectorAll('input');

        for (const val of interest) {
            if (inputInteres.checked === true) {
                val.checked = true;
            } else {
                val.checked = false;
            }
        }
    });
}

console.log(inputsInterestValue);
