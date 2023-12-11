import './index.html';
import './style/main.scss';
import { fetchData } from './scripts/indexGetData';
import { showLoader } from './scripts/loaderScreen';
import { btnBurgerMenu } from './scripts/burger/burgerMenuApp';
import { downloadAppStore, downloadGooglePlay } from './scripts/btn/downloadApps';

showLoader()
fetchData()
btnBurgerMenu()
downloadAppStore()
downloadGooglePlay()