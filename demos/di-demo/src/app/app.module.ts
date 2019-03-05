import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductService } from './services/product.service';
import { LogService } from './services/log.service';
import { AppleService } from './services/apple.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: 'IS_DEV', useValue: true },
    LogService,
    {
      provide: ProductService,
      deps: ['IS_DEV', LogService],
      useFactory: (isDev, log) => {
        if (isDev) {
          log.logHistory('ProductService');
          return new ProductService();
        } else {
          log.logHistory('AppleService');
          return new AppleService();
        }
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
