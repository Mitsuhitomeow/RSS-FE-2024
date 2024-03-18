import styles from './errors-validation.module.scss';
import Component from '../../../utils/create-components';
import ImageComponent from '../../../utils/create-images';
import errorIcon from '../../../../assets/errorIcon.svg';

interface ErrorsProps {
  dataErrors: string;
}

export default function ErrorValidation({ dataErrors }: ErrorsProps) {
  return new Component(
    {
      tag: 'div',
      className: `error_form disabled ${styles.error__container}`,
    },
    new Component(
      {
        tag: 'div',
        className: `${styles.error__icon_container}`,
      },
      new ImageComponent({
        className: `${styles.error__icon}`,
        src: errorIcon,
        alt: 'Error icon',
      }),
    ),
    new Component({
      tag: 'p',
      className: `${styles.error__text}`,
      text: dataErrors,
    }),
  );
}
