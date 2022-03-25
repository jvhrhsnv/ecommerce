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

var tapImg1 = document.querySelector('.tap-img1'),
    tapImg2 = document.querySelector('.tap-img2'),
    tapImg3 = document.querySelector('.tap-img3'),
    tapImg4 = document.querySelector('.tap-img4'),
    changeImg = document.querySelector('.change-img');

tapImg1.addEventListener('click', () => {   
   changeImg.src = 'images/image-product-1.jpg';
});
tapImg2.addEventListener('click', () => {   
    changeImg.src = 'images/image-product-2.jpg';
 });
 tapImg3.addEventListener('click', () => {   
    changeImg.src = 'images/image-product-3.jpg';
 });
 tapImg4.addEventListener('click', () => {   
    changeImg.src = 'images/image-product-4.jpg';
 });