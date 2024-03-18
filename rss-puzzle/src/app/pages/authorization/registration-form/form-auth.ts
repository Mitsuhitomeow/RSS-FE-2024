import ButtonComponent from '../../../components/button/button';
import Component from '../../../utils/create-components';
import InputForm from '../../../components/inputs/input';
import styles from './form.module.scss';
import btnLogInClick from './localstorage-form';

const Form = new Component(
  {
    tag: 'form',
    className: `form ${styles.form}`,
  },

  InputForm({
    placeholder: 'First Name: Alexey',
    className: 'input',
    minLength: '3',
    required: 'required',
    pattern: '^[A-Z][a-z]{2,}$',
  }),

  InputForm({
    placeholder: 'First Name: Melnikov',
    className: 'input',
    minLength: '4',
    required: 'required',
    pattern: '^[A-Z][a-z]{3,}$',
  }),

  ButtonComponent({
    text: 'Login',
    onClick: btnLogInClick,
    className: 'button__log',
    attribute: 'submit',
  }),
);

export default Form;
