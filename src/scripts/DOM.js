let dataRestaurant = require('../DATA.json');
dataRestaurant = dataRestaurant.restaurants;

const navBar = document.querySelector('nav');
const restaurantListElement = document.querySelector('.restaurant-list');
const hamburgerElement = document.getElementById('hamburger');
const mobileNavElement = document.getElementById('mobile-nav');

// menuElement.forEach((element) => {
//   element.addEventListener('mouseover', (event) => {
//     element.appendChild(hrElement);
//   });
// });

/*
 * hide and show navbar
 */
// document.addEventListener('mousewheel', (event) => {
//   if (event.wheelDelta >= 0) {
//     // console.log('up');
//     navBar.classList.remove('nav__hide');
//     navBar.classList.add('nav__show');
//   } else {
//     // console.log('down');
//     navBar.classList.remove('nav__show');
//     navBar.classList.add('nav__hide');
//     mobileNavElement.classList.remove('open');
//   }
// });

/*
 * hide and show mobile menu
 */
// hamburgerElement.addEventListener('click', (event) => {
//   mobileNavElement.classList.toggle('open');

//   event.stopPropagation();
// });

/*
 * menyajikan data restoran
 */
dataRestaurant.forEach((resto) => {
  restaurantListElement.innerHTML += `
        <div class="restaurant" tabindex="0">
            <img src="${resto.pictureId}"
                class="image" alt="restaurant image">
            <div class="content">
                <h3 class="name">${resto.name}</h3>
                <div class="rating d-inline-block">
                    <i class="fas fa-star"></i>
                    <p>${resto.rating}</p>
                </div>
                <div class="city d-inline-block">
                    <i class="fas fa-map-marker-alt"></i>
                    <p>${resto.city}</p>
                </div>
                <p class="description">${resto.description}</p>
            </div>
        </div>
      `;
});
