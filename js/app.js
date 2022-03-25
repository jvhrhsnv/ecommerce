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


// popup
var sectionLeftTop = document.querySelector('.section__left-top');
var footer = document.querySelector('footer');
var opacity = document.querySelector('.opacity');

sectionLeftTop.addEventListener('click', () => {
   footer.classList.toggle('show');
   opacity.classList.toggle('show');
});

opacity.addEventListener('click', () => {
    footer.classList.toggle('show');
    opacity.classList.toggle('show');
});


// change big photo

var sectionLeftBottomImg = document.querySelector('.section__left-bottom-img');