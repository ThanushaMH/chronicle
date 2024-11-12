import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { RouterModule,RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports:[FormsModule,RouterModule,RouterOutlet],
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
})
export class ChangePasswordComponent {
  oldPassword: string = '';
  newPassword: string = '';
  confirmPassword: string = '';

  onSubmit() {
    // Handle the form submission logic here
    console.log('Old Password:', this.oldPassword);
    console.log('New Password:', this.newPassword);
    console.log('Confirm Password:', this.confirmPassword);
  }
}