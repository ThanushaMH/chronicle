import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { provideRouter } from '@angular/router';
import { HttpClientModule, provideHttpClient,withFetch } from '@angular/common/http';
import { enableProdMode } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SidenavComponent } from './app/sidenav/sidenav.component';
import { provideAnimations } from '@angular/platform-browser/animations';
 // Adjust path if necessary



bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), 
    provideAnimations(),// Ensure your routes are provided
    HttpClientModule,
    ReactiveFormsModule, // Add ReactiveFormsModule for form support
    provideHttpClient(withFetch())  // Adds HttpClient support to your app
  ],
  
})
.catch(err => console.error(err));
