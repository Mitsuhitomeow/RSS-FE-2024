import type { InputProps } from '../../interfaces/component.interface';
import InputComponent from '../../utils/create-inputs';
import styles from './input.module.scss';

export default function InputForm({
  placeholder,
  className,
  minLength,
  required,
  pattern,
}: InputProps) {
  return new InputComponent({
    placeholder,
    className: `${className} ${styles.input__name}`,
    minLength,
    required,
    pattern,
  });
}
