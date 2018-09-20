import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordValidators {
    static format(control: AbstractControl): ValidationErrors | null {
        const numberRegex = /[0-9]/;
        const letterRegex = /[a-z]/;
        const password = control.value;
        if (numberRegex.test(password) && letterRegex.test(password)) {
            return null;
        }
        return {
            passwordInvalid: true
        };
    }
}
