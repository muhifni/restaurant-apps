import FavoriteRestaurantIdb from '../data/favoriterestaurant-idb';

const Favorite = {
  async render() {
    return `
    <div class="container">
      <section id="restaurant-container" class="restaurant-container">
          <h2>Your Favorite Restaurant</h2>
          <div class="restaurant-list">
            <p>Tidak ada restaurant favorite</p>
          </div>
      </section>
    </div>`;
  },

  async afterRender() {
    // fungsi yang dijalankan setelah render
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantListElement = document.querySelector('.restaurant-list');

    // console.log(restaurants);
    if (restaurants.length !== 0) {
      restaurantListElement.innerHTML = '';
      restaurants.forEach((restaurant) => {
        const restaurantItem = document.createElement('restaurant-item');
        restaurantItem.restaurant = restaurant;
        restaurantListElement.appendChild(restaurantItem);
      });
    }
  },
};

export default Favorite;
