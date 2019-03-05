import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MyFormComponent } from './my-form/my-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReativeFormComponent } from './reative-form/reative-form.component';
import { ReativeRegisterComponent } from './reative-register/reative-register.component';
import { MobileValidatorDirective } from './directives/mobile-validator.directive';
import { EqualValidatorDirective } from './directives/equal-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent,
    ReativeFormComponent,
    ReativeRegisterComponent,
    MobileValidatorDirective,
    EqualValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
