import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { confirmPasswordValidator } from 'src/app/validator/confirm-password.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  constructor(  
    private formBuilder: FormBuilder,
    private router:Router,
    private userAuth:UserAuthService
    ){}

  signupForm!:FormGroup;
  errorMessage!:string;

  ngOnInit(){
    this.signupForm = this.formBuilder.group({
      email:['', [Validators.required, Validators.email],,{updateOn:'blur'}],
      name:['',[Validators.required],,{updateOn:'blur'}],
      address:['',[Validators.required],,{updateOn:'blur'}],
      phone:['',[Validators.required],,{updateOn:'blur'}],
      password:['',[Validators.required],,{updateOn:'blur'}],
      confirm:['',[Validators.required],,{updateOn:'blur'}]
    },{
      validators:confirmPasswordValidator
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

  onSignUp(){
    this.userAuth.userSignup({  
      email:this.email?.value,
      name:this.name?.value,
      address:this.address?.value,
      phone:this.phone?.value,
      password:this.password?.value
    }).subscribe(
        data=>{
          console.log(data);
          this.router.navigate(['/user-function/login'])
        },
        error=>{
          console.log(error)
          this.errorMessage = error.error.message
        }
      )
  }

  onCancel(){
    this.router.navigate(['/user-function/login'])
  }
}
