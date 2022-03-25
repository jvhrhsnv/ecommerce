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

var tapImg = document.querySelector('.tap-img');
    changeImg = document.querySelector('.change-img');

tapImg.addEventListener('click', () => {   
   changeImg.src = 'images/image-product-2.jpg';
});
// tapImg.addEventListener('click', () => {
//     changeImg.src = 'images/image-product-3.jpg';
//  });