import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import './components/restaurant-list.js';
import swRegister from './utils/sw-register';
import App from './view/app';

console.log('Hello Coders! :)');

const app = new App({
  hamburgerBtn: document.querySelector('#hamburger'),
  content: document.querySelector('#main'),
  rootPage: document,
  navBar: document.querySelector('nav'),
  mainMenu: document.querySelector('.menu-container'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
