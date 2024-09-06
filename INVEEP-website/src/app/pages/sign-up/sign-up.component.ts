import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  signUpForm: FormGroup;
  constructor(private authService: AuthService, private fb: FormBuilder ,private router : Router) {
    this.signUpForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      websiteUrl: ['', [Validators.pattern(/^(http|https):\/\/[^ "]+$/)]],
      cin: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]], 
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      location: [''],
      profile_image: [''], // Optional, no validation
      role: ['visitor'], // Default value
    });
  }

  validatePhoneInput(event: KeyboardEvent) {
  const charCode = event.which ? event.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    event.preventDefault();
  }}
  
goToLogin(){
  this.router.navigate(['/signIn'])
}
  register() {
     this.signUpForm.markAllAsTouched();
      if (this.signUpForm.invalid) {
        console.error('Form is invalid. Please fill in all required fields.');
        return; 
      }
    this.authService.register(this.signUpForm.value).subscribe(
      (response) => {
        console.log('User registered successfully:', response);
        this.router.navigate(['/signin'])
        
      },
      (error) => {
        console.error('Error registering user:', error);
      }
    );
  }

  
}
