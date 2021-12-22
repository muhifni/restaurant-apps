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
}

export default App;
