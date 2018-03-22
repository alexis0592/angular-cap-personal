import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { UsersModule } from '../users/users.module';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { Common } from './utils/common.util';
import { AuthInterceptor } from './utils/interceptors/auth-interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DashboardModule } from '../dashboard/dashboard.module';

const appRoutes:Routes = [
  {
    path:'',
    loadChildren:'./../users/users.module#UsersModule'
  },
  {
    path: 'dashboard',
    loadChildren: './../dashboard/dashboard.module#DashboardModule'
  }
]


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UsersModule,
    HttpClientModule,
    RouterModule.forChild(appRoutes),
    DashboardModule
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
