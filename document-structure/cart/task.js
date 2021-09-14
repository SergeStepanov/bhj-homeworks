'use strict';

const products = document.querySelectorAll('.product'); // карточки товара
const cartProducts = document.querySelector('.cart__products'); // корзина

for (const itemProduct of products) {
    itemProduct.addEventListener('click', productControl);
}

function productControl(e) {
    const btnControlDec = this.querySelector('.product__quantity-control_dec'); // кнопка минус
    const btnControlInc = this.querySelector('.product__quantity-control_inc'); // кнопка плюс
    const valueProduct = this.querySelector('.product__quantity-value'); // кол-во товара

    if (e.target === btnControlDec) {
        valueProduct.innerHTML--;
        // console.log(e.target, this);
        if (valueProduct.innerHTML <= 1) {
            valueProduct.innerHTML = 1;
        }
    } else if (e.target === btnControlInc) {
        valueProduct.innerHTML++;
        // console.log(e.target, this);
    }

    const btnProductAdd = this.querySelector('.product__add'); //  кнопка добавить
    const productId = this.dataset.id; //  артикул товара id
    const imgProduct =
        this.querySelector('.product__image').getAttribute('src'); // изображение карточки товара

    if (e.target === btnProductAdd) {
        console.log(productId + ':' + imgProduct);

        const cartProductId = cartProducts.querySelectorAll('.cart__product'); // каточки товара в корзине

        for (const item of cartProductId) {
            let count;

            if (cartProductId.length !== 0) {
                const productCount = item.querySelector('.cart__product-count');

                if (item.dataset.id === productId) {
                    productCount.innerHTML =
                        +valueProduct.innerHTML + +productCount.innerHTML;
                    count = item;
                    // cartProductId.removeChild('item');
                    cartProductId.replaceChild(item, count);
                }
            }
        }

        cartProducts.insertAdjacentHTML(
            'beforeEnd',
            `<div class="cart__product" data-id="${productId}"><img class="cart__product-image" src="${imgProduct}"><div class="cart__product-count">${valueProduct.innerHTML}</div></div>`
        ); //карточка товара
    }
}
