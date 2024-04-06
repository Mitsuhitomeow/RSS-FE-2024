import FormRegister from './form-register/form-register';

export default class AuthorizationPage {
  private form: FormRegister;

  private node: HTMLElement;

  constructor() {
    this.form = new FormRegister();
    this.node = this.form.getForm();
  }

  public getNode() {
    return this.node;
  }
}
