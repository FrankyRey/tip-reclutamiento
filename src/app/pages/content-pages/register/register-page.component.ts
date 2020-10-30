import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

// import custom validator to validate that password and confirm password fields match
import { MustMatch } from '../../../shared/directives/must-match.validator';
import { Router } from '@angular/router';

//Import Model
import { User } from '../../../models/user';

//Import Service
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
  providers: [UserService]
})

export class RegisterPageComponent implements OnInit {
  public user: User;
  public status: string;
  registerFormSubmitted = false;
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private _userService: UserService
  ) {
    this.user = new User(1,'','','ROLE_USER','','','','');
  }

  ngOnInit() {
    console.log(this._userService.test());
    this.registerForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  get rf() {
    return this.registerForm.controls;
  }


  //  On submit click, reset field value
  onSubmit() {
    this.registerFormSubmitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    this.user.nombre = this.registerForm.value.nombre;
    this.user.apellidos = this.registerForm.value.apellidos;
    this.user.email = this.registerForm.value.email;
    this.user.password = this.registerForm.value.password;

    this._userService.register(this.user).subscribe(
      response => {
        if(response.status == 'success') {
          this.status = 'success'
          this.router.navigate(['/pages/login']);
        } else {
          this.status = 'error';
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }
}
