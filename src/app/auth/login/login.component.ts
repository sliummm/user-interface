import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { UserstatusService } from 'src/app/services/userstatus.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private formBuilder: FormBuilder,
    private userAuth: UserAuthService,
    private status:UserstatusService,
    private router: Router
    ){}

    loginForm!: FormGroup;
    errorMessage!:string;

    ngOnInit(){
      this.loginForm = this.formBuilder.group({
        email:['', [Validators.required, Validators.email],{updateOn:'blur'}],
        password:['',[Validators.required],{updateOn:'blur'}]
      })
    }

    get email() {
      return this.loginForm.get('email');
    }
  
    get password() {
      return this.loginForm.get('password');
    }

    onLogin(){
      this.userAuth.userAuth({email:this.loginForm.value.email, password:this.loginForm.value.password})
      .subscribe(
      data=>{
          this.status.uid = data
          console.log(this.status.uid)
          this.router.navigate(['/home'])
      },
      error=>{
        this.status.errorMessage=error.error.message
        this.errorMessage=error.error.message
      })
    }
}
