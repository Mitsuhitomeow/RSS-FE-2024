import type { ImageProps } from '../interfaces/component.interface';
import Component from './create-components';

export default class ImageComponent extends Component {
  constructor({ className, src, alt, callback }: ImageProps) {
    super({ tag: 'img', className });

    if (alt) {
      this.setAttribute('alt', alt);
    }

    this.setAttribute('src', src);

    if (callback) {
      this.addListener('click', callback);
    }
  }
}
