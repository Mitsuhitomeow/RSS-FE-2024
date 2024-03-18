import { localStorageService } from '../../../services/local-storage.service';
import showError from '../errors-validation/show-error-component';

type UserTypes = {
  id: number;
  firstName: string;
  lastName: string;
  online: boolean;
  data?: 'object'; // для данных пользователя игры
};

export default function btnLogInClick() {
  const inputValues: string[] = [];
  const colletionNames = document.getElementsByTagName('input');
  const regex = /^[A-Z][a-z]{2,}$/;

  for (let i = 0; i < colletionNames.length; i += 1) {
    inputValues.push(colletionNames[i].value);
  }

  if (!(regex.test(inputValues[0].trim()) && regex.test(inputValues[1].trim()))) {
    showError();
    return;
  }

  const user: UserTypes = {
    id: 1,
    firstName: inputValues[0],
    lastName: inputValues[1],
    online: false,
  };

  const userValues = `${inputValues[0]}_${inputValues[1]}`;

  const storageAuth = localStorageService.getData('users');
  if (storageAuth === null) {
    localStorageService.setStorageKey('users', [user]);
  }

  if (Array.isArray(storageAuth)) {
    const storageId = storageAuth[storageAuth.length - 1].id;
    const storageValues = `${storageAuth[storageAuth.length - 1].firstName}_${storageAuth[storageAuth.length - 1].lastName}`;

    if (storageValues === userValues) {
      // console.log('yes');
    } else if (storageValues !== null && storageValues !== userValues) {
      user.id = storageId + 1;
      storageAuth.push(user);
      localStorageService.setStorageKey('users', storageAuth);
    }
  }

  const main = document.querySelector('main');
  if (main) {
    main.style.transform = 'translateX(-100%)';
    main.style.opacity = '.5';
  }
}
