export default class App {
  private element;

  constructor() {
    this.element = document.createElement('h1');
  }

  public start(): void {
    this.element.textContent = 'Hello World!!';
    document.body.appendChild(this.element);
  }
}
