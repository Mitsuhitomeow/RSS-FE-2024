import './index.html';
import './style/main.scss';
import url from './scripts/database/products.json'
import { sliderApp } from './scripts/slider/sliderApp';
import { showLoader } from './scripts/loaderScreen';
import { downloadAppStore } from './scripts/btn/downloadAppStore';
import { downloadGooglePlay } from './scripts/btn/downloadGooglePlay';
import { btnBurgerMenu } from './scripts/burger/burgerMenuApp';

showLoader()
console.log('test')

async function fetchData() {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('ошибка при загрузке')
    }

    const data = await response.json()

    sliderApp(data)

  } catch (error) {
    console.error('failed 404', error.message)
    throw error
  }
}

fetchData()

btnBurgerMenu()
downloadAppStore()
downloadGooglePlay()