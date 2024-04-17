import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { Component1Component } from './component1/component1.component';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component
  ],
  imports: [
    CommonModule, BrowserModule, RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
