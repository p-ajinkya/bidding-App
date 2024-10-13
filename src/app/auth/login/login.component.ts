import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../../app/common-services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) { }

  loginForm: FormGroup;
  submitted: boolean = false;
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onLoginClick(){
    this.submitted = true;
    console.log(this.loginForm.controls)
    if (this.loginForm.valid) {
      let usersArray: any = [];
      const { email, password } = this.loginForm.value;
      this.loginService.login().subscribe({
        next: (response) => {
          usersArray = response;
          const user = usersArray?.find(user => user.email === email && user.password === password);
          if(user){
            console.log(user);
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('allusers', JSON.stringify(usersArray))
            this.router.navigate(['/dashboard']);
          }
        },
        error: (error) => {
          console.error('Login failed', error);
        }
      });
    }
  }

}
