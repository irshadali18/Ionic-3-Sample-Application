import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Storage } from '@ionic/storage';

import { LoginPage } from '../login/login';

import { PasswordValidator } from '../../app/validators/password';
import { EmailExistsValidator } from '../../app/validators/emailexists';
import { GroupValidator } from '../../app/validators/groupvalidator';

import { User } from '../../providers/user/user';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  submitAttempt: boolean = false;
  registerForm:FormGroup;
  
  validation_messages = {
      'name': [
        { type: 'maxlength', message: 'Name should have maximum 100 characters' },
        { type: 'required', message: 'Please enter your name.' }
      ],
      'email': [
        { type: 'email', message: 'Enter valid Email' },
        { type: 'emailtaken', message: 'Specified email is already in use'}
      ],
      'password': [
        { type: 'minlength', message: 'Password must be at least 6 characters long' },
        { type: 'required', message: 'Please enter your password'}
      ],
      'confirm_password' : [
        { type: 'areequal', message: 'Password and confirm password don\'t match'}
      ]      
  }

  constructor(public navCtrl: NavController, 
      public user: User, 
      public toastCtrl: ToastController, 
      public formBuilder: FormBuilder, 
      public storage: Storage
    ) {

    if(this.user._user != null){
      this.navCtrl.push(HomePage);
    }

    this.registerForm = formBuilder.group({
      name: ['', Validators.compose([Validators.maxLength(100), Validators.required])],
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])],
      confirm_password: ['', Validators.compose([Validators.minLength(6), Validators.required, PasswordValidator.areEqual])]
    });
  }
  //,EmailExistsValidator.checkEmail
  gotoLogin(){
    this.navCtrl.push(LoginPage);
  }
  doRegister() {
    if(!this.registerForm.valid){
      GroupValidator.validateAllFormFields(this.registerForm);      
      return false;
    } else {
      var name = this.registerForm.get('name').value;
      var email =  this.registerForm.get('email').value;
      var password = this.registerForm.get('password').value; 
      ///////////////////////////////////////////////////////  

      var accountInfo = {name:name,email:email,password:password};

      this.user.isEmailExists(email).then((val:any) => {
        if(val != null){
          if(val.emailtaken){
            let toast = this.toastCtrl.create({
              message: "This email is already in use.",
              duration: 3000,
              position: 'top',
              cssClass: 'toast-danger'
            });
            toast.present();
          }else{
            this.user.Register(accountInfo).then((data) =>{
              this.storage.set(email,{name:name,password:password});
              let toast = this.toastCtrl.create({
                message: "Registered successfully.",
                duration: 3000,
                position: 'top',
                cssClass: 'toast-success'
              });
              toast.present();
              this.navCtrl.push(LoginPage);
            });
          }
        }
      }).catch(e => {
        let toast = this.toastCtrl.create({
          message: "Oops something went wrong.",
          duration: 3000,
          position: 'top',
          cssClass: 'toast-danger'
        });
        toast.present();
      });
      return false;      
      //////////////////////////////////////////////////////
    }
  }  
}
