export const controlPanel = (data) => {
  const CONTROLS = document.querySelectorAll('.load');
  const coffee = data.favorite;
  const id = coffee[1].id;

  CONTROLS.forEach((element, index) => {

    // const width = parseFloat(getComputedStyle(element).width)

    if (index + 1 === id) {
      // element.style.width = width === 0 ? '100%' : '0';
      // element.style.transition = '4s'

      element.classList.add('animate__load')
      element.style.background = "#665F55";
    };
    if (index + 1 !== id) {
      // element.style.transition = '1s'
      // element.style.width = 0

      element.classList.remove('animate__load')
      element.style.background = "#C1B6AD";
    };

  });
};