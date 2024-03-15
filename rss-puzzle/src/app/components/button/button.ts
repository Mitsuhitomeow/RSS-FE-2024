import styles from './button.module.scss';
import Button from '../create-buttons';
import type { ButtonProps } from '../../interfaces/form.interface';

export default function ButtonComponent({ text, onClick, className }: ButtonProps) {
  return new Button({
    text,
    className: `${styles.btn} ${styles.className || ''} ${className}`,
    onClick,
  });
}
