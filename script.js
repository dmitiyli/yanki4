const popupLinks = document.querySelectorAll('.popup__link'),
    popupMain = document.querySelector('.popup'),
    closePopup = document.querySelector('.popup__close'),
    animation = document.querySelector('.popap__content'),
    imgView = document.querySelector('.main__category-image .category__img'),
    popupImg = document.querySelector('.popup img')

popupLinks.forEach(item => {
    item.addEventListener('click', function () {
        popupOpen(this)
        popupAnimation(this)
        closePop(this)
    })
}
)
function popupOpen(el) {
    console.log(el);
    let imageBox = el.closest('.main__category-image').querySelector('.category__img')
    let get = imageBox.getAttribute('src')
    popupImg.setAttribute('src', get)
    popupMain.classList.add('open')
}


closePopup.addEventListener('click', function () {
    popupMain.classList.remove('open')
    animation.classList.remove('animation')
    
    

})



function popupAnimation(el) {
    animation.classList.add('animation')
    

};
// выпадающее меню

let list = document.querySelectorAll('.header__list-link'),
    subList = document.querySelector('.sub__menu');

list.forEach(item => {
    item.addEventListener('click', function () {
        openList(this)
    })
})






function openList(el) {
    let imageBox = el.closest('.header__list-link').querySelector('.sub__menu')
    imageBox.classList.toggle('active')
    
}


// theme
let iconLink = document.querySelectorAll('.theme__link')
sunLink=document.querySelector('.theme__link .sun__icon')
moonLink=document.querySelector('.theme__link .moon__icon')
console.log(sunLink);
body = document.body,
text = document.querySelectorAll('.text')
input = document.querySelectorAll('.input')
bg = document.querySelectorAll('.bg')
btn = document.querySelector('.btn')
textBg = document.querySelectorAll('.text__bg')
console.log(text);
let fam = sunLink.parentElement
console.log(fam);

iconLink.forEach(item =>{
    console.log(item);
    item.addEventListener('click',function () {
        nightTheme(this)
    

    })
})

fam.addEventListener('click',function(){
    lightTheme(this)

})




function lightTheme(el) {
    body.style.background = 'white'
    btn.style.background='#E0BEA2'
     text.forEach(item => {
         item.style.color='white'
     })
     input.forEach(item => {
         item.style.background= 'white'
     })
     bg.forEach(item=>{
      item.style.background= '#E0BEA2BF'
     })
     textBg.forEach(item => {
        item.style.color= '#000'
     });


}
function nightTheme(el) {
    btn.style.background='#273a64'
  body.style.background = '#101829'
   text.forEach(item => {
       item.style.color='#887fe4'
   })
   input.forEach(item => {
       item.style.background= '#2a3b5f69'
   })
   bg.forEach(item=>{
    item.style.background= '#2a3b5f69'
   })
}



// burger
let burgerMenu = document.querySelector('.burger__menu')
burgerBtn = document.querySelector('.burger__open')
burgerClose = document.querySelector('.burger__close')


burgerBtn.addEventListener('click', function(){
  burgerMenu.classList.add('burger__open')  
})

burgerClose.addEventListener('click', function(){
    burgerMenu.classList.remove('burger__open')  
}   
)






