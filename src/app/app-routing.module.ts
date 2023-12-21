import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { ProductComponent } from './product/product.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ServicesComponent } from './services/services.component';
import { TipsComponent } from './tips/tips.component';
import { CheckComponent } from './check/check.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CartComponent } from './cart/cart.component';
import { OrderTrackingComponent } from './order-tracking/order-tracking.component';
import { FirstComponent } from './first/first.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
{path:'',component:HomeComponent},
{path: 'forgetpassword', component:ForgetpasswordComponent},
{path:'login',component:FirstComponent},
{path:'product',component:ProductComponent},
{path:'product/productdetail/:id',component:ProductdetailComponent},
{path:'product/catalog',component:CatalogComponent},
{path:'services',component:ServicesComponent},
{path: 'tips', component:TipsComponent},
{path:'check',component:CheckComponent},
{path:'aboutus',component:AboutusComponent},
{path:'cart',component:CartComponent},
{path:'tracking',component:OrderTrackingComponent},
{path:'signup',component:SignupComponent},
{path:'profile',component:ProfileComponent}

];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
