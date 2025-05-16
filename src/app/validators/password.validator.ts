import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export function hasNumeric(): ValidatorFn {
  return (control: AbstractControl) : ValidationErrors | null => {
    const value =control.value;
    if(!value){
      return null;}

    const hasLowercase = /[1-9]/.test(value);

    return !hasNumeric ? { missingNumeric : true } : null;
  };
}

export function hasUppercase(): ValidatorFn {
  return (control: AbstractControl) : ValidationErrors | null => {
    const value =control.value;
    if(!value){
      return null;}

    const hasLowercase = /[a-z]/.test(value);

    return !hasUppercase ? { missingUpperCase: true } : null;
  };
}

export function hasLowercase(): ValidatorFn {
  return (control: AbstractControl) : ValidationErrors | null => {
    const value =control.value;
    if(!value){
      return null;}

    const hasLowercase = /[A-Z]/.test(value);

    return !hasLowercase ? { missingLowerCase: true } : null;
  };
}
