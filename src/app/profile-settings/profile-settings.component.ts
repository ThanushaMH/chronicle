import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Router,RouterModule } from '@angular/router'; // Import Router

@Component({
  selector: 'app-profile-settings',
  standalone: true,
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.css'],
  imports: [FormsModule,RouterModule], // Import FormsModule here
})
export class ProfileSettingsComponent {
  userName: string = 'John Doe';
  firstName: string = 'John';
  lastName: string = 'Doe';
  email: string = 'john.doe@example.com';
  contactNumber: string = '123-456-7890';
  router: any;
  
  saveChanges() {
    console.log('Changes saved:', { userName: this.userName, firstName: this.firstName, lastName: this.lastName, email: this.email, contactNumber: this.contactNumber });
  }

  cancel() {
    console.log('Changes canceled');
  }

  navigateToChangePassword() {
      this.router.navigate(['/change-password']); // Navigate to Change Password page
  }
  
}

