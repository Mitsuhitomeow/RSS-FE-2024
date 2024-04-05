export default class App {
  private body;

  private node: Node | null;

  private greeting: Node | null;

  constructor() {
    this.body = document.body;

    this.node = null;
    this.greeting = null;
  }

  private createGreetingTitle() {
    this.greeting = document.createElement('h1');
    this.greeting.textContent = 'hello world';
    return this.greeting;
  }

  private getNode() {
    this.node = this.createGreetingTitle();
    return this.node;
  }

  public start(): void {
    this.body.append(this.getNode());
  }
}
