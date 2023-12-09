import { createCards } from "./sliderCards";
import { controlPanel } from "./sliderControlsPanel";

const SLIDER_CONTAINER = document.querySelector('.slider__content');

export const swiperLeft = (data) => {
  const coffee = data.favorite;
  if (coffee[1].id === 1) {

    const firstItem = coffee.shift();
    coffee.push(firstItem);

    SLIDER_CONTAINER.innerHTML = "";

    createCards(data);
    controlPanel(data);

    const SLIDER_ITEM = document.querySelectorAll('.slider__item');
    SLIDER_ITEM.forEach(element => {
      element.classList.remove('animate__left');
      element.classList.remove('animate__right');
      element.classList.add('animate__right');
    });

    setTimeout(() => {

      const firstItem = coffee.shift();
      coffee.push(firstItem);

      SLIDER_CONTAINER.innerHTML = "";

      createCards(data);
      controlPanel(data);

      const SLIDER_ITEM = document.querySelectorAll('.slider__item');
      SLIDER_ITEM.forEach(element => {
        element.classList.remove('animate__left');
        element.classList.remove('animate__right');
        element.classList.add('animate__right');
      });
    }, 400);

  } else {

    const firstItem = coffee.pop();
    coffee.unshift(firstItem);

    SLIDER_CONTAINER.innerHTML = "";

    createCards(data);
    controlPanel(data);

    const SLIDER_ITEM = document.querySelectorAll('.slider__item');
    SLIDER_ITEM.forEach(element => {
      element.classList.remove('animate__right');
      element.classList.remove('animate__left');
      element.classList.add('animate__left');
    });
  }
};

export const swiperRight = (data) => {
  const coffee = data.favorite;
  if (coffee[1].id === 3) {

    const firstItem = coffee.pop();
    coffee.unshift(firstItem);

    SLIDER_CONTAINER.innerHTML = "";

    createCards(data);
    controlPanel(data);

    const SLIDER_ITEM = document.querySelectorAll('.slider__item');
    SLIDER_ITEM.forEach(element => {
      element.classList.remove('animate__right');
      element.classList.remove('animate__left');
      element.classList.add('animate__left');
    });

    setTimeout(() => {
      const firstItem = coffee.pop();
      coffee.unshift(firstItem);

      SLIDER_CONTAINER.innerHTML = "";

      createCards(data);
      controlPanel(data);

      const SLIDER_ITEM = document.querySelectorAll('.slider__item');
      SLIDER_ITEM.forEach(element => {
        element.classList.remove('animate__right');
        element.classList.remove('animate__left');
        element.classList.add('animate__left');
      });
    }, 400);

  } else {

    const firstItem = coffee.shift();
    coffee.push(firstItem);

    SLIDER_CONTAINER.innerHTML = "";

    createCards(data);
    controlPanel(data);

    const SLIDER_ITEM = document.querySelectorAll('.slider__item');
    SLIDER_ITEM.forEach(element => {
      element.classList.remove('animate__left');
      element.classList.remove('animate__right');
      element.classList.add('animate__right');
    });
  }
}
