export default function showError() {
  const errorElement = document.getElementsByClassName('error_form')[0];

  if (errorElement.classList.contains('disabled')) {
    errorElement.classList.remove('disabled');
    errorElement.classList.add('active');

    setTimeout(() => {
      if (errorElement.classList.contains('active')) {
        errorElement.classList.remove('active');
        errorElement.classList.add('disabled');
      }
    }, 3000);
  }
}
