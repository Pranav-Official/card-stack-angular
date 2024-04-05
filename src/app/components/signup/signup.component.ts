import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  providers: [AuthenticationService],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  signUpForm: FormGroup;
  submitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    this.signUpForm = this.fb.group({
      user_fullname: new FormControl('', [Validators.required]),
      user_email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
        ),
      ]),
      confirmPassword: new FormControl('', [Validators.required]),
    });
  }
  onSubmit() {
    if (this.signUpForm.invalid) {
      return;
    }
    if (
      this.signUpForm.value.password !== this.signUpForm.value.confirmPassword
    ) {
      return;
    }
    this.submitted = true;
    console.log(this.signUpForm.value);
    this.authenticationService
      .userSignup(this.signUpForm.value)
      .subscribe((data) => {
        console.log(data);
        if (data.status) {
          this.signUpForm.reset();
          localStorage.setItem('token', data.data.token);
          this.router.navigate(['/']);
        }
      });
  }
}
