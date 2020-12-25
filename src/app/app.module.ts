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
import { TokenInterceptor } from './shared/auth/token.interceptor';
import {ResponseInterceptor} from './shared/auth/response.interceptor';
import { ProductsComponent } from './products/products.component';
import {ProductViewComponent} from './products/product-view/product-view.component';
import {ProductItemComponent} from './products/product-item/product-item.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    ProductsComponent,
    ProductViewComponent,
    ProductItemComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}, CartComponent,
    {provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
