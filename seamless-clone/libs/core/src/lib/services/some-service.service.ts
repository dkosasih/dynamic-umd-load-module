import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SomeServiceService {
  private id;

  constructor() {
    this.id = Math.random();
   }

  getHello() {
    return `this is SomeServiceService with ID: ${this.id}`;
  }

  getObservableOfHello() {
    return of(`this is SomeServiceService with ID: ${this.id}`);

  }


}
