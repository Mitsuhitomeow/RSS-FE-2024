import ButtonComponent from '../button/button';
import Component from '../create-components';
import { InputFirstName, InputLastName } from '../inputs/input';
import styles from './form.module.scss';

function btnLogInClick() {}

const Form = new Component(
  {
    tag: 'form',
    className: `form ${styles.form}`,
  },

  InputFirstName,
  InputLastName,
  ButtonComponent({
    text: 'Sign In',
    onClick: btnLogInClick,
    className: 'button__log',
  }),
);

export default Form;
