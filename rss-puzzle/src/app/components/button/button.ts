import styles from './button.module.scss';
import Button from '../../utils/create-buttons';
import type { ButtonProps } from '../../interfaces/component.interface';

export default function ButtonComponent({ text, onClick, className, attribute }: ButtonProps) {
  return new Button({
    text,
    className: `${styles.btn} ${styles.className || ''} ${className}`,
    onClick,
    attribute,
  });
}
