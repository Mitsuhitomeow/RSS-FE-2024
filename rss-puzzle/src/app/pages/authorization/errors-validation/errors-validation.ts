import Component from '../../../utils/create-components';
import ImageComponent from '../../../utils/create-images';

type StateProps = 'active' | 'disabled';

interface ErrorsProps {
  state: StateProps;
  dataErrors: string;
}

export default function ErrorValidation({ state, dataErrors }: ErrorsProps) {
  return new Component(
    {
      tag: 'div',
      className: `error_container ${state}`,
    },
    new Component({
      tag: 'img',
      className: 'error__img-icon',
    }),
    new Component({
      tag: 'p',
      className: 'error__img',
      text: dataErrors,
    }),
    new ImageComponent({
      className: 'error__img-disabled',
      src: '',
      alt: '',
      callback: null,
    }),
  );
}
