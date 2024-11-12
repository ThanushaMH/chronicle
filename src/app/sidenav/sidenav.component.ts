import { Component } from '@angular/core';
import { Router,RouterModule } from '@angular/router'; // Import Router if using Angular routing
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [RouterModule,CommonModule,MatIconModule,MatButtonModule, MatMenuModule, MatIconModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
  isCollapsed = true;
  constructor(private router: Router) {} // Inject Router

  goToFriends() {
    this.router.navigate(['/friends']); // Adjust the path as needed
  }

  goToMyEntries() {
    this.router.navigate(['./my-entries']); // Adjust the path as needed
  }

  goToProfile() {
    this.router.navigate(['./profile-settings']); // Adjust the path as needed
  }

  toggleSidenav() {
    this.isCollapsed = !this.isCollapsed;
  }
}