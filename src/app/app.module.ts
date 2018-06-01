import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RestService } from './service/rest.service';
import { AppComponent } from './app.component';
import {  HttpClientModule,HttpHeaders } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
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
     }
    ])
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
