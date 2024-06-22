import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { User } from '../../core/model/object-model';
import { LoginSignupService } from '../../shared/services/login-signup.service';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-signin-signup',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    HttpClientModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    RippleModule
  ],
  templateUrl: './signin-signup.component.html',
  styleUrls: ['./signin-signup.component.css']
})
export class SigninSignupComponent implements OnInit {
  regForm: boolean = false;
  showRegistrationForm: boolean = false;
  showLoginForm: boolean = true;
  sinUpsubmitted = false;
  href: string = '';
  user_data: any;
  user_dto!: User;
  user_reg_data: any;
  signInFormValue: any = {};

  Singup: FormGroup;
  Sigin: FormGroup;

  constructor(private fb: FormBuilder, private router: Router,private loginService:LoginSignupService) {
    this.Singup = this.fb.group({
      name: ['', Validators.required],
      mobNumber: ['', Validators.required],
      age: ['', Validators.required],
      dob: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      addLine1: ['', Validators.required],
      addLine2: [''],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipcode: ['', Validators.required],
      language: ['', Validators.required],
      gender: ['', Validators.required],
      aboutYou: [''],
      uploadPhoto: [''],
      agreeTc: [false, Validators.requiredTrue],
      role: ['', Validators.required]
    });

    this.Sigin = this.fb.group({
      userEmail: ['', [Validators.required, Validators.email]],
      userPassword: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.href = this.router.url;
    if (this.href === '/sign-up') {
      this.regForm = true;
      this.showRegistrationForm = true;
      this.showLoginForm = false;
    } else if (this.href === '/sign-in') {
      this.regForm = false;
      this.showRegistrationForm = false;
      this.showLoginForm = true;
    }
  }

  onSubmitSignUp() {
    if (!this.Singup.valid) {
      this.sinUpsubmitted = true;
      return;
    }
    console.log(this.Singup.value);
  }

  onSubmitSignIn() {
    if (!this.Sigin.valid) {
      return;
    }
    console.log(this.Sigin.value);
  }

  onclick(event: MouseEvent) {
    console.log("click is ok", event);
  }

  toggleForms() {
    this.showRegistrationForm = !this.showRegistrationForm;
    this.showLoginForm = !this.showLoginForm;
  }
}


