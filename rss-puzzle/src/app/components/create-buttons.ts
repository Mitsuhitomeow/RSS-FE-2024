import Component from './create-components';
import type { ButtonProps } from '../interfaces/form.interface';

export default class Button extends Component {
  protected onClick!: () => void;

  constructor({ text, onClick, className }: ButtonProps) {
    super({ tag: 'button', className, text });
    if (onClick) {
      this.onClick = onClick;
      this.addListener('click', this.onClick);
    }
  }

  public destroy(): void {
    this.removeListener('click', this.onClick);
    super.destroy();
  }
}
