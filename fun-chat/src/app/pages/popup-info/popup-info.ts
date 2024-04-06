import Component from '../../components/base-component';

const dataForPopup = {
  title: 'Веселый чат',
  describe:
    'Приложение разработано для демонстрации задания Fun Chat в рамках курса RSSchool JS/FE 2023Q3',
  link: 'https://github.com/Mitsuhitomeow',
  buttonClickText: 'Вернуться назад',
};

export default class PopupInfo {
  private popup;

  constructor() {
    this.popup = new Component(
      {
        className: 'popup-info',
      },
      new Component({
        tag: 'h1',
        className: 'popup-title',
        text: dataForPopup.title,
      }),
      new Component({
        tag: 'p',
        className: 'popup-describe',
        text: dataForPopup.describe,
      }),
    );
  }

  public getPopup() {
    return this.popup.getNode();
  }
}
