import Component from '../../../components/base-component';
import Button from '../../../components/button/button';
import Fieldset from './form-inputs/form-fieldset';
import './form-register.scss';

export default class FormRegister {
  protected form: Component;

  protected fieldset: Fieldset;

  constructor() {
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
      }),
    );
  }

  public getForm(): HTMLElement {
    return this.form.getNode();
  }
}
