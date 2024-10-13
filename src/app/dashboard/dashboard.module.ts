import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { PlaceBidComponent } from './place-bid/place-bid.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'details/:id',
    component: ProductDetailsComponent,
  }
];

@NgModule({
  declarations: [
    DashboardComponent,
    AccountComponent,
    ProductDetailsComponent,
    PlaceBidComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
