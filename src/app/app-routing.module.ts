import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ HomePageComponent } from './Components/home-page/home-page.component'
import { AboutUsComponent } from './Components/about-us/about-us.component'
import { ContactComponent } from './Components/contact/contact.component';

const routes: Routes = [
{path: '', component: HomePageComponent},
{path: 'aboutus', component: AboutUsComponent},
{path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
