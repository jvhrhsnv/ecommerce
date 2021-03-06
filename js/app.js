var counterPlus = document.querySelector('.counter-plus'),
    counterMinus = document.querySelector('.counter-minus'),
    inputValue = document.querySelector('#input-value'),
    cartNumber = document.querySelector('cart-number-old');



function numberPlus() {
    var i = 0;
    counterPlus.addEventListener('click', () => {
       var newPlus = +(inputValue.value) + 1;
       inputValue.value = newPlus;
       cartNumber.value = inputValue.value;
    });
}
function numberMinus() {
    counterMinus.addEventListener('click', () => {
       if (inputValue.value > 0) {
        var newMinus = +inputValue.value - 1;
        inputValue.value = newMinus;
        cartNumber.value = inputValue.value;      
       }
      
    });
}
numberPlus();
numberMinus();

var btn = document.querySelector('.section__right-bottom-right');
btn.addEventListener('click', () => {
    console.log(cartNumber.value = inputValue.value);
});

// popup
var sectionLeftTop = document.querySelector('.section__left-top');
var footer = document.querySelector('footer');
var opacity = document.querySelector('.opacity');

sectionLeftTop.addEventListener('click', () => {
   footer.classList.toggle('show');
   opacity.classList.toggle('show');
   document.body.style.overflow = 'hidden';
});

opacity.addEventListener('click', () => {
    footer.classList.toggle('show');
    opacity.classList.toggle('show');
    document.body.style.overflow = '';
});


// Change big photo
var sectionLeft = document.querySelector('.section__left');
sectionLeft.addEventListener('click', (e) => {
var tapImg1 = document.querySelector('.tap-img1');
var tapImg2 = document.querySelector('.tap-img2');
var tapImg3 = document.querySelector('.tap-img3');
var tapImg4 = document.querySelector('.tap-img4');
var changeImg = document.querySelector('.change-img');
    var classListName = e.target.classList;
   if (classListName[0] === "tap-img1") {      
       changeImg.setAttribute('src', 'images/image-product-1.jpg');
   }else if (classListName[0] === "tap-img2") {
       changeImg.setAttribute('src', 'images/image-product-2.jpg');
   }else if (classListName[0] === "tap-img3") {
       changeImg.setAttribute('src', 'images/image-product-3.jpg');
   }else {
        changeImg.setAttribute('src', 'images/image-product-4.jpg');
   }
});


// show message in cart

var cart = document.querySelector('.cart');
var smallCart = document.querySelector('.navbar__right-cart');

smallCart.addEventListener('click', () => {
 cart.classList.toggle('show-cart');
});