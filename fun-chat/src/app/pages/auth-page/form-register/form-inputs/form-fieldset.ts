import Component from '../../../../components/base-component';
import Input from '../../../../components/input/input';
import './form-fieldset.scss';

export default class Fieldset {
  protected fieldset: Component;

  protected legend: Component;

  protected inputLog: Input;

  protected inputPass: Input;

  constructor() {
    this.fieldset = new Component({ tag: 'fieldset', className: 'field-inputs' });
    this.legend = new Component({ tag: 'legend', className: 'field-legend', text: 'Авторизация' });
    this.inputLog = new Component(
      { className: 'field field-container--name' },
      new Component({ tag: 'label', className: 'label-log', text: 'Имя' }),
      new Input({
        type: 'input',
        className: 'input-log',
        placeholder: 'Введите имя',
      }),
    );
    this.inputPass = new Component(
      { className: 'field field-container--password' },
      new Component({ tag: 'label', className: 'label-pass', text: 'Пароль' }),
      new Input({
        type: 'input',
        className: 'input-pass',
        placeholder: 'Введите пароль',
      }),
    );

    this.fieldset.appendChildren([this.legend, this.inputLog, this.inputPass]);
  }

  public getFieldsetComponent() {
    return this.fieldset;
  }
}
