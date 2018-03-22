import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { UsersModule } from '../users/users.module';

import { AppComponent } from './app.component';
import { Common } from './utils/common.util';
import { AuthInterceptor } from './utils/interceptors/auth-interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UsersModule,
    HttpClientModule,

  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
    deps: [Injector],
    
  },
    Common],
  bootstrap: [AppComponent]
})
export class AppModule { }
