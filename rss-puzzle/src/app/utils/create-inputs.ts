import type { InputProps } from '../interfaces/component.interface';
import Component from './create-components';

export default class InputComponent extends Component {
  protected placeholder;

  constructor({ placeholder, className, types, minLength, required, pattern }: InputProps) {
    super({ tag: 'input', className });

    this.placeholder = placeholder;
    this.node = this.getNode();

    const inputType = this.node as HTMLInputElement;
    inputType.placeholder = placeholder;

    if (types) {
      inputType.type = types;
    }

    if (required) {
      this.setAttributeRequired(required);
    }

    if (minLength) {
      this.setAttribute('minLength', minLength);
    }

    if (pattern) {
      this.setAttribute('pattern', pattern);
    }
  }

  private setAttributeRequired(value: string) {
    this.node.setAttribute(value, value);
  }
}
