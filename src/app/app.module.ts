import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { TailWindStyleComponent } from './components/tail-wind-style/tail-wind-style.component';
import {  FormsModule,ReactiveFormsModule} from '@angular/forms'

@NgModule({
  declarations: [AppComponent, AuthFormComponent, TailWindStyleComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule,ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
