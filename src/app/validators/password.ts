import { FormControl, FormGroup } from '@angular/forms';

export class PasswordValidator {
	static areEqual(control: FormControl) {
		let password;
		let confirmPassword;
		let valid = true;
		if(control.parent){							
			password = control.parent.get('password').value;
			confirmPassword = control.parent.get('confirm_password').value;			
		}
		if (password !== confirmPassword) {
			valid = false;
		}
		if (valid) {
			return null;
		}
		return {
			areequal: true
		}
		
 	}
}