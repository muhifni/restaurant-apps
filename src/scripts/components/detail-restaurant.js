import CONFIG from '../globals/config';

class DetailRestaurant extends HTMLElement {
  constructor() {
    super();
  }

  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="detail_image">
          <img src="${CONFIG.BASE_IMAGE_URL_LARGE}${
      this._restaurant.pictureId
    }" alt="restaurant image">
        </div>
        <div class="detail_title">
          <h2>${this._restaurant.name}</h2>          
          <div class="detail_city d-inline-block">
            <i class="fas fa-map-marker-alt"></i>
            <p class="d-inline-block">${this._restaurant.city}</p>
          </div>
          <div class="detail_address d-inline-block">
              <i class="fas fa-map-marked-alt"></i>
              <p class="d-inline-block">${this._restaurant.address}</p>
          </div>          
          <div class="detail_category">
              ${this._categoryRestaurant()}
          </div>          
        </div>
        <hr/>
        <div class="detail_content">
          <div class="detail_description">
            <h3>Description</h3>
            <p>${this._restaurant.description}</p>
          </div>
          <div class="detail_menu">
            <h3>Menu</h3>
            <div class="list_menu">
              <div class="menu_makanan">
                <p>Makanan</p>
                <ul>
                  ${this._foods()}                  
                </ul>            
              </div>
              <div class="menu_minuman">
                <p>Minuman</p>
                <ul>
                  ${this._drinks()}                  
                </ul>
              </div>
            </div>            
          </div>
          <div class="review_container">
            <h3>Review</h3>                        
            ${this._reviewer()}
          </div>          
        </div>
    `;
  }

  _categoryRestaurant() {
    const categories = this._restaurant.categories;
    let memory = '';
    categories.forEach((categorie) => {
      memory += `<p>${categorie.name}</p>`;
    });
    return memory;
  }

  _foods() {
    let memory = '';
    this._restaurant.menus.foods.forEach((food) => {
      memory += `<li>${food.name}</li>`;
    });
    return memory;
  }

  _drinks() {
    let memory = '';
    this._restaurant.menus.drinks.forEach((drink) => {
      memory += `<li>${drink.name}</li>`;
    });
    return memory;
  }

  _reviewer() {
    let memory = '';
    this._restaurant.customerReviews.forEach((reviewer) => {
      memory += `
        <div class="detail_review">
          <div class="d-flex">
            <div class="review_image">
              <img src="images/avatar_circle.png" alt="reviewer image">
            </div>
            <div class="review_name">
              <p>${reviewer.name}</p>
            </div>
            <div class="review_date">
              <p>${reviewer.date}</p>
            </div>
          </div>
          <div class="review_text">
            <p>${reviewer.review}</p>
          </div>
        </div>
      `;
    });
    return memory;
  }
}

customElements.define('detail-restaurant', DetailRestaurant);
