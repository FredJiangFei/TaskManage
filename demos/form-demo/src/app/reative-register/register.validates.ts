import { FormControl, AbstractControl } from "@angular/forms";
import { Observable } from "rxjs";


export function nameAsyncValidator(control: AbstractControl): any {
    var nameExist = control.value == 'Fred';
    return Observable.of(nameExist ? { nameExist: true } : null).delay(1000);
}


export function mobileValidator(control: AbstractControl): any {
    if (control.value && control.value.includes('1')) {
        return { mobile: true };
    }
    return null;
}

export function passwordEqualValidator(group: AbstractControl): any {
    let password = group.get('password') as FormControl;
    let confirm = group.get('confirm') as FormControl;

    if (password && confirm && password.value != confirm.value) {
        return { equal: 'Password is not equal!' }
    }

    return null;
}