import { Component, OnInit,Input } from '@angular/core';
import { UtilityService } from '../../service/utility.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input()imageUrl:string;
  @Input() name:string;
  @Input() description:String; 
  @Input() unitPrice:number; 
  isLoggedIn:boolean=this._utilityService.isLoggedIn;
  constructor(private _utilityService:UtilityService) { }

  ngOnInit() {
  }

  addToCart(code:any){
    alert(code+"Added To Cart")
  }
}
