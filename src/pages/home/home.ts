import { Component } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { HttpClient, HttpClientModule, HttpClientJsonpModule, HttpHeaders } from '@angular/common/http';

import { Config } from '../../app/config';
import { User } from '../../providers/user/user';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage  {    
	public userName:string;
	constructor(public platform: Platform, public navCtrl: NavController, public user:User, public http: HttpClient) {
  		
  	}
  	ngOnInit(){
  		this.userName = this.user._user.name;
  	}
  	sendPushNotification(){		
      	const oneSignalApiUrl = Config.oneSignalApiUrl+'notifications';
      	const httpOptions = {
		  headers: new HttpHeaders({
		    'Content-Type':  'application/json',
		    'Authorization': 'Basic '+Config.oneSignalRestApiKey
		  })
		};
		let apiData = {
				headings:{en: "Hello"}, contents: {en: "Hello its just awesome!"},    							
				included_segments: ["All"],
				excluded_segments: ["None"],
				app_id: Config.oneSignalAppId 	
		  	};
      	return this.http.post(oneSignalApiUrl, apiData, httpOptions).subscribe((res) => {
      		console.log(res);
	    },error => {
	    	console.log("Error whole push");
	    });	
  	}
  	logout(){
	  	this.user.logout();
	  	this.navCtrl.push(LoginPage);
  	}
}
