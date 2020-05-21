import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { DataBindingComponent } from './data-binding/data-binding.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { SortItemByPipe } from './sort-item-by.pipe';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ObservablesComponent } from './observables/observables.component';
import { HttpRequestComponent } from './http-request/http-request.component'
import {HttpClientModule} from '@angular/common/http'
import { GetUserService } from './services/user-httpget-request';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ModelDrivenReactiveFormsComponent } from './model-driven-reactive-forms/model-driven-reactive-forms.component';
import { HttpPostRequestComponent } from './http-post-request/http-post-request.component';


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    DataBindingComponent,
    DirectivesComponent,
    PipesComponent,
    SortItemByPipe,
    ParentComponent,
    ChildComponent,
    ObservablesComponent,
    HttpRequestComponent,
    TemplateDrivenFormComponent,
    ModelDrivenReactiveFormsComponent,
    HttpPostRequestComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [{ 
    provide: GetUserService, 
    useClass: GetUserService 
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
