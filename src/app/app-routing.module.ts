import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { RegistrationComponent } from './registration/registration.component';
import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SimplePageComponent } from './simple-page/simple-page.component';

import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: 'welcome-page',  component: WelcomePageComponent },
  { path: 'registration',  component: RegistrationComponent },
  { path: 'password-recovery',  component: PasswordRecoveryComponent },
  {
     path: 'simple-page',
     component:SimplePageComponent,
     canActivate: [AuthGuard]
   },
  { path: '', redirectTo: '/welcome-page', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
