import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  selectedId:any;
  isLoggedIn:boolean=true;
  constructor() { }

  public getCategoryId():any{
    return this.selectedId;
  }
  public setCategoryId(id:any){
    this.selectedId=id;
  }
}
