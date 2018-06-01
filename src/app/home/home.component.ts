import { Component, OnInit } from '@angular/core';
import { RestService } from '../service/rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  category:any

  constructor(private _restService:RestService) { }

  ngOnInit() {
    this.getAllCategories();
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


}
