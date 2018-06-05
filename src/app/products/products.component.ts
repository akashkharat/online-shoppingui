import { Component, OnInit, OnChanges } from '@angular/core';
import { UtilityService } from '../service/utility.service';
import { RestService } from '../service/rest.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit,OnChanges {

  products:any;
 
  constructor(private _utilityService:UtilityService,
  private _restService:RestService) { 
    this.getProductByCatgeory(this._utilityService.getCategoryId())
  }

  ngOnInit() {
    console.log(this._utilityService.getCategoryId())
  
  }
  ngOnChanges(){
    console.log(this._utilityService.getCategoryId())
  }

  getProductByCatgeory(categoryId:any){
    this._restService.getProductByCategory(categoryId)
    .subscribe(response=>{
      this.products=response;
    },erroResponse=>{
      console.log("Error");
    })
  }
  public showProducts(id:any){
  
    this.getProductByCatgeory(id)

    

  }

}
