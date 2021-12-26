import RestaurantSource from '../data/restaurant-source';
import UrlParser from '../routes/url-parser';
import '../components/detail-restaurant';

const Detail = {
  async render() {
    return `
    <div class="container">
      <h2>Detail Page</h2>
      <div class="detail_container">        
                
      </div>
    </div>
    `;
  },

  async afterRender() {
    // fungsi yang dijalankan setelah render
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    const detailContainer = document.querySelector('.detail_container');
    const detailRestaurantElement = document.createElement('detail-restaurant');

    detailRestaurantElement.restaurant = restaurant;
    detailContainer.appendChild(detailRestaurantElement);
  },
};

export default Detail;
