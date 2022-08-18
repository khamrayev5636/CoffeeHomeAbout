const elBurgerBtn = document.querySelector('.js-open-btn');
const modalBtn = document.querySelector(".card__block-button");
const modal = document.querySelector(".modal")
const overlay = document.querySelector(".overlay")
const closeModalBtn = document .querySelector(".modal__info-button")
const closecheckked = document .querySelector(".modal__info-check")

elBurgerBtn.addEventListener("click" ,function(){
    elBurgerBtn.closest(".header").classList.toggle("shownav")
})

modalBtn.addEventListener("click" , function(){
    modal.classList.add("owner")
    overlay.classList.add("owner")
})

closeModalBtn.addEventListener("click" , function(){
    modal.classList.remove("owner")
    overlay.classList.remove("owner")
})

closecheckked.addEventListener("click" , function(){
    modal.classList.remove("owner")
    overlay.classList.remove("owner")
})