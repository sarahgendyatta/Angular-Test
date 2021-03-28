import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes =
  [
    { path: 'nav-bar', component: NavBarComponent },
    { path: 'product', component: ProductsComponent },
    { path: 'order', component: OrdersComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
