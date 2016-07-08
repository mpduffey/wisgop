import {provideRouter, RouterConfig} from '@angular/router';
import {CountyProfile} from 'modules/county-profile/county-profile';
import {RPWDashboard} from 'modules/rpw-dashboard/rpw-dashboard';

export const routes: RouterConfig = [
  {path: '', component: RPWDashboard},
  {path: 'county-profile', component: CountyProfile},
  {path: 'rpw-dashboard', component: RPWDashboard}
];

export const APP_ROUTER_PROVIDERS = [provideRouter(routes)];