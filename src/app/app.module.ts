import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
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


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
