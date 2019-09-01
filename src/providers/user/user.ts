import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable()
export class User {
  _user: any;
  constructor(public storage: Storage) { }  
  login(accountInfo: any) {
	return new Promise((resolve, reject)=> {
  		this.storage.get(accountInfo.email).then((val) => {
  			if(val != null){
  				var _password = val.password
  				if(_password == accountInfo.password){
  					let userData = {name:val.name, email:val.email};
          			this._loggedIn(userData);
  					resolve(userData);		
  				}else{
  					reject("invalid password");	
  				}
  			}else{
  				reject("invalid email");
  			}  			
  		});
  	});
  }

  isEmailExists(email: any){  	
  	return new Promise((resolve, reject)=> {
  		this.storage.get(email).then((val) => {  			
			if(val == null){
				resolve({"emailtaken":false});
			}else{
				resolve({"emailtaken":true});
			}
  		}).catch(e => {
  			reject(null);
  		});	
  	});
  }

  Register(accountInfo: any) {
    return new Promise((resolve)=> {
		this.storage.set(accountInfo.email,{name:accountInfo.name,password:accountInfo.password}).then((val) => {			
			resolve(accountInfo);
		});
  	});
  }
  /**
   * Log the user out, which forgets the session
   */
  logout() {
    this._user = null;
  }
  /**
   * Process a login/signup response to store user data
   */
  _loggedIn(resp) {
    this._user = resp;
    
  }
}