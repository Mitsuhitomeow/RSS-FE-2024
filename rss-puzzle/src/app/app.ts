export default class App {
  public start(): void {
    const element = document.createElement('h1');
    element.textContent = 'Hello World!!';
    document.body.appendChild(element);
  }
}
