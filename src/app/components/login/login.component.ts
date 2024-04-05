import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, HttpClientModule],
  providers: [AuthenticationService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: FormGroup;
  submitted: boolean = false;
  inValidCredentials: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      user_email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        ),
      ]),
    });
  }
  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    this.submitted = true;
    console.log(this.loginForm.value);
    this.authenticationService
      .userLogin(this.loginForm.value)
      .subscribe((data) => {
        console.log(data);
        if (data.status) {
          this.inValidCredentials = false;
          this.loginForm.reset();
          localStorage.setItem('token', data.data.token);
          // this.router.navigate(['/']);
        } else {
          this.inValidCredentials = true;
        }
      });
  }
}
