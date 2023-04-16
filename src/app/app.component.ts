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

  topicHasError = true;


  userModel = new User('','Rob@domain.com',8899899388,'default','morning',true);
  validateTopic(value: string){
    if(value === 'default'){
      this.topicHasError = true;
    }else{
      this.topicHasError = false;
    }
  }
}
