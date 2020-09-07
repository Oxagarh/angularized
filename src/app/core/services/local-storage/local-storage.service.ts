import { Injectable } from '@angular/core';
import { CONFIG } from 'src/app/config';

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {
  private readonly storagePrefix: string;
  
  constructor() {
    this.storagePrefix = CONFIG.storagePrefix;
  }

  public set(name: string, element: any): void {
    localStorage.setItem(`${this.storagePrefix}-${name}`, JSON.stringify(element));
  }

  public get(name: string, defaultValue: any): any {
    const item = localStorage.getItem(`${this.storagePrefix}-${name}`);
    if (!item) {
      return defaultValue;
    }
    return JSON.parse(item);
  }

  public deleteAll(): void {
    localStorage.clear();
  }

}