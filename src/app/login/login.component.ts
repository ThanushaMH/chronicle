import { CommonModule} from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,ReactiveFormsModule} from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { AuthService } from '../services/auth.service';  // Import the AuthService

@Component({
  selector: 'app-login',
  standalone:true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [ReactiveFormsModule,CommonModule,RouterModule] 
})
export class LoginComponent {
  loginForm: FormGroup;
  passwordVisible: boolean = false;
  isLoggedIn=false;

  constructor(private fb: FormBuilder,private router: Router,private authService: AuthService) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, this.passwordValidator]],
    });
  }

  // Custom password validator
  passwordValidator(control: any) {
    const password = control.value;
    return password && password.length >= 8 ? null : { invalidPassword: true };
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  onLogin() {
    if (this.loginForm.valid)  {
      const loginData = this.loginForm.value;

      // Send the login data as JSON to the backend using AuthService
      this.authService.login(loginData.username, loginData.password).subscribe(
        (response) => {
          console.log('Login successful!', response);
          this.router.navigate(['./home']); // Navigate to home or desired page after successful login
        },
        (error) => {
          console.error('Login failed:', error);
        }
      );
    }
  }

  onCancel() {
    // Handle cancel logic
    this.loginForm.reset();
  }
}