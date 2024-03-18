import type { InputProps } from '../interfaces/component.interface';
import Component from './create-components';

export default class InputComponent extends Component {
  protected placeholder;

  constructor({ placeholder, className, types }: InputProps) {
    super({ tag: 'input', className });

    this.placeholder = placeholder;
    this.node = this.getNode();

    const inputType = this.node as HTMLInputElement;
    inputType.placeholder = placeholder;

    if (types) {
      inputType.type = types;
    }
  }
}
