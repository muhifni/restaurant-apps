import RestaurantSource from '../data/restaurant-source';
import UrlParser from '../routes/url-parser';
import '../components/detail-restaurant';
import LikeButtonInitiator from '../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
    <div class="container">      
      <div class="detail_container">
        <div id="likeButtonContainer"></div>

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
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
        rating: restaurant.rating,
      },
    });
  },
};

export default Detail;
