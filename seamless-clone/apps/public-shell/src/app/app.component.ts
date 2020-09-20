import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'seamless-clone-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'public-shell';
  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.router.config);
  }
}
