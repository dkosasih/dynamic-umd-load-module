import { Component, OnInit } from '@angular/core';
import { SomeServiceService } from '@seamless-clone/core';

@Component({
  selector: 'lib-prospect-home',
  templateUrl: './prospect-home.component.html',
  styleUrls: ['./prospect-home.component.scss']
})
export class ProspectHomeComponent implements OnInit {

  constructor(
    public someService: SomeServiceService
  ) { }

  ngOnInit(): void {
  }

}
