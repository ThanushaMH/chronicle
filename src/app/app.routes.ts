import { Routes } from '@angular/router';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component'; // Adjust path as necessary
import { ChangePasswordComponent } from './change-password/change-password.component'; // Adjust the path as necessary
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './signup/signup.component';
import { MyEntriesComponent } from './my-entries/my-entries.component';
import { DocComponent } from './doc/doc.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ResetPasswordComponent } from './reset-password/reset-password.component'; // Adjust the path as necessary
import { ViewEntriesComponent } from './view-entries/view-entries.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TermsOfServiceComponent } from './terms-of-service/terms-of-service.component';
import { MessageComponent } from './message/message.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

export const routes: Routes = [
  {
    path: 'profile-settings',
    component: ProfileSettingsComponent
  },
  { 
    path: 'reset-password',
   component: ResetPasswordComponent },
  {
    path: 'doc',
    component: DocComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'change-password',
    component: ChangePasswordComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'my-entries',
    component: MyEntriesComponent
  },
  {
    path: 'view-entries',
    component: ViewEntriesComponent
  },
  {
    path: 'terms-of-service',
    component: TermsOfServiceComponent
  },
  {
    path: 'message',
    component: MessageComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
