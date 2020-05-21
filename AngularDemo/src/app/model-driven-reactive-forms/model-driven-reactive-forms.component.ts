import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { validateEmail } from '../validators/emailValidator';

@Component({
  selector: 'app-model-driven-reactive-forms',
  templateUrl: './model-driven-reactive-forms.component.html',
  styleUrls: ['./model-driven-reactive-forms.component.css']
})
export class ModelDrivenReactiveFormsComponent implements OnInit {

  registerForm: FormGroup;
  submitted: boolean;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', [Validators.required,Validators.minLength(4)]],
      email: ['', [Validators.required,validateEmail]],
      address: this.formBuilder.group({
        city: ['',Validators.required],
        pincode: ['', [Validators.required,Validators.min(100000),Validators.maxLength(999999)]]
      })
    })
  }

  showDetails(){
    console.log(this.registerForm);
  }
}
