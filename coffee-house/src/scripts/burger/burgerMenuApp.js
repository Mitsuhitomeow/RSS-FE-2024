const BTN_BURGER = document.querySelector('.header__burger-btn');
const NAV_MENU = document.querySelector('.header__nav');
const MENU_LINK = document.querySelector('.header__menu-link');
const LINK = document.querySelectorAll('li');

const touchCloseBurger = () => {
  let startX = 0;
  let endX = 0;

  const minX = 100;

  NAV_MENU.addEventListener('touchstart', (event) => {
    startX = event.touches[0].clientX
  })

  NAV_MENU.addEventListener('touchmove', (event) => {
    endX = event.touches[0].clientX
  })

  NAV_MENU.addEventListener('touchend', (event) => {
    const distance = endX - startX

    if (distance > minX) {
      document.body.classList.remove('_lock');
      NAV_MENU.classList.remove('open');
      MENU_LINK.classList.remove('open');
    }
  })
}

export const btnBurgerMenu = () => {

  BTN_BURGER.addEventListener('click', () => {
    NAV_MENU.classList.toggle('open');
    MENU_LINK.classList.toggle('open')
    document.body.classList.toggle('_lock');
  })

  MENU_LINK.addEventListener('click', () => {
    document.body.classList.remove('_lock');
    NAV_MENU.classList.remove('open');
    MENU_LINK.classList.remove('open');
  })

  LINK.forEach(link => link.addEventListener('click', () => {
    document.body.classList.remove('_lock');
    NAV_MENU.classList.remove('open');
    MENU_LINK.classList.remove('open');
  }));

  touchCloseBurger()
}