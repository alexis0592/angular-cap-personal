import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../dashboard/components/dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { ItemListComponent } from '../dashboard/components/dashboard/item-list/item-list.component';

const appRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    DashboardComponent
  ],
  declarations: [DashboardComponent, ItemListComponent]
})
export class DashboardModule { }
