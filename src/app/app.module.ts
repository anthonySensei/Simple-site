import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';

import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { RegistrationComponent } from './registration/registration.component';
import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SimplePageComponent } from './simple-page/simple-page.component';

import { AppRoutingModule }  from './app-routing.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';



@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    RegistrationComponent,
    PasswordRecoveryComponent,
    SimplePageComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    UsersModule,
    AuthModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
