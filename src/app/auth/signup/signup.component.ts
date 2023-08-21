import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { confirmPasswordValidator } from 'src/app/validator/confirm-password.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  constructor(  
    private formBuilder: FormBuilder,
    private router:Router
    ){}

  signupForm!:FormGroup;
  ERRORmESSAGE!:string;

  ngOnInit(){
    this.signupForm = this.formBuilder.group({
      email:['', [Validators.required, Validators.email],{updateOn:'blur'}],
      name:['',[Validators.required],{updateOn:'blur'}],
      address:['',[Validators.required],{updateOn:'blur'}],
      phone:['',[Validators.required],{updateOn:'blur'}],
      password:['',[Validators.required]],
      confirm:['',{validators:[Validators.required, confirmPasswordValidator]}]
    })
  }

  get email() {
    return this.signupForm.get('email');
  }

  get name() {
    return this.signupForm.get('name');
  }

  get address() {
    return this.signupForm.get('address');
  }

  get phone() {
    return this.signupForm.get('phone');
  }

  get password() {
    return this.signupForm.get('password');
  }

  get confirm() {
    return this.signupForm.get('confirm');
  }

  onSignUp(){}

  onCancel(){
    this.router.navigate(['/user-function/login'])
  }
}
