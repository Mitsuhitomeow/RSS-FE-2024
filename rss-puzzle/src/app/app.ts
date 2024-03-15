import AuthPage from './pages/authorization';

export default class App {
  private authPage;

  constructor() {
    this.authPage = AuthPage;
  }

  public start(): void {
    document.body.append(this.authPage.getNode());
  }
}
