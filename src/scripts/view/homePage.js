import RestaurantSource from '../data/restaurant-source';
import '../components/restaurant-item';

const HomePage = {
  async render() {
    return `
    <div class="container">
            <section id="restaurant-container" class="restaurant-container">
                <h2>Explore Restaurant</h2>
                <div class="restaurant-list">                    
                  <div class="gooey">
                      <span class="dot"></span>
                      <div class="dots">
                          <span></span>
                          <span></span>
                          <span></span>
                      </div>
                  </div>
                </div>
            </section>
        </div>`;
  },

  async afterRender() {
    // fungsi yang dijalankan setelah render
    const restaurants = await RestaurantSource.restaurantList();
    const restaurantListElement = document.querySelector('.restaurant-list');
    const headerElement = document.querySelector('header');

    restaurantListElement.innerHTML = '';
    headerElement.innerHTML = '<div class="hero-image"></div>';
    restaurants.forEach((restaurant) => {
      const restaurantItem = document.createElement('restaurant-item');
      restaurantItem.restaurant = restaurant;
      restaurantListElement.appendChild(restaurantItem);
    });
  },
};

export default HomePage;
