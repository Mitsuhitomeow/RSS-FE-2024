import Component from '../base-component';

interface InputProps {
  type: string;
  className: string;
  placeholder: string;
}

export default class Input extends Component {
  constructor({ type, className, placeholder }: InputProps) {
    super({ tag: 'input', className });

    this.setAttribute('type', type);
    this.setAttribute('placeholder', placeholder);
  }
}
