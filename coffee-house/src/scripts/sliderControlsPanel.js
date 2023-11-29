export function controlPanel (data) {
  const CONTROLS = document.querySelectorAll('.load');
  const id = data.favorite[1].id;

  CONTROLS.forEach((element, index) => {
    if (index + 1 === id) {
      element.classList.add('animate__load')
      element.style.background = "#665F55";
    };
    if (index + 1 !== id) {
      element.classList.remove('animate__load')
      element.style.background = "#C1B6AD";
    };
  });
};