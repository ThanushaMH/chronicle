import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
//import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reset-password',
  standalone: true, // Marking the component as standalone
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
  imports: [ReactiveFormsModule,CommonModule] // Import ReactiveFormsModule here
})
export class ResetPasswordComponent {
  resetPasswordForm: FormGroup;
  otpSent = false;
  loading = false;
  message: string = '';
  passwordVisible: boolean = false;
  passwordVisibility: boolean = false;

  constructor(
    private fb: FormBuilder,
   // private authService: AuthService,
    private router: Router
  ) {
    this.resetPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern( /^(?=.*[a-zA-Z])[a-zA-Z\d._]*@[a-zA-Z]+(\.[a-zA-Z]+)+$/)]],
      otp: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(8), this.strongPassword]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  strongPassword(control: any) {
    const value = control.value;
    const strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$/;
    return strongPassword.test(value) ? null : { weakPassword: true };
  }

  passwordMatchValidator(form: FormGroup) {
    return form.get('newPassword')?.value === form.get('confirmPassword')?.value 
      ? null : { 'mismatch': true };
  }

  togglePasswordVisibility() {
    this.passwordVisibility = !this.passwordVisibility;
  }

  togglePasswordVisible() {
    this.passwordVisible = !this.passwordVisible;
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
