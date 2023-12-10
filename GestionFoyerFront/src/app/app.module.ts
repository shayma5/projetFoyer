import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { FrontOfficeModule } from './front-office/front-office.module';
import { BackOfficeModule } from './back-office/back-office.module';
import { UserModule } from './user/user.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthentificationComponent } from './authentification/authentification.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    AuthentificationComponent,
    AccessDeniedComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FrontOfficeModule,
    BackOfficeModule,
    UserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
