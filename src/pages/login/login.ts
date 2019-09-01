import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { GroupValidator } from '../../app/validators/groupvalidator';

import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';
import { User } from '../../providers/user/user';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {  
  
  loginForm:FormGroup;  ;

  validation_messages = {      
      'email': [
        { type: 'email', message: 'Enter valid Email' }
      ],
      'password': [        
        { type: 'required', message: 'Enter password'}
      ]      
  }

  constructor(public navCtrl: NavController,
    public user: User, 
    public toastCtrl: ToastController, 
    public formBuilder: FormBuilder, 
    public storage: Storage,) {
    if(this.user._user != null){
      this.navCtrl.push(HomePage);
    }
    this.loginForm = formBuilder.group({      
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.compose([Validators.required])]
    });
  }
  gotoRegister(){
    this.navCtrl.push(RegisterPage);
  }
  doLogin() {
    if(!this.loginForm.valid){            
      GroupValidator.validateAllFormFields(this.loginForm);
      return false;
      //console.log(this.registerForm.value);
    } else {
      var email =  this.loginForm.get('email').value;
      var password = this.loginForm.get('password').value; 

      var accountInfo = {email:email,password:password};
      this.user.login(accountInfo).then((val) => {
        this.navCtrl.push(HomePage);  
      }).catch(e => {
        let toast = this.toastCtrl.create({
          message: "Invalid email/password.",
          duration: 3000,
          position: 'top',
          cssClass: 'toast-danger'
        });
        toast.present();
      });
      return false;
    }
  }
}