import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; // Reactive and Forms modules
import { CommonModule } from '@angular/common'; // Import CommonModule for ngIf, ngFor

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
  imports: [ReactiveFormsModule, FormsModule, CommonModule], // Include CommonModule here
})
export class ForgotPasswordComponent implements OnInit 
{
  forgotPasswordForm!: FormGroup;
  otpSent = false;
  otpVerified = false;
  otp: string = '';  // For OTP input
  otpError = false;
  passwordMismatch = false;
  passwordForm!: FormGroup;

  // Toggle visibility states
  newPasswordVisible: boolean = false;
  confirmPasswordVisible: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void 
  {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });

    this.passwordForm = this.fb.group({
      newPassword: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern('^(?=.[a-z])(?=.[A-Z])(?=.\\d)(?=.[@$!%?&])[A-Za-z\\d@$!%?&]{8,}$'),
        ],
      ],
      confirmPassword: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.forgotPasswordForm.valid) {
      const email = this.forgotPasswordForm.get('email')?.value;
      console.log('Submitted email:', email);
      this.otpSent = true; // Simulate OTP sent
    }
  }

  verifyOtp(): void {
    // Simulate OTP verification (hardcoded as '123456' for now)
    console.log(this.otp);
    if (this.otp === '123456') {
      this.otpVerified = true;
    } else {
      this.otpVerified = false;
      this.otpError = true;
    }
  }

  resetPassword(): void {
    if (this.passwordForm.valid) {
      const newPassword = this.passwordForm.get('newPassword')?.value;
      const confirmPassword = this.passwordForm.get('confirmPassword')?.value;

      if (newPassword === confirmPassword) {
        // Call the backend API for password reset
        console.log('Password reset successful!');
      } else {
        this.passwordMismatch = true;
      }
    }
  }

  // Toggle functions for password visibility
  toggleNewPasswordVisibility(): void {
    this.newPasswordVisible = !this.newPasswordVisible;
  }

  toggleConfirmPasswordVisibility(): void {
    this.confirmPasswordVisible = !this.confirmPasswordVisible;
  }
}