export class StorageService<T> {
  private storageKey: string;

  constructor(storageKey: string) {
    this.storageKey = storageKey;
  }

  private getStorageKey(key: string): string {
    return `${this.storageKey}_${key}`;
  }

  public setStorageKey(key: string, data: T): void {
    const storageKey = this.getStorageKey(key);
    localStorage.setItem(storageKey, JSON.stringify(data));
  }

  public getData(key: string): T {
    const storageKey = this.getStorageKey(key.toString());
    const data = localStorage.getItem(storageKey);
    return data ? JSON.parse(data) : null;
  }
}

export const localStorageService = new StorageService('authorization');
