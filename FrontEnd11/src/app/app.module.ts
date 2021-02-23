import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
// import { ProductService } from './services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { AccountService } from './services/account.service';
import { HttpModule } from '@angular/http';
//import { ProductviewComponent } from './productview/productview.component';

const appRoutes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: '', component: ProductComponent },
];
@NgModule({
  declarations: [AppComponent, ProductsComponent, ProductComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    HttpModule,
  ],
  providers: [AccountService],
  bootstrap: [AppComponent],
})
export class AppModule {}
