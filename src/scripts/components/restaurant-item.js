class RestaurantItem extends HTMLElement {
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
      <div class="restaurant" tabindex="0">
          <img src="${this._restaurant.pictureId}"
              class="image" alt="restaurant image">
          <div class="content">
              <h3 class="name"><a href="#">${this._restaurant.name}</a></h3>
              <div class="rating d-inline-block">
                  <i class="fas fa-star"></i>
                  <p>${this._restaurant.rating}</p>
              </div>
              <div class="city d-inline-block">
                  <i class="fas fa-map-marker-alt"></i>
                  <p>${this._restaurant.city}</p>
              </div>
              <p class="description">${this._restaurant.description}</p>
          </div>
      </div>
    `;
  }
}

customElements.define('restaurant-item', RestaurantItem);
