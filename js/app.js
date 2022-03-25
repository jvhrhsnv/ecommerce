var counterPlus = document.querySelector('.counter-plus'),
    counterMinus = document.querySelector('.counter-minus'),
    inputValue = document.querySelector('#input-value'),
    cartNumber = document.querySelector('cart-number');

counterPlus.addEventListener('click', () => {
    var i = 0;
        i++;
    inputValue.value = i;    
});

counterMinus.addEventListener('click', () => {
    if (inputValue > 0) {
        inputValue.value = inputValue - 1;
    }
});