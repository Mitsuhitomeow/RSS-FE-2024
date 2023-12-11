export const downloadAppStore = () => {
  document.querySelector('.apple__download-btn').addEventListener('click', function() {
    window.open('https://www.apple.com/app-store/', '_blank');
  });
};

export const downloadGooglePlay = () => {
  document.querySelector('.google__download-btn').addEventListener('click', function() {
    window.open('https://play.google.com/store/games?hl=ru&gl=US', '_blank');
  });
};