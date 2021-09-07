'use strict';

const fontSize = document.querySelectorAll('.font-size');

for (const item of fontSize) {
    item.addEventListener('click', onSize);
}

function onSize(event) {
    event.preventDefault();

    const parentEvent = this.closest('.book');
    let count = parentEvent.querySelector('.font-size_active');

    if (event.target.matches('.font-size_active') === false) {
        this.classList.add('font-size_active');

        count.classList.remove('font-size_active');
    }

    if (this.dataset.size === 'small') {
        // parentEvent.classList.add('book_fs-small');
        // parentEvent.classList.remove('book_fs-big');
        parentEvent.className = 'book book_fs-small';
    } else if (this.dataset.size === 'big') {
        // parentEvent.classList.add('book_fs-big');
        // parentEvent.classList.remove('book_fs-small');
        parentEvent.className = 'book book_fs-big';
    } else {
        parentEvent.className = 'book';
    }
}
