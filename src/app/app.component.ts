import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testingProj';
  currDate = moment().format('YYYY-MM-DD');

  getZero() {
    return 0;
  }

  isNegative(num) {
    if (num >= 0) {
      return false;
    } else {
      return true;
    }
  }

  getColor(num) {
    if (num === 1) {
      return 'blue';
    } else if (num === 2) {
      return 'green';
    } else {
      return 'orange';
    }
  }
}
