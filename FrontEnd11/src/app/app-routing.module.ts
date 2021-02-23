import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [

  { path: 'addbanker', component: ProductComponent },
 // { path: 'banks/:id', component: DetailbankerComponent },
  { path: 'products', component: ProductsComponent },
  {path : 'enrolls',component: ProductComponent }, //one
 // {path : '',component:AllEmployeesComponent},//two
  { path: '', redirectTo: 'products', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
