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
import { ProductAdminComponent } from './product-admin/product-admin.component';
import { ProductAdminDeleteComponent } from './product-admin-delete/product-admin-delete.component';
import { ProductAdminNewComponent } from './product-admin-new/product-admin-new.component';
import { ProductAdminUpdateComponent } from './product-admin-update/product-admin-update.component';
import { BlogAdminComponent } from './blog-admin/blog-admin.component';
import { BlogAddComponent } from './blog-add/blog-add.component';
import { BlogAdminEditComponent } from './blog-admin-edit/blog-admin-edit.component';
import { BlogUpdateComponent } from './blog-update/blog-update.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PlansComponent } from './plans/plans.component';
import { ComboComponent } from './combo/combo.component';
import { ComboNewComponent } from './combo-new/combo-new.component';
import { ComboUpdateComponent } from './combo-update/combo-update.component';
import { ComboAdminComponent } from './combo-admin/combo-admin.component';
import { ComboDetailComponent } from './combo-detail/combo-detail.component';
import { ComboeachComponent } from './comboeach/comboeach.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServiceAdminComponent } from './service-admin/service-admin.component';
import { ServiceAdminDetailComponent } from './service-admin-detail/service-admin-detail.component';
import { ServiceAdminNewComponent } from './service-admin-new/service-admin-new.component';
import { ServiceAdminDeleteComponent } from './service-admin-delete/service-admin-delete.component';
import { ServiceAdminUpdateComponent } from './service-admin-update/service-admin-update.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';

const routes: Routes = [
{path:'',component:HomeComponent},
{path: 'forgetpassword', component:ForgetpasswordComponent},
{path:'login',component:FirstComponent},
{path:'product',component:ProductComponent},
{path:'catalog/productdetail/:id',component:ProductdetailComponent},
{path:'catalog',component:CatalogComponent},
{path:'service',component:ServicesComponent},
{path: 'tips', component:TipsComponent},
{path:'check',component:CheckComponent},
{path:'aboutus',component:AboutusComponent},
{path:'cart',component:CartComponent},
{path:'tracking',component:OrderTrackingComponent},
{path:'signup',component:SignupComponent},
{path:'profile',component:ProfileComponent},
{path: 'blogadmin', component: BlogAdminComponent},
{path: 'blogs/new', component: BlogAddComponent},
{path: 'update', component: BlogAdminEditComponent},
{path: 'blogs/edit/:id', component: BlogUpdateComponent},
{path: 'blogs/detail/:id', component: PostDetailComponent},
{path: 'plans', component:PlansComponent},
{path:'combo', component:ComboComponent},
{path: 'newcombo', component:ComboNewComponent},
{path:'updatecombo/:id',component:ComboUpdateComponent},
{path:'deletecombo/:id',component:ComboUpdateComponent},
{path:'admincombo',component:ComboAdminComponent},
{path:'detailcombo/:id',component:ComboDetailComponent},
{path:'combos/:id',component:ComboeachComponent},
{path:'',component:NotFoundComponent},
{path:'product-admin',component: ProductAdminComponent},
{path:'product-admin/new',component: ProductAdminNewComponent},
{path:'product-admin/edit/:id',component: ProductAdminUpdateComponent},
{path:'product-admin/detail/:id',component: ProductAdminDetailComponent},
{path:'product-admin/delete/:id',component: ProductAdminDeleteComponent},
{path:'service/admin',component: ServiceAdminComponent},
{path:'service/admin/detail/:id',component: ServiceAdminDetailComponent},
{path:'service/admin/new',component: ServiceAdminNewComponent},
{path:'service/admin/edit/:id',component: ServiceAdminNewComponent},
{path:'service/admin/delete/:id',component: ServiceAdminDeleteComponent},
{path:'service/admin/update/:id',component: ServiceAdminUpdateComponent},
{path:'service/detail/:id',component: ServiceDetailComponent},
{path:'service/detail',component: ServiceDetailComponent},

];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
