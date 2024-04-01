export default class App {
  private body;

  constructor() {
    this.body = document.body;
  }

  public start(): void {
    const showGreetingText = document.createElement('h1');
    showGreetingText.textContent = 'Hello World!';
    this.body.append(showGreetingText);
  }
}
