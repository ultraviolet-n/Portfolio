new Swiper(".card-slider__body", {
    navigation: {
        nextEl: ".slider__btn-right",
        prevEl: ".slider__btn-left",
    },
    pagination: {
        el: ".swiper-paginatinon",
        clickable: true,
    },

}
);



const btnpopup = document.querySelector(".popup-btn");
const closepopup = document.querySelector(".popup__close");
const popupcard = document.querySelector(".popup__card");
const body = document.querySelector("body");
const popup = document.querySelector(".popup");


btnpopup.addEventListener("click", function() {
    popup.classList.add("active"); 
    popupcard.classList.add("active");
    body.classList.add("active");
})
closepopup.addEventListener("click", function() {
    popup.classList.remove("active"); 
    popupcard.classList.remove("active");
    body.classList.remove("active");
})
