import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SomeServiceService } from '@seamless-clone/core';

@Component({
  selector: 'seamless-clone-app-shell',
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppShellComponent implements OnInit {

  constructor(
    public someService: SomeServiceService
  ) { }

  ngOnInit(): void {
  }

}
