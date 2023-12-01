import coffee1 from './../assets/img/coffee-1.png';
import coffee2 from './../assets/img/coffee-2.png';
import coffee3 from './../assets/img/coffee-3.png';
import coffee4 from './../assets/img/coffee-4.png';
import coffee5 from './../assets/img/coffee-5.png';
import coffee6 from './../assets/img/coffee-6.png';
import coffee7 from './../assets/img/coffee-7.png';
import coffee8 from './../assets/img/coffee-8.png';

const arrCoffee = [
  coffee1,
  coffee2,
  coffee3,
  coffee4,
  coffee5,
  coffee6,
  coffee7,
  coffee8,
]

export function showCard(data) {

  const cardItem = data.products;
  const card = document.querySelector('.menu__content-menu');
  const coffeeCards = cardItem.filter(element => element.category === 'coffee');
  const SCREEN_WIDTH = window.innerWidth;

  card.innerHTML = '';

  for (let i = 0; i < Math.min(arrCoffee.length); i += 1) {
    coffeeCards[i].image = arrCoffee[i]
  };

  const maxVisibleCards =
    SCREEN_WIDTH <= 1425 && SCREEN_WIDTH >= 1050
      ? 6
      : SCREEN_WIDTH < 1050
        ? 4
        : coffeeCards.length;

  const visibleCards = coffeeCards.slice(0, maxVisibleCards);

  visibleCards.forEach(element => {
    const menuCard = document.createElement('div');
    menuCard.classList.add('.menu__card');
    menuCard.style = 'margin-bottom: 40px'

    menuCard.innerHTML = `
        <div class="menu__card">
          <div class="card__content">
            <div class="menu__card-image">
              <img src="${element.image}" alt="${element.name}">
            </div>
            <div class="menu__card-description">
              <div class="menu__title-subtitle">
                <div class="menu__card-title">
                  <h3>${element.name}</h3>
                </div>
                <div class="menu__card-subtitle">
                  <p>${element.description}</p>
                </div>
              </div>
              <div class="menu__card-price">
                <p>${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', currencyDisplay: 'narrowSymbol' }).format(element.price)}</p>
              </div>
            </div>
          </div>
        </div>
      `

    card.appendChild(menuCard);
  });
}