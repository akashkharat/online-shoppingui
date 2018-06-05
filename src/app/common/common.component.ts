import { Component, OnInit, OnChanges } from '@angular/core';
import { RestService } from '../service/rest.service';
import { UtilityService } from '../service/utility.service';
import { Router } from '@angular/router';
import { ProductsComponent } from '../products/products.component';
@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.scss']
})
export class CommonComponent implements OnInit{

  category :any;
  constructor(private _restService:RestService,
    private _utilitySerive:UtilityService,
  private _route:Router) { 
      this.getAllCategories();
    }

  ngOnInit() {
   
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
  public showProducts(id:any){
    this._utilitySerive.setCategoryId(id);
    this._route.navigate(["/products"]);
    

  }

}
