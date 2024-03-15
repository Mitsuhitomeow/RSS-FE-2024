import styles from './auth.module.scss';
import Component from '../../components/create-components';
import Form from './registration-form/form-auth';

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
    Form,
  ),
});

export default AuthPage;
