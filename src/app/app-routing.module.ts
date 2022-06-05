import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ HomePageComponent } from './Components/home-page/home-page.component'
import { AboutUsComponent } from './Components/about-us/about-us.component'
import { ContactComponent } from './Components/contact/contact.component';
import { ProductPageComponent } from './Components/product-page/product-page.component';
import { CartComponent } from './Components/cart/cart.component';
import { ProductComponent } from './Components/product/product.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { ArtistaPageComponent } from './Components/artistapage/artistapage.component';
import { ProductoartComponent } from './Components/Component/productoart/productoart.component';
import { ConstructionComponent } from './Components/construction/construction.component';

const routes: Routes = [
{path: '', component: HomePageComponent},
{path: 'aboutus', component: AboutUsComponent},
{path: 'contact', component: ContactComponent},
{path: 'product-page', component: ProductPageComponent},
{path: 'product-page/:nombre:id', component: ProductPageComponent},
{path: 'cart', component: CartComponent},
{path: 'product', component: ProductComponent},
{path: 'product-list', component: ProductListComponent},
{path: 'artistapage', component: ArtistaPageComponent},
<<<<<<< HEAD
{path: 'productoart', component: ProductoartComponent}
=======
{path: 'productoart', component: ProductoartComponent},
{path: 'underconstruction', component: ConstructionComponent}
>>>>>>> e7b6eba62988da5ec2151b566699306d94998981
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
