import Component from '../../components/base-component';

interface PopupContainerProps {
  className: string;
  callback: (e: Event) => void;
}

export default class PopupContainer extends Component {
  constructor({ className, callback }: PopupContainerProps, ...children: Component[]) {
    super({ className, ...children });

    if (children) {
      this.appendChildren(children);
    }

    this.addListener('click', (e: Event) => {
      e.preventDefault();
      callback(e);
    });
  }
}
