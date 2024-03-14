import AuthPage from './pages/authorization';

export default class App {
  private element;

  private authPage;

  constructor() {
    this.authPage = AuthPage;
    this.element = document.createElement('h1');
  }

  public start(): void {
    this.element.textContent = 'Hello World!!';
    document.body.append(this.element, this.authPage.getNode());
  }
}
