import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ HomePageComponent } from './Components/home-page/home-page.component'
import { AboutUsComponent } from './Components/about-us/about-us.component'
import { ContactComponent } from './Components/contact/contact.component';
import { ProductPageComponent } from './Components/product-page/product-page.component';
import { CartComponent } from './Components/cart/cart.component';
import { ProductComponent } from './Components/product/product.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { ArtistaPageComponent } from './artistapage/artistapage.component';
import { ProductoartComponent } from './Component/productoart/productoart.component';

const routes: Routes = [
{path: '', component: HomePageComponent},
{path: 'aboutus', component: AboutUsComponent},
{path: 'contact', component: ContactComponent},
{path: 'product-page', component: ProductPageComponent},
{path: 'cart', component: CartComponent},
{path: 'product', component: ProductComponent},
{path: 'product-list', component: ProductListComponent},
  {path: 'artistapage', component: ArtistaPageComponent},
{path: 'productoart', component: ProductoartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
