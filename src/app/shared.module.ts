import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
	  ReactiveFormsModule,
	  HttpClientModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule
	 
  ],
  exports:[
  	FormsModule,
	  ReactiveFormsModule,
	  HttpClientModule,
	  MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule
  ]
})
export class SharedModule { }
