import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testApp';
  topics = ['Angular','Vue','React'];
  userModel = new User('','Rob@domain.com',889989938,'','morning',true);
}
