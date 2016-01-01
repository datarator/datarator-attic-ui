import {Component} from 'angular2/core';

@Component({
  selector: 'home_mock',
  templateUrl: './components/home_mock/home_mock.html',
  styleUrls: ['./components/home_mock/home_mock.css']
})
export class HomeMockCmp {

  constructor() {
    //
    // a must for initiating materialize components
    //

    // see: http://materializecss.com/tabs.html
    $('ul.tabs').tabs();

    // see: http://materializecss.com/forms.html
    $('select').material_select();

  }
}

