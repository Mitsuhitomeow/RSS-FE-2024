import styles from './auth.module.scss';
import Component from '../../utils/create-components';
import Form from './registration-form/form-auth';
import ErrorValidation from './errors-validation/errors-validation';

interface AuthProps {
  className: string;
  child: Component<HTMLElement>;
}

class Authorization extends Component {
  constructor({ className, child }: AuthProps) {
    super({ tag: 'main', className });
    this.append(child);
  }
}

const AuthPage = new Authorization({
  className: `main ${styles.main}`,
  child: new Component(
    {
      tag: 'div',
      className: styles.main__container,
    },

    /**
     * @params Form - экземпляр класса Component, для создания регистрации.
     */
    Form,

    /**
     * Функция для отображения ошибки валидации.
     * @params state: 'active' | 'disabled' - вкл/выкл отображения ошибки.
     * @params dataErrors: 'string' - текст ошибки.
     */
    ErrorValidation({
      state: 'active',
      dataErrors: 'Errors: ...',
    }),
  ),
});

export default AuthPage;
