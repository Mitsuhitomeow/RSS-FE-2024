import ButtonComponent from '../../../components/button/button';
import Component from '../../../utils/create-components';
import { InputFirstName, InputLastName } from '../../../components/inputs/input';
import styles from './form.module.scss';
import btnLogInClick from './localstorage-form';

const Form = new Component(
  {
    tag: 'form',
    className: `form ${styles.form}`,
  },

  InputFirstName,
  InputLastName,
  ButtonComponent({
    text: 'Login',
    onClick: btnLogInClick,
    className: 'button__log',
    attribute: 'button',
  }),
);

export default Form;
