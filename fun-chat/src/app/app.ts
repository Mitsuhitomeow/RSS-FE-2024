import AuthorizationPage from './pages/auth-page';

export default class App {
  private body: HTMLElement;

  private authPage: AuthorizationPage;

  constructor() {
    this.body = document.body;
    this.authPage = new AuthorizationPage();
  }

  public start(): void {
    this.body.append(this.authPage.getNode());
  }
}
