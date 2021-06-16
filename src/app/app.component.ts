import { Component } from '@angular/core';
import {EventregiService} from './eventregi.service'

declare let alertify : any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Eventregi';
  username : any
  username1 : any
  constructor(private event:EventregiService){

  }
  logoutt()
  {
    this.event.logout();
    this.username1="";
    
      alertify.alert('Thank you....!', 'You have successfully logout.....!!');
    
   
    
  }
  usernameshow()
  {
    if(Boolean(sessionStorage.getItem('authenticate')) === true)
    {
      this.username=this.event.configData.username;
    this.username1=this.username
    
    }
    else{
      alertify.alert('Error!', 'You have already logout.....!!');
      
    }
  }
  }
