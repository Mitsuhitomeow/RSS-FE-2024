import Component from '../base-component';

interface LinkProps {
  href: string;
  className: string;
}
export default class Link extends Component {
  constructor({ href, className }: LinkProps) {
    super({ tag: 'a', className });
    this.node.textContent = href;

    this.setAttribute('href', href);
    this.setAttribute('target', '_blank');
    this.setAttribute('rel', 'noopener');
    this.setAttribute('rel', 'noreferrer');
  }
}
