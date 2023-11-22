const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const cartIcon = document.querySelector('.navbar-shopping-cart');
const myOrderDesktop = document.querySelector('.product-detail');
const burguerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);
burguerIcon.addEventListener('click', toggleMobileMenu);
cartIcon.addEventListener('click', toggleShowCart);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    cartIcon.classList.add('inactive');
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
    myOrderDesktop.classList.add('inactive');
}

function toggleShowCart(){
    // Manera de hacerlo con logica
    // const mobileMenuClosed = mobileMenu.classList.contains('inactive');
    // if(!mobileMenuClosed){
    //     mobileMenu.classList.add('inactive');    
    // }
    // myOrderDesktop.classList.toggle('inactive');

    // Manera mas eficiente:
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    myOrderDesktop.classList.toggle('inactive');
}

// function toggleMobileMenu(){
//     const cartClosed = myOrderDesktop.classList.contains('inactive');
//     if(!cartClosed){
//         myOrderDesktop.classList.add('inactive');    
//     }
//     mobileMenu.classList.toggle('inactive');
// }