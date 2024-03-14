export default class Component<T extends HTMLElement = HTMLElement> {
  protected children: Component[] = [];

  protected node: T;

  constructor({ tag = 'div', className = '', text = '' }, ...children: []) {
    const node = document.createElement(tag) as T;
    node.className = className;
    node.textContent = text;
    this.node = node;

    if (children) {
      this.appendChildren(children);
    }
  }

  public append(child: Component): void {
    this.children.push(child);
    this.node.append(child.getNode());
  }

  public appendChildren(children: Component[]): void {
    children.forEach((el) => {
      this.append(el);
    });
  }

  public getNode(): T {
    return this.node;
  }

  public getChildren(): Component[] {
    return this.children;
  }

  public setTextContent(content: string): void {
    this.node.textContent = content;
  }

  public setAttribute(attribute: string, value: string): void {
    this.node.setAttribute(attribute, value);
  }

  public removeAttribute(attribute: string): void {
    this.node.removeAttribute(attribute);
  }

  public toggleClass(className: string): void {
    this.node.classList.toggle(className);
  }

  public addListener(event: string, listener: () => void, options = false): void {
    this.node.addEventListener(event, listener, options);
  }

  public removeListener(event: string, listener: () => void, options = false): void {
    this.node.removeEventListener(event, listener, options);
  }

  public destroyChildren(): void {
    const childrenNodes = this.node.childNodes as NodeListOf<HTMLElement>;
    childrenNodes.forEach((child: HTMLElement) => {
      if (child instanceof Component) {
        child.destroy();
      }
    });
    this.children.length = 0;
  }

  public destroy(): void {
    this.destroyChildren();
    this.node.remove();
  }
}
