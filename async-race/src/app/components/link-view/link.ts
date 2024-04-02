import Component from '../create-components';

interface LinkProp {
  href: string;
  text: string;
  className: string;
}

export default class Link extends Component {
  constructor({ href, text, className }: LinkProp) {
    super({ tag: 'a', className, text });
    this.setAttribute('href', href);
  }
}
