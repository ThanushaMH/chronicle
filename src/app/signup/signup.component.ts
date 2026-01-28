import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';  // Add this import
import { SignupService } from '../services/signup.service'; // Import the service


@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports:[CommonModule,ReactiveFormsModule,HttpClientModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent {
  signUpForm: FormGroup;
  passwordVisible: boolean = false;
  passwordVisibility: boolean = false;

  countryCodes = [
    { code: '+61', name: 'Australia' },
    { code: '+55', name: 'Brazil' },
    { code: '+1', name: 'Canada' },
    { code: '+86', name: 'China' },
    { code: '+33', name: 'France' },
    { code: '+49', name: 'Germany' },
    { code: '+91', name: 'India' },
    { code: '+39', name: 'Italy' },
    { code: '+81', name: 'Japan' },
    { code: '+52', name: 'Mexico' },
    { code: '+31', name: 'Netherlands' },
    { code: '+64', name: 'New Zealand' },
    { code: '+7', name: 'Russia' },
    { code: '+27', name: 'South Africa' },
    { code: '+82', name: 'South Korea' },
    { code: '+46', name: 'Sweden' },
    { code: '+41', name: 'Switzerland' },
    { code: '+44', name: 'United Kingdom' },
    { code: '+1', name: 'United States' }
  ];

  constructor(private fb: FormBuilder, private signupService: SignupService) {
    this.signUpForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]],
      lastName: ['', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]],
      username: ['', [Validators.required, Validators.pattern(/^[A-Za-z0-9._]+$/)]],
      email: ['', [Validators.required, Validators.pattern( /^(?=.*[a-zA-Z])[a-zA-Z\d._]*@[a-zA-Z]+(\.[a-zA-Z]+)+$/)]],
      contactNumber: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      password: ['', [Validators.required, Validators.minLength(8), this.strongPassword]],
      confirmPassword: ['', Validators.required],
      countryCode: ['', Validators.required],
    }, { validators: this.passwordMatch });
  }

  strongPassword(control: any) {
    const value = control.value;
    const strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$/;
    return strongPassword.test(value) ? null : { weakPassword: true };
  }

  passwordMatch(group: FormGroup) {
    return group.get('password')?.value === group.get('confirmPassword')?.value ? null : { mismatch: true };
  }

  togglePasswordVisibility() {
    this.passwordVisibility = !this.passwordVisibility;
  }

  togglePasswordVisible() {
    this.passwordVisible = !this.passwordVisible;
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      // Encode the form data as JSON
      const formData = this.signUpForm.value;
      const jsonData = JSON.stringify(formData);

      // Base64 encode the JSON data
      const encodedData = btoa(jsonData);

      // Send the encoded data to the backend
      this.signupService.signUp(encodedData ).subscribe(
        (response) => {
          console.log('Response from backend:', response);  // Log the entire response object
          if (response.status === 200) {
            alert('User successfully signed up! Please login now.');
            // You can navigate to the home page here if you want to
            // this.router.navigate(['/home']);
          }else {
            // Handle other success cases or unexpected status codes
            alert('Unexpected response received from server.');
          }
        },
        (error) => {
          console.log('Error response:', error);  // Log the error if it's happening
          // Handle error response (status 400 or other errors)
          if (error.status === 400) {
            alert('User sign up failed.');
          } else if (error.status >= 500) {
            alert('Server error. Please try again later.');
          }  else {
            alert('An unexpected error occurred.');
          }
        }
      );
    }
  }
}
