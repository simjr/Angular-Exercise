import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { Tab1Component } from './tab1/tab1.component';
import { ApiService } from './api.service';
import { Tab2Component } from './tab2/tab2.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Tab1Component,
    Tab2Component
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    TabsModule.forRoot(),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ 
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
