var counterPlus = document.querySelector('.counter-plus'),
    counterMinus = document.querySelector('.counter-minus'),
    inputValue = document.querySelector('#input-value'),
    cartNumber = document.querySelector('cart-number');

counterPlus.addEventListener('click', () => {
    for (var i = 0; i < 100; i++) {
        var newI = i;
        inputValue.value = newI;
        i++;  
    }  
});

counterMinus.addEventListener('click', () => {
    // var = 
    if (inputValue > 0) {
        
    }
});


// popup
var sectionLeftTop = document.querySelector('.section__left-top');
var footer = document.querySelector('footer');
var opacity = document.querySelector('.opacity');

sectionLeftTop.addEventListener('click', () => {
   footer.classList.toggle('show');
   opacity.classList.toggle('show');
//    document.body.style.overflow = 'hidden';
},2000);

opacity.addEventListener('click', () => {
    footer.classList.toggle('show');
    opacity.classList.toggle('show');
    document.body.style.overflow = '';
},2000);


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
    tapImg2.classList.toggle('yellow-border');
 });
 tapImg3.addEventListener('click', () => {   
    changeImg.src = 'images/image-product-3.jpg';
 });
 tapImg4.addEventListener('click', () => {   
    changeImg.src = 'images/image-product-4.jpg';
 });


// cartga raqam qo'shish

function plusMinus() {
    
}
