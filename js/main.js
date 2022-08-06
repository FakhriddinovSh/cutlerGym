let elBtn = document.querySelector(".site-header__button")
let elHeader = document.querySelector(".site-header__box")
let elPriceItem = document.querySelector(".price__item")
let elPriceButtonOne = document.querySelector(".price__button-one")
let elPriceButtontwo = document.querySelector(".price__button-two")


elBtn.addEventListener("click", function(){
    elHeader.classList.toggle("site-header__box--active")
})

elPriceButtontwo.addEventListener("click", function(){
    elPriceItem.classList.remove("price__item--active")
    priceTwo.classList.add("price__item__two--active")
})

elPriceButtonOne.addEventListener("click", function(){
    elPriceItem.classList.add("price__item--active")
    priceTwo.classList.remove("price__item__two--active")
})

