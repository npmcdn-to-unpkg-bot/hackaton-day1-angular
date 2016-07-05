// app/weapons.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Cart } from '../cart.component';

@Component({
    selector: 'app-home',
    providers: [],
    directives: [ROUTER_DIRECTIVES, Cart],
    templateUrl: 'templates/home.html',
    styleUrls: []
})
export class HomeComponent {
  private componentName = 'HomeComponent';
  private subscription: Subscription;
  private footerHidden:any = false;

  constructor() {
  }

  ngOnInit() {}

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }
}