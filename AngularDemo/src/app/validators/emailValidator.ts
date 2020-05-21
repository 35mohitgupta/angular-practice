
import {  FormControl } from '@angular/forms';

const validateEmail = (control: FormControl) =>  {
    const EMAIL_REGEXP = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    
    return EMAIL_REGEXP.test(control.value) ? null : {
        emailError: {
            message: "Email is invalid"
        }
    };
}

export {validateEmail}