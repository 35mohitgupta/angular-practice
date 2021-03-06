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
import { HomeComponent } from './routing/home/home.component';
import { LoginComponent } from './routing/login/login.component';
import { RegisterComponent } from './routing/register/register.component';
import { DashboardComponent } from './routing/dashboard/dashboard.component';


import { SocialLoginModule, AuthService } from 'angularx-social-login';
import { AuthServiceConfig, GoogleLoginProvider } from 'angularx-social-login';
import { GoogleLoginComponent } from './google-login/google-login.component';

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('415946381024-77rn235jppk9hf9v9mjdcvnc2fqkbuks.apps.googleusercontent.com')
  }
])

export function providerConfig(){
  return config;
}

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
    HttpPostRequestComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    // SocialLoginModule,
    GoogleLoginComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
  AuthService,  
  { 
    provide: GetUserService, 
    useClass: GetUserService 
  },{
    provide: AuthServiceConfig,
    useFactory: providerConfig
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
