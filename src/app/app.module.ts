import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SampleComponent } from './home/Inline/sample/sample.component';
import { TestComponent } from './home/Inline/Test.component';
import { LoginComponent } from './login/login.component';
import { EventComponent } from './event/event.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmpComponent } from './emp/emp.component';
import { StructComponent } from './struct/struct.component';
import { TdfdemoComponent } from './tdfdemo/tdfdemo.component';
import { MyapiService } from './myapi.service';
import{HttpClientModule} from "@angular/common/http";
import { ClientComponent } from './client/client.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorComponent } from './error/error.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { ProjectInsuranceApplicationComponent } from './project-insurance-application/project-insurance-application.component';
import { ProjectAboutComponent } from './project-about/project-about.component';
import { ProjectContactComponent } from './project-contact/project-contact.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    TestComponent,
    SampleComponent,
    EventComponent,
    EmpComponent,
    StructComponent,
    TdfdemoComponent,
    ClientComponent,
    ErrorComponent,
    Child1Component,
    Child2Component,
    ReactiveComponent,
    ProjectInsuranceApplicationComponent,
    ProjectAboutComponent,
    ProjectContactComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [MyapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }