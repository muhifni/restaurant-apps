class HomePage extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <h2>This is Homepage</h2>
    `;
  }
}

customElements.define('home-page', HomePage);
