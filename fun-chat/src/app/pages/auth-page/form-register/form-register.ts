import Component from '../../../components/base-component';
import Button from '../../../components/button/button';
import PopupInfo from '../../popup-info/popup-info';
import Fieldset from './form-inputs/form-fieldset';
import './form-register.scss';

export default class FormRegister {
  private form: Component;

  private fieldset: Fieldset;

  private popup = new PopupInfo();

  constructor() {
    this.popup = new PopupInfo();
    this.fieldset = new Fieldset();
    const FieldsetComponent = this.fieldset.getFieldsetComponent();

    this.form = new Component(
      {
        tag: 'form',
        className: 'form-register',
      },
      FieldsetComponent,
      new Button({
        text: 'click',
        className: 'form-btn',
      }),
      new Button({
        text: 'info',
        className: 'form-btn',
        callback: () => this.popup.showPopup(),
      }),
    );
  }

  public getForm(): HTMLElement {
    return this.form.getNode();
  }
}
