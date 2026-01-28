import { Component } from '@angular/core';
import { NavigationEnd, RouterModule, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { SidenavComponent } from "./sidenav/sidenav.component";
import { FooterComponent } from "./footer/footer.component";
import { ProfileSettingsComponent } from "./profile-settings/profile-settings.component";
import { LoginComponent } from "./login/login.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SidenavComponent, FooterComponent, ProfileSettingsComponent, RouterModule, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'fenew';
  isLoggedIn: boolean = false;
  isLoginPage: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isLoginPage = this.router.url === '/login';
        
      }
    });
  }
  // Method to set the login state
  setLoginState(state: boolean) {
    this.isLoggedIn = state;
    console.log('Login state has changed: ',this.isLoggedIn);
  }
}