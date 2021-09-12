'use strict';
<<<<<<< HEAD
=======

window.addEventListener('scroll', onScroll);

function onScroll() {
    function isInViewport(elem) {
        const viewportHeight = window.innerHeight;
        const elementTop = elem.getBoundingClientRect().top;
        const elementBottom = elem.getBoundingClientRect().bottom;

        if (elementTop < viewportHeight) {
            elem.classList.add('reveal_active');
        } else {
            elem.classList.remove('reveal_active');
        }

        if (elementBottom <= 0) {
            elem.classList.remove('reveal_active');
        }
        // console.log(
        //     viewportHeight + '===' + elementTop + '____' + elementBottom
        // );
    }

    const reveals = document.querySelectorAll('.reveal');

    for (const item of reveals) {
        isInViewport(item);
    }
}
// elementTop > viewportHeight ||
>>>>>>> 0324efbb0acfebbb5878338388e8c01eda95dd0d
