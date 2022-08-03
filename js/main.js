let elBtn = document.querySelector(".site-header__button")
let elHeader = document.querySelector(".site-header__box")

elBtn.addEventListener("click", function(){
    elHeader.classList.toggle("site-header__box--active")
})