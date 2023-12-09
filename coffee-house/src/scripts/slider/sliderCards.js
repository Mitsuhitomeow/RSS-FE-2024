const SLIDER_CONTAINER = document.querySelector('.slider__content');

export const createCards = (data) => {

  data.favorite.forEach(coffee => {
    const div = document.createElement('div');
    div.classList.add('slider__item');

    div.innerHTML = `
      <img class="slider__item-img" src="${coffee.image}" alt="${coffee.name}">
      <h3 class="slider__item-title">${coffee.name}</h3>
      <p class="slider__item-subtitle">${coffee.description}</p>
      <p class="slider__item-price">${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', currencyDisplay: 'narrowSymbol' }).format(coffee.price)}</p>
    `;

    SLIDER_CONTAINER.appendChild(div);
  });
};