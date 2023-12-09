import { swiperLeft, swiperRight } from "./sliderFunctions";
const TIME_SWIPE = document.querySelectorAll('.load');

export const touchEvents = (slide, data) => {
  let startX, startY;

  slide.addEventListener('mousedown', moveStart);
  slide.addEventListener('touchstart', moveStart, { passive: false });

  slide.addEventListener('touchstart', () => {
    TIME_SWIPE.forEach(element => element.style.animationPlayState = "paused");
  }, { passive: false });

  slide.addEventListener('touchend', () => {
    TIME_SWIPE.forEach(element => element.style.animationPlayState = "running");
  }, { passive: false });

  function moveStart(event) {
    startX = (event.type === 'touchstart') ? event.touches[0].clientX : event.clientX;
    startY = (event.type === 'touchstart') ? event.touches[0].clientY : event.clientY;

    document.addEventListener('mousemove', slideMove, { passive: false });
    document.addEventListener('touchmove', slideMove, { passive: false });
    document.addEventListener('mouseup', moveEnd, { passive: false });
    document.addEventListener('touchend', moveEnd, { passive: false });
  }

  function moveEnd(event) {
    let endX = (event.type === 'touchend') ? event.changedTouches[0].clientX : event.clientX;
    let endY = (event.type === 'touchend') ? event.changedTouches[0].clientY : event.clientY;

    let moveX = endX - startX;
    let moveY = endY - startY;

    if (Math.abs(moveX) > Math.abs(moveY)) {
      moveX > 0 ? swiperLeft(data) : swiperRight(data);
    }

    document.removeEventListener('mousemove', slideMove);
    document.removeEventListener('touchmove', slideMove);
    document.removeEventListener('mouseup', moveEnd);
    document.removeEventListener('touchend', moveEnd);
  }

  function slideMove(event) {
    event.preventDefault();
  }
}