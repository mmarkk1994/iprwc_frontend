import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from './user/register/register.component';
import {LoginComponent} from './user/login/login.component';
import {ProductViewComponent} from './products/product-view/product-view.component';
import {CartComponent} from './cart/cart.component';

const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cart', component: CartComponent},
  {path: '', component: ProductViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
