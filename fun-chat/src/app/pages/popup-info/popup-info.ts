import Component from '../../components/base-component';
import Button from '../../components/button/button';
import Link from '../../components/link/link';
import PopupContainer from './popup-container';
import './popup-info.scss';

const dataForPopup = {
  title: 'Веселый чат',
  describe:
    'Приложение разработано для демонстрации задания Fun Chat в рамках курса RSSchool JS/FE 2023Q3',
  link: 'https://github.com/Mitsuhitomeow',
  buttonClickText: 'Вернуться назад',
};

const GIT_PROFILE_URL = 'https://github.com/Mitsuhitomeow';

export default class PopupInfo {
  private popup;

  private body;

  constructor() {
    this.body = document.body;
    this.popup = new PopupContainer(
      {
        className: 'popup-container',
        callback: (e) => this.clickOutsidePopup(e),
      },
      new Component(
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
        new Link({
          href: GIT_PROFILE_URL,
          className: 'popup-git--link',
        }),
        new Button({
          text: 'exit',
          className: 'popup-close--btn',
          callback: () => this.closePopup(),
        }),
      ),
    );
  }

  public getPopup() {
    return this.popup.getNode();
  }

  public showPopup() {
    this.body.append(this.getPopup());

    setTimeout(() => {
      this.popup.toggleClass('_show');
    }, 50);
  }

  private closePopup() {
    this.popup.toggleClass('_show');

    setTimeout(() => {
      this.popup.destroy();
    }, 300);
  }

  private clickOutsidePopup(event: Event) {
    const popupInfo = document.querySelector('.popup-info');

    if (!popupInfo) return;

    const isPopup = event.composedPath().includes(popupInfo);

    if (!isPopup) {
      this.closePopup();
    }
  }
}
