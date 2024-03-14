import type { InputProps } from '../interfaces/form.interface';
import Component from './create-components';

export default class InputComponent extends Component {
  protected placeholder: string;

  constructor({ placeholder, className, types }: InputProps) {
    super({ tag: 'input', className });
    this.placeholder = placeholder;

    this.node = this.getNode();
    const inputType = this.node as HTMLInputElement;

    if (types) {
      inputType.type = types;
    }
  }
}
