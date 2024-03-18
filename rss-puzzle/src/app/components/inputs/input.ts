import InputComponent from '../../utils/create-inputs';
import styles from './input.module.scss';

export const InputFirstName = new InputComponent({
  placeholder: 'First Name',
  className: `input ${styles.input__name}`,
});

export const InputLastName = new InputComponent({
  placeholder: 'Last Name',
  className: `input ${styles.input__name}`,
});
