import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../service/utility.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private _utility:UtilityService) { }

  ngOnInit() {
    console.log(this._utility.getCategoryId());
  }

}
