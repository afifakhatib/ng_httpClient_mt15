import { Injectable } from '@angular/core';
import { GetConfirmationComponent } from '../components/get-confirmation/get-confirmation.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class DailogService {

  constructor(
    private _dailog: MatDialog

  ) { }

  openDialog(title:string,msg:string){
    let confrimDailog = this._dailog.open(GetConfirmationComponent , {
      width : '300px',
      height  : '200px',
      data : {title   ,msg}
     })
     return confrimDailog.afterClosed()
  }
}
