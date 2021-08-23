'use strict';

const deadId = document.getElementById('dead');
const lostId = document.getElementById('lost');

// function getHole(index) {
//     document.getElementById(`hole${index}`);
// }
const getHole = (index) => document.getElementById(`hole${index}`);

let hit = (index) => getHole(index).classList.contains('hole_has-mole');

function checkHit() {
    if (hit) deadId.textContent++;
    else lostId.textContent++;

    if (deadId.textContent === 10) {
        alert('Победа!!!');
        deadId.textContent = 0;
        lostId.textContent = 0;
    } else if (lostId.textContent === 5) {
        alert('Вы проиграли');
        deadId.textContent = 0;
        lostId.textContent = 0;
    }
}

// for (let i = 0; i <= 9; i++) {
//     getHole[i].onclick = function () {
//         console.log('fgfgf');
//         // checkHit();
//     };
// }

for (let elem of getHole) {
    elem.onclick = function () {
        checkHit();
    };
}
