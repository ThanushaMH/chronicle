import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterOutlet, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from "../sidenav/sidenav.component";
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MatToolbarModule, MatButtonModule, MatIconModule, CommonModule, SidenavComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent{
  showNotificationButton: boolean = true;
  isLoggedIn = false; // This will be set based on your authentication logic
  showFavoritesDropdown = false; // Property to toggle favorites dropdown
  showNotificationsDropdown = false; // Property to toggle notifications dropdown
  constructor(private router: Router, private authService: AuthService) {} // Inject AuthService

  ngOnInit() {
    // Subscribe to AuthService's login status observable
    this.authService.isLoggedIn$.subscribe((status) => {
      this.isLoggedIn = status; // Update the local state
    });
  }
  
  onLogout() {
    this.authService.logout(); // Notify the service of logout
    this.router.navigate(['/login']); // Redirect to login page
  }

 /* onLogin() {
    // Call your login function here, then set isLoggedIn to true
    this.isLoggedIn = true;
    this.router.navigate(['/login']);
  }*/
  
}