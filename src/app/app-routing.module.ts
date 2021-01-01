import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from './user/register/register.component';
import {LoginComponent} from './user/login/login.component';
import {ProductViewComponent} from './products/product-view/product-view.component';
import {CartComponent} from './cart/cart.component';
import {AdminComponent} from './admin/admin.component';
import {EditProductComponent} from './admin/admin-panel/edit-product/edit-product.component';
import {AddProductComponent} from './admin/admin-panel/add-product/add-product.component';
import {AdminGuardService} from './shared/security/guards/admin-guard.service';
import {AdminPanelComponent} from './admin/admin-panel/admin-panel.component';

const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cart', component: CartComponent},
  {path: 'admin', component: AdminComponent, canActivateChild: [AdminGuardService], children: [
      {path: 'panel', component: AdminPanelComponent},
      {path: 'product/:id/edit', component: EditProductComponent},
      {path: 'product/add', component: AddProductComponent}
    ]},
  {path: '', component: ProductViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
