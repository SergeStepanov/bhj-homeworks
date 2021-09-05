'use strict';

const tabClick = Array.from(document.querySelectorAll('.tab'));
const tabText = Array.from(document.querySelectorAll('.tab__content'));
const parentDiv = document.querySelector('.tabs');
let countInd = 0;

parentDiv.addEventListener('click', showText);

// tabClick.forEach((click) => {
//     click.addEventListener('click', showText);
// });

function showText(e) {
    e.preventDefault();
    let indElem = tabClick.indexOf(e.target);

    tabClick.forEach((elem) => {
        if (elem === e.target) {
            elem.classList.add('tab_active');
            tabText[indElem].classList.add('tab__content_active');

            tabClick[countInd].classList.remove('tab_active');
            tabText[countInd].classList.remove('tab__content_active');

            countInd = indElem;

            // console.log(
            //     `count = ${countInd} :: ind = ${indElem} :: ${e.target.textContent}`
            // );
        }
        // } else if (countInd === indElem) {
        //     console.log('no click!!!!!!');
        //     return;
        // }
    });
}
// console.log(countInd);
