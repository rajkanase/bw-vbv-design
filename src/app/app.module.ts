import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LastComponent } from './last/last.component';
import { SecondLastComponent } from './second-last/second-last.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LastComponent,
    SecondLastComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
