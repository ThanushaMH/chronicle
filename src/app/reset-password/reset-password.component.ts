import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
//import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  standalone: true, // Marking the component as standalone
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
  imports: [ReactiveFormsModule] // Import ReactiveFormsModule here
})
export class ResetPasswordComponent {
  resetPasswordForm: FormGroup;
  otpSent = false;
  loading = false;
  message: string = '';

  constructor(
    private fb: FormBuilder,
   // private authService: AuthService,
    private router: Router
  ) {
    this.resetPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      otp: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup) {
    return form.get('newPassword')?.value === form.get('confirmPassword')?.value 
      ? null : { 'mismatch': true };
  }

  sendOtp() {
   /* if (this.resetPasswordForm.controls['email'].valid) {
      this.loading = true;
      this.authService.sendOtp(this.resetPasswordForm.controls['email'].value)
        .subscribe(
          () => {
            this.otpSent = true;
            this.loading = false;
            this.message = 'OTP sent to your email.';
          },
          error => {
            this.loading = false;
            this.message = 'Error sending OTP.';
          }
        );
    }*/
  }

  changePassword() {
   /* if (this.resetPasswordForm.valid) {
      this.loading = true;
      const { email, otp, newPassword } = this.resetPasswordForm.value;
      this.authService.changePassword(email, otp, newPassword).subscribe(
        () => {
          this.loading = false;
          this.message = 'Password changed successfully.';
          setTimeout(() => this.router.navigate(['/login']), 2000);
        },
        error => {
          this.loading = false;
          this.message = 'Error changing password.';
        }
      );
    }*/
  }
}
