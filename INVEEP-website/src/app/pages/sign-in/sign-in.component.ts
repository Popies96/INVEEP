import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  loginForm : FormGroup ;
constructor(private authService: AuthService , private fb : FormBuilder , private router:Router) {
this.loginForm = this.fb.group({
  email: ['', [Validators.required, Validators.email]],
  password: ['', [Validators.required, Validators.minLength(6)]],

});
}
login(){
  if(this.loginForm.invalid){ console.error('form is not valid')
    return;
  }
  this.authService.login(this.loginForm.value).subscribe(
    (response) => {
      console.log('log In success:', response);
      this.router.navigate(['/shop']);
    },
    (error) => {
      console.error('Error:', error);
    }
  );
}

}
