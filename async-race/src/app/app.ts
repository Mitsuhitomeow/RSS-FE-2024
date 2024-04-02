import Header from './components/header/header';

export default class App {
  private body;

  private header;

  constructor() {
    this.body = document.body;
    this.header = Header().getNode();
  }

  public start(): void {
    this.body.append(this.header);
  }
}
