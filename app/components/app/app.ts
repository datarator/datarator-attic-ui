import {Component, ViewEncapsulation} from 'angular2/core';
import {
  RouteConfig,
  ROUTER_DIRECTIVES
} from 'angular2/router';
// import {HTTP_PROVIDERS} from 'angular2/http';

import {HomeCmp} from '../home/home';
import {HomeMockCmp} from '../home_mock/home_mock';
import {AboutCmp} from '../about/about';
import {NameList} from '../../services/name_list';

@Component({
  selector: 'app',
  viewProviders: [NameList],
  templateUrl: './components/app/app.html',
  styleUrls: ['./components/app/app.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/', component: HomeCmp, as: 'Home' },
  { path: '/home_mock', component: HomeMockCmp, as: 'Home_Mock' },
  { path: '/about', component: AboutCmp, as: 'About' }
])
export class AppCmp {

  constructor() {
    //
    // a must for initiating materialize components
    //

    // see: http://materializecss.com/navbar.html
    $('.dropdown-button').dropdown();
  }
}
