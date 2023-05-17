import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './homepage/login/login.component';
import { WelcomeScreenComponent } from './homepage/welcome-screen/welcome-screen.component';
import { RegisterComponent } from './homepage/register/register.component';
import { MainScreenComponent } from './homepage/main-screen/main-screen.component';
import { SettingsComponent } from './settings/settings.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ToastComponent } from './toast/toast.component';


@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent, 
    LoginComponent, 
    WelcomeScreenComponent, 
    RegisterComponent, 
    MainScreenComponent,
    SettingsComponent,
    HomepageComponent,
    ToastComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule.forRoot([
      { path: '', component: HomepageComponent },
      { path: 'settings', component: SettingsComponent },
    ])
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
