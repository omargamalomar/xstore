import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { RegisterComponent } from './views/register/register.component';
import { LoginComponent } from './views/login/login.component';
import { ShopComponent } from './views/shop/shop.component';
import { ContactUsComponent } from './views/contact-us/contact-us.component';
import { AboutComponent } from './views/about/about.component';
import { CartComponent } from './views/cart/cart.component';
import { WishlistComponent } from './views/wishlist/wishlist.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'cart', component: CartComponent },
  { path: 'wish', component: WishlistComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
];
