import { Component, OnInit } from '@angular/core';
import { SomeServiceService } from '@seamless-clone/core';

@Component({
  selector: 'lib-prospect-home',
  templateUrl: './prospect-home.component.html',
  styleUrls: ['./prospect-home.component.scss']
})
export class ProspectHomeComponent implements OnInit {
  val: string = '';

  constructor(
    public someService: SomeServiceService
  ) { }

  ngOnInit(): void {
  }

  emit() {
    console.log('emitting', this.val);
    this.someService.emitObservable(this.val);
  }

}
