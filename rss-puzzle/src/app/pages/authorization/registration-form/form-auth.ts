import ButtonComponent from '../../../components/button/button';
import Component from '../../../components/create-components';
import { InputFirstName, InputLastName } from '../../../components/inputs/input';
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
    attribute: 'button',
  }),
);

export default Form;
