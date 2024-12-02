let mobileMenuBtn = document.querySelector("#mobile-menu-icon");
const primaryNav = document.querySelector(".primary-navigation");

mobileMenuBtn.addEventListener('click', () => {
    primaryNav.classList.toggle("hidden");

    if (primaryNav.classList.contains("hidden")) {
        mobileMenuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>'

    } else {

        mobileMenuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    }
});

primaryNav.addEventListener("click", (e) => {
    if (e.target.tagName == "A" || e.target.tagName == "BUTTON" ) {
        mobileMenuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>'
        primaryNav.classList.add("hidden")


    }

})


// Sticky Header
const navbar =document.querySelector('header');

window.onscroll=()=>{
    if(window.scrollY > 100){
        navbar.classList.add('bg-color-primary-dark')
        navbar.classList.add('border-b')
        navbar.classList.add('border-color-gray')
    }else{
        navbar.classList.remove('bg-color-primary-dark')
        navbar.classList.remove('border-b')
        navbar.classList.remove('border-color-gray')
    }
}

// JS for testimonial section
let clientImages = document.querySelectorAll('.user-pic');
let clientReviews = document.querySelectorAll('.client-text');

for (let item of clientImages) {
    item.addEventListener("click", showReview);
}

function showReview(event) {
    let i = Array.from(clientImages).indexOf(event.target)
    const activeClient = document.querySelector('.active-client');
    const activeClientReview = document.querySelector('.active-client-text');

    if(activeClient){
        activeClient.classList.remove('active-client')
    }
    event.target.classList.add("active-client")

    if(activeClientReview){
        activeClientReview.classList.remove('active-client-text')
    }
    clientReviews[i].classList.add('active-client-text')

}


var scene = document.getElementById('paralaxone');
var parallaxInstance = new Parallax(scene);




// Code Start for Pricing Card Flip

const priceToggle =document.getElementById('priceToggle');

let CardsFront = document.querySelectorAll('.card__front');
let CardsBack = document.querySelectorAll('.card__back');


priceToggle.addEventListener('change', ()=>{

    for (let item of CardsFront) {
        item.classList.toggle('-rotate-y-180')
    }
    for (let item of CardsBack) {
        item.classList.toggle('rotate-y-180')
    }


})

// Code end for Pricing Card Flip