import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RestService } from './service/rest.service';
import { AppComponent } from './app.component';
import {  HttpClientModule,HttpHeaders } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { ProductsComponent } from './products/products.component';
import { CommonComponent } from './common/common.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    CommonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    Ng2CarouselamosModule,
    RouterModule.forRoot([{
      path : ' ',
      redirectTo:'/home',
      pathMatch:'full'
    },
    {
     path : 'home',
     component: HomeComponent
     },
     {
      path : 'products',
      component: ProductsComponent
      }
    ])
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
