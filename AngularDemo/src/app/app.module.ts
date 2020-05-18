import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { DataBindingComponent } from './data-binding/data-binding.component';

import {FormsModule} from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component'

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    DataBindingComponent,
    DirectivesComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
