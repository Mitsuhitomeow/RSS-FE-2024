import Component from './create-components';
import type { ButtonProps } from '../interfaces/component.interface';

export default class Button extends Component {
  protected onClick!: () => void;

  constructor({ text, onClick, className, attribute }: ButtonProps) {
    super({ tag: 'button', className, text });
    if (onClick) {
      this.onClick = onClick;
      this.addListener('click', this.onClick);
    }
    if (attribute) {
      this.setAttribute('type', attribute);
    }
  }

  public destroy(): void {
    this.removeListener('click', this.onClick);
    super.destroy();
  }
}
