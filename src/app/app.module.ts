import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { RegisterComponent } from './user/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './user/login/login.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './shared/security/token.interceptor';
import {ResponseInterceptor} from './shared/security/response.interceptor';
import { ProductsComponent } from './products/products.component';
import {ProductViewComponent} from './products/product-view/product-view.component';
import {ProductItemComponent} from './products/product-item/product-item.component';
import { CartComponent } from './cart/cart.component';
import { AdminComponent } from './admin/admin.component';
import { EditProductComponent } from './admin/admin-panel/edit-product/edit-product.component';
import { AddProductComponent } from './admin/admin-panel/add-product/add-product.component';
import {AdminPanelComponent} from './admin/admin-panel/admin-panel.component';
import { OrderComponent } from './order/order.component';
import { ProfileComponent } from './user/profile/profile.component';
import { EditProfileComponent } from './user/profile/edit-profile/edit-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    ProductsComponent,
    ProductViewComponent,
    ProductItemComponent,
    CartComponent,
    AdminComponent,
    EditProductComponent,
    AddProductComponent,
    AdminPanelComponent,
    OrderComponent,
    ProfileComponent,
    EditProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}, CartComponent, EditProductComponent,
    {provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
