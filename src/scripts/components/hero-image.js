class HeroImage extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <picture>
      <source media="(min-width: 1000px)" srcset="./images/heros/hero-image_2-large.jpg">
      <source media="(min-width: 800px)" srcset="./images/heros/hero-image_2-medium.jpg">
      <source media="(max-width: 799px)" srcset="./images/heros/hero-image_2-small.jpg">
      <img src='./images/heros/hero-image_2-large.jpg' alt="hero images"></img>
    </picture>
    `;
  }
}

customElements.define('hero-image', HeroImage);
