
import slide1 from './../assets/img/slider/coffee-slider-1.png';
import slide2 from './../assets/img/slider/coffee-slider-2.png';
import slide3 from './../assets/img/slider/coffee-slider-3.png';

// const coffee = [
//   {
//     name: "S’mores Frappuccino",
//     description: "This new drink takes an espresso and mixes it with brown sugar and cinnamon before being topped with oat milk.",
//     price: 5.50,
//     image: slide1
//   },
//   {
//     name: "Caramel Macchiato",
//     description: "Fragrant and unique classic espresso with rich caramel-peanut syrup, with cream under whipped thick foam.",
//     price: 5.00,
//     image: slide2
//   },
//   {
//     name: "Ice coffee",
//     description: "A popular summer drink that tones and invigorates. Prepared from coffee, milk and ice.",
//     price: 4.50,
//     image: slide3
//   }
// ]

const slider = document.querySelector('.slider__content');

export const showImage = (data) => {

  const coffee = data.favorite
  // console.log(coffee[0])

  coffee[0].image = slide1;
  coffee[1].image = slide2;
  coffee[2].image = slide3;

  const div = document.createElement('div')
  const img = document.createElement('img')

  div.classList.add('slider__item')

  div.innerHTML = `
    <img class="slider__item-img" src="${coffee[0].image}" alt="${coffee[0].name}">
    <h3 class="slider__item-title">${coffee[0].name}</h3>
    <p class="slider__item-subtitle">${coffee[0].description}</p>
    <p class="slider__item-price">${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', currencyDisplay: 'narrowSymbol' }).format(coffee[0].price)}</p>
  `

  slider.appendChild(div)



  // data.favorite.forEach(coffee => {
  //   const div = document.createElement('div')
  //   const img = document.createElement('img')

  //   div.classList.add('slider__item')

  //   div.innerHTML = `
  //     <img class="slider__item-img" src="${coffee.image}" alt="${coffee.name}">
  //     <h3 class="slider__item-title">${coffee.name}</h3>
  //     <p class="slider__item-subtitle">${coffee.description}</p>
  //     <p class="slider__item-price">${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', currencyDisplay: 'narrowSymbol' }).format(coffee.price)}</p>
  //   `

  //   slider.appendChild(div)
  // })
}