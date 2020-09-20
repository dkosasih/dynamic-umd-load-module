import { Component, OnInit } from '@angular/core';
import { SomeServiceService } from '@seamless-clone/core';

@Component({
  selector: 'lib-prospect-lazy',
  templateUrl: './prospect-lazy.component.html',
  styleUrls: ['./prospect-lazy.component.css']
})
export class ProspectLazyComponent implements OnInit {

  constructor(public someService: SomeServiceService) { }

  ngOnInit(): void {
  }

}
