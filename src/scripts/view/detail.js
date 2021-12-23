import RestaurantSource from '../data/restaurant-source';
import UrlParser from '../routes/url-parser';

const Detail = {
  async render() {
    return `<h2>Detail Page</h2>`;
  },

  async afterRender() {
    // fungsi yang dijalankan setelah render
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    console.log(restaurant);
  },
};

export default Detail;
