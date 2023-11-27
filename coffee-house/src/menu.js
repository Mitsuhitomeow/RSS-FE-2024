import './menu.html'
import './style/main.scss'
import { fetchData } from './scripts/menuGetData'

fetchData();

window.addEventListener('resize', () => {
  fetchData();
})