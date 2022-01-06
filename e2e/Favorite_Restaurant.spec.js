Feature('Favorite Restaurant');

Before(({I}) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty favorite restaurant', ({I}) => {
  I.see('Tidak ada restaurant favorite', '.restaurant-list p');
});

Scenario('favorite one restaurant', ({I}) => {
  I.see('Tidak ada restaurant favorite', '.restaurant-list p');

  I.amOnPage('/');

  I.seeElement('.content h3.name a');
  I.click(locate('.content h3.name a').at(1));

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('restaurant-item');
});

Scenario('unfavorite one restaurant', ({I}) => {
  I.see('Tidak ada restaurant favorite', '.restaurant-list p');
  I.amOnPage('/');

  I.seeElement('.content h3.name a');
  I.click(locate('.content h3.name a').at(1));

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('restaurant-item');

  I.click(locate('.content h3.name a').at(1));

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see('Tidak ada restaurant favorite', '.restaurant-list p');
});
