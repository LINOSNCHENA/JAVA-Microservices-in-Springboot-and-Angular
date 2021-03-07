import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpErrorHandler } from './services/errorManager';
import { MessageService } from './services/message';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminsService } from './services/customas.service';
import { ProductService } from './services/product.service';
import { HttpModule } from '@angular/http';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';

const appRoutes: Routes = [
  { path: 'product', component: ProductComponent },
  { path: 'products', component: ProductsComponent },
  { path: '', component: ProductsComponent },
];

@NgModule({
  declarations: [AppComponent, ProductComponent, ProductsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ProductService, MessageService, AdminsService, HttpErrorHandler],
  bootstrap: [AppComponent],
})
export class AppModule {}
