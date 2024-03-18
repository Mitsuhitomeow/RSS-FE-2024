import AuthPage from './pages/authorization/auth-page';

export default class App {
  private authPage;

  constructor() {
    this.authPage = AuthPage;
  }

  public start(): void {
    document.body.append(this.authPage.getNode());
  }
}
