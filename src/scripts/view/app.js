import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';
import DrawerInitiator from '../utils/drawer-initiator';

class App {
  constructor({hamburgerBtn, content, rootPage, navBar, mainMenu}) {
    this._hamburgerBtn = hamburgerBtn;
    this._content = content;
    this._rootPage = rootPage;
    this._navbar = navBar;
    this._mainMenu = mainMenu;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      hamburgerBtn: this._hamburgerBtn,
      content: this._content,
      rootPage: this._rootPage,
      navBar: this._navbar,
      mainMenu: this._mainMenu,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    const skipLinkElem = document.querySelector('.skip');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#main').focus();
    });
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
