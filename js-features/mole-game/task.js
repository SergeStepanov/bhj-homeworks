'use strict';

const deadId = document.getElementById('dead');
const lostId = document.getElementById('lost');

for (let i = 1; i < 10; i++) {
    const hole = document.getElementById(`hole${i}`);
    const getHole = (index) => document.getElementById(`hole${index}`);

    hole.onclick = function () {
        checkHit();
    };

    function checkHit() {
        const hit = getHole(i).classList.contains('hole_has-mole');

        if (hit) deadId.textContent++;
        else lostId.textContent++;

        if (deadId.textContent >= 10) {
            alert('Победа!!!');
            // deadId.textContent = 0;
            // lostId.textContent = 0;
            location.reload();
        } else if (lostId.textContent >= 5) {
            alert('Вы проиграли');
            // deadId.textContent = 0;
            // lostId.textContent = 0;
            location.reload();
        }
    }
}
