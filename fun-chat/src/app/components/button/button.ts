import Component from '../base-component';

interface ButtonProp {
  text: string;
  className: string;
  callback?: (e: Event) => void;
}

export default class Button extends Component {
  constructor({ text, className, callback }: ButtonProp) {
    super({ tag: 'button', className, text });

    if (callback) {
      this.addListener('click', (e) => {
        e.preventDefault();
        callback(e);
      });
    }
  }
}
