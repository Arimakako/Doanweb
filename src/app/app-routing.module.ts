import { ProductAdminDetailComponent } from './product-admin-detail/product-admin-detail.component';
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
import { PlansComponent } from './plans/plans.component';
import { ComboComponent } from './combo/combo.component';
import { ComboNewComponent } from './combo-new/combo-new.component';
import { ComboUpdateComponent } from './combo-update/combo-update.component';
import { ComboAdminComponent } from './combo-admin/combo-admin.component';
import { ComboDetailComponent } from './combo-detail/combo-detail.component';
import { ComboeachComponent } from './comboeach/comboeach.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { ProductAdminComponent } from './product-admin/product-admin.component';
import { ProductAdminNewComponent } from './product-admin-new/product-admin-new.component';
import { ProductAdminUpdateComponent } from './product-admin-update/product-admin-update.component';
import { ProductAdminDeleteComponent } from './product-admin-delete/product-admin-delete.component';

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
{path:'profile',component:ProfileComponent},
{path: 'plans', component:PlansComponent},
{path:'combo', component:ComboComponent},
{path: 'newcombo', component:ComboNewComponent},
{path:'updatecombo/:id',component:ComboUpdateComponent},
{path:'deletecombo/:id',component:ComboUpdateComponent},
{path:'admincombo',component:ComboAdminComponent},
{path:'detailcombo/:id',component:ComboDetailComponent},
{path:'combos/:id',component:ComboeachComponent},
{path:'**',component:NotFoundComponent},
{path:'product-admin',component: ProductAdminComponent},
{path:'product-admin/new',component: ProductAdminNewComponent},
{path:'product-admin/edit/:id',component: ProductAdminUpdateComponent},
{path:'product-admin/detail/:id',component: ProductAdminDetailComponent},
{path:'product-admin/delete/:id',component: ProductAdminDeleteComponent}

];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
