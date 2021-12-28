import 'regenerator-runtime'; /* for async await transpile */
import '../styles/loader-style.css';
import '../styles/main.css';
import '../styles/responsive.css';
import swRegister from './utils/sw-register';
import App from './view/app';

const app = new App({
  hamburgerBtn: document.querySelector('#hamburger'),
  content: document.querySelector('#main'),
  rootPage: document,
  navBar: document.querySelector('nav'),
  mainMenu: document.querySelector('.menu-container'),
  restaurantList: document.querySelector('.restaurant-list'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
