import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {RPWSideMenu} from 'modules/rpw-side-menu/rpw-side-menu';

@Component({
  selector:     'my-app',
  template:     `
    <div class="row">
      <div class="col-md-2"><rpw-side-menu></rpw-side-menu></div>
      <div class="col-md-10"><router-outlet></router-outlet></div>
    </div>
  `,
  directives:   [RPWSideMenu, ROUTER_DIRECTIVES]
})

export class AppComponent {
  
}