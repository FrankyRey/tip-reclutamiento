import { Component, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from 'app/shared/auth/auth.service';
import { NgxSpinnerService } from "ngx-spinner";

//Import Model
import { User } from '../../../models/user';

//Import Service
import { UserService } from '../../../services/user.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  providers: [UserService]
})

export class LoginPageComponent {
  public user: User;
  public status: string;
  public token;
  public identity;
  loginFormSubmitted = false;
  isLoginFailed = false;

  loginForm = new FormGroup({
    username: new FormControl('guest@apex.com', [Validators.required]),
    password: new FormControl('Password', [Validators.required]),
    rememberMe: new FormControl(true)
  });


  constructor(
    private router: Router,
    private authService: AuthService,
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute,
    private _userService: UserService
  ) {
      this.user = new User(1,'','','ROLE_USER','','','','');
  }

  get lf() {
    return this.loginForm.controls;
  }

  // On submit button click
  onSubmit() {
    this.loginFormSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    /*this.spinner.show(undefined, {
      type: 'ball-triangle-path',
      size: 'medium',
      bdColor: 'rgba(0, 0, 0, 0.8)',
      color: '#fff',
      fullScreen: true
    });*/

    this.user.email = this.loginForm.value.username;
    this.user.password = this.loginForm.value.password;

    this._userService.singup(this.user).subscribe(
      response => {
        if(response.status == 'error') {
          this.status = 'error';
        } else {
          this.status = 'success';
          this.token = response;

          this._userService.singup(this.user, true).subscribe(
            response => {
              this.identity = response;
              console.log(this.token);
              console.log(this.identity);

              localStorage.setItem('token', this.token);
              localStorage.setItem('identity', JSON.stringify(this.identity));
            }
          );

          this.router.navigate(['/dashboard/dashboard1']);
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }
}
