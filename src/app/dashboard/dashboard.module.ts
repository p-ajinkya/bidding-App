import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  }
];

@NgModule({
  declarations: [
    DashboardComponent,
    AccountComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class DashboardModule { }
