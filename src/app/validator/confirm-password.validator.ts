import {
    AbstractControl,
    ValidationErrors,
    ValidatorFn,
  } from '@angular/forms';
  
  export const confirmPasswordValidator: ValidatorFn = (
    control: AbstractControl
  ): ValidationErrors | null => {

    let password = control.get('password');
    let confirm = control.get('conform');
    if(password && confirm && password?.value != confirm?.value){

        return {
            PasswordNoMatch: true
        };
    }

    return null
  };