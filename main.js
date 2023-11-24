const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const cartIcon = document.querySelector('.navbar-shopping-cart');
const myOrderDesktop = document.querySelector('.product-detail');
const burguerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
burguerIcon.addEventListener('click', toggleMobileMenu);
cartIcon.addEventListener('click', toggleShowCart);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    myOrderDesktop.classList.add('inactive');
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

const productList = [];
productList.push({
    name: 'Mercedes Benz GLC',
    price: 120,
    image: 'https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/mercedes-benz-glc-coupe-driving-front-3_4.jpg'
});
productList.push({
    name: 'Pulsar RS200',
    price: 220,
    image: 'https://cdn.bajajauto.com/-/media/assets/bajajauto/bikes/pulsarrs200/bike-gallery/popup-image/popup_images_pulsarrs200_6.jpg'
});
productList.push({
    name: 'BMW Deportivo',
    price: 1220,
    image: 'https://www.elcarrocolombiano.com/wp-content/uploads/2019/08/20190815-BMW-SERIE-8-CONVERTIBLE-COLOMBIA-PRECIO-CARACTERISTICAS-01.jpg'
});
productList.push({
    name: 'Infiniti G37',
    price: 1220,
    image: 'https://luckysautosports.com/wp-content/uploads/2015/11/11950737_1697406503839584_943346020_n.jpg'
});
productList.push({
    name: 'Mercedes GLE 63S',
    price: 1220,
    image: 'https://www.automotiveaddicts.com/wp-content/uploads/2021/01/2021-mercedes-amg-gle-63s.jpg'
});

function renderProducts(arr){
    for (product of arr){
        // Para iterar un array con Js se hace el for de dos maneras (of or in)
        // for of: Saca un valor en concreto y for in: saca el indice
        // for(product of productList){console.log(product.name)} / for(product in producList){console.log(product)};
    
        // Aqui estamos creando los divs y parrafos del html desde js y poniendole sus respectivas clases iterando el array y usando sus datos.
        const divProductCard = document.createElement('div');
        divProductCard.classList.add('product-card');
    
        const productImage = document.createElement('img');
        productImage.setAttribute('src', product.image);
        
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        
        const productInfoDiv = document.createElement('div');
        
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
        
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
        
        // Estructuramos el html desde js 
        // NOTA: Se hace de abajo hacia arriba para que funcione
        // Aqui se conecta el div con los parrafos de nombre y precio 
        productInfoDiv.append(productPrice, productName);
        // Aqui se conecta el figure con su img
        productInfoFigure.append(productImgCart);
        // Aqui se conecta el div que contiene el nombre y precio y figure
        productInfo.append(productInfoDiv, productInfoFigure);
        // Aqui se conecta el div de pruducto con el de info del producto 'append'
        divProductCard.append(productImage, productInfo);
        // Aqui se conecta el div principal con el div del producto
        cardsContainer.append(divProductCard);
    };
}

renderProducts(productList);