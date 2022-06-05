import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ProductsService } from './Services/products.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { ArtistsComponent } from './Components/artists/artists.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactComponent } from './Components/contact/contact.component';
import { ProductPageComponent } from './Components/product-page/product-page.component';
import { CartComponent } from './Components/cart/cart.component';
import { CartItemComponent } from './Components/cart-item/cart-item.component';
import { ProductComponent } from './Components/product/product.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    ArtistsComponent,
    AboutUsComponent,
    ContactComponent,
    ProductPageComponent,
    CartComponent,
    CartItemComponent,
    ProductComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
