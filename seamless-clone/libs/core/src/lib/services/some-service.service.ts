import { Injectable, OnDestroy } from '@angular/core';
import { of, Subject } from 'rxjs';
import { share, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SomeServiceService {
  private id;
  private val: string = 'initial';

  private subj: Subject<string> = new Subject();
  obs = this.subj.asObservable().pipe(shareReplay(1));

  constructor() {
    this.id = Math.random();
  }

  getHello() {
    return `this is SomeServiceService with ID: ${this.id}`;
  }

  getObservableOfHello() {
    return of(`this is SomeServiceService with ID: ${this.id}`);
  }

  getObservable() {
    return this.subj.asObservable().pipe(shareReplay(1));
  }

  emitObservable(val: string) {
    this.subj.next(val);
  }

  setVal(val: string) {
    this.val = val;
  }

  getValue() {
    return this.val;
  }
}

