import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { LabelModule } from './label.module';
import { ButtonModule } from './button.module';
import { AppComponent }   from './app.component';
import { TestComponent }   from './test.component';
import { Test0Component }   from './test0.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';
@NgModule({
  imports: [
    BrowserModule
    , LabelModule
    , AppRoutingModule
    , ButtonModule
  ]
  , declarations: [
    AppComponent
    , TestComponent
    , Test0Component
    , routedComponents
  ]
  , bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
