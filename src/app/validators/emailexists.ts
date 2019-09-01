import { FormControl,AbstractControl,FormGroup } from '@angular/forms';

export class EmailExistsValidator {  
  static checkEmail(control: FormControl): any {    
    return new Promise(resolve => {      
      /*User.isEmailExists(control.value).then((val) => {
        if(val != null)
          resolve({"emailtaken": true});
        else
          resolve(null);
      });*/
      resolve(null);
    });
  }
}