import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  selectedId:any;
  constructor() { }

  public getCategoryId():any{
    return this.selectedId;
  }
  public setCategoryId(id:any){
    this.selectedId=id;
  }
}
