import { Component, OnInit } from '@angular/core';
import { RestService } from '../service/rest.service';
import { UtilityService } from '../service/utility.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  category:any
  product:any

  constructor(private _restService:RestService,
  private _utilitySerive:UtilityService,
private _route:Router) { }

  ngOnInit() {
    this.getAllCategories();
    this.getAllProducts();
  }

  getAllCategories(){
    this._restService.getCategories()
    .subscribe(response=>{
      this.category=response;
    },erroResponse=>{
      console.log("Error");
    }
    )
  }
  getAllProducts(){
    this._restService.getAllProducts()
    .subscribe(response=>{
      this.product=response;
    },erroResponse=>{
      console.log("Error");
    }
    )

  }
  public showProducts(id:any){
    this._utilitySerive.setCategoryId(id);
    this._route.navigate(["/products"]);
    

  }


}
