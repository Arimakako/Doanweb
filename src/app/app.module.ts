import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { ProductComponent } from './product/product.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ServicesComponent } from './services/services.component';
import { TipsComponent } from './tips/tips.component';
import { FeaturedarticleComponent } from './featuredarticle/featuredarticle.component';
import { CheckComponent } from './check/check.component';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { ComboComponent } from './combo/combo.component';
import { PlansComponent } from './plans/plans.component';
import { OrderTrackingComponent } from './order-tracking/order-tracking.component';
import { FirstComponent } from './first/first.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { ProductAdminComponent } from './product-admin/product-admin.component';
import { ProductAdminDeleteComponent } from './product-admin-delete/product-admin-delete.component';
import { ProductAdminDetailComponent } from './product-admin-detail/product-admin-detail.component';
import { ProductAdminNewComponent } from './product-admin-new/product-admin-new.component';
import { ProductAdminUpdateComponent } from './product-admin-update/product-admin-update.component';
import {AngularEditorModule} from '@kolkov/angular-editor';
import {NgxPaginationModule} from 'ngx-pagination';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ForgetpasswordComponent,
    ProductComponent,
    ProductdetailComponent,
    AboutusComponent,
    HomeComponent,
    CatalogComponent,
    ServicesComponent,
    TipsComponent,
    FeaturedarticleComponent,
    CheckComponent,
    CartComponent,
    ComboComponent,
    PlansComponent,
    OrderTrackingComponent,
    FirstComponent,
    SignupComponent,
    ProfileComponent,
    ProductAdminComponent,
    ProductAdminDeleteComponent,
    ProductAdminDetailComponent,
    ProductAdminNewComponent,
    ProductAdminUpdateComponent,

  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AngularEditorModule,
    NgxPaginationModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
