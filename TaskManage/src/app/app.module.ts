import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { MatIconRegistry } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { loadSvgResoures } from './_utils/svg.util';
import { AvatarSelectComponent } from './_customer_controls/avatar-select/avatar-select.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { ShareModule } from './share.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NotFoundComponent,
    AvatarSelectComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ShareModule,
    AppRoutingModule
  ],
  providers: [ErrorInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ir: MatIconRegistry, ds: DomSanitizer) {
    loadSvgResoures(ir, ds);
  }
}
