import LikeButtonInitiator from './../src/scripts/utils/like-button-initiator';
import FavoriteRestaurantIdb from './../src/scripts/data/favoriterestaurant-idb';

describe('Favorite A Restaurant', () => {
  it('should show the like button when the restaurant has not been favorited', async () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1,
      },
    });

    expect(
      document.querySelector('[aria-label="favorite this restaurant"]'),
    ).toBeTruthy();
  });

  it('should not show the unfavorite button when the restaurant has not been favorited before', async () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1,
      },
    });

    expect(
      document.querySelector('[aria-label="unfavorite this restaurant"]'),
    ).toBeFalsy();
  })

  fit('should be able to favorite the restaurant', async () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1,
      },
    });

    // mensimulasikan user mengklik button favorite
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const restaurant = await FavoriteRestaurantIdb.getAllRestaurants();

    console.log(restaurant)
    expect(restaurant).toEqual({ id: 1});

    // FavoriteRestaurantIdb.deleteRestaurant(1);
  })
});
