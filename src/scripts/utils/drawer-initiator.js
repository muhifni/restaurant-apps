const DrawerInitiator = {
  init({hamburgerBtn, content, rootPage, navBar, mainMenu}) {
    hamburgerBtn.addEventListener('click', (event) => {
      event.preventDefault();
      this._toggleMenu(event, mainMenu);
    });

    content.addEventListener('click', (event) => {
      this._cloneHamburger(event, mainMenu);
    });

    rootPage.addEventListener('mousewheel', (event) => {
      this._scrollDetection(event, navBar, mainMenu);
    });
  },

  _toggleMenu(event, mainMenu) {
    console.log('open');
    event.stopPropagation();
    mainMenu.classList.toggle('open');
  },

  _cloneHamburger(event, mainMenu) {
    event.stopPropagation();
    mainMenu.classList.remove('open');
  },

  /*
   * hide and show navbar
   */
  _scrollDetection(event, navBar, mainMenu) {
    if (event.wheelDelta >= 0) {
      // console.log('up');
      navBar.classList.remove('nav__hide');
      navBar.classList.add('nav__show');
    } else {
      // console.log('down');
      navBar.classList.remove('nav__show');
      navBar.classList.add('nav__hide');
      mainMenu.classList.remove('open');
    }
  },
};

export default DrawerInitiator;
