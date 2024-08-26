import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-get-confirmation',
  templateUrl: './get-confirmation.component.html',
  styleUrls: ['./get-confirmation.component.scss']
})
export class GetConfirmationComponent implements OnInit {

  title !: string;
  msg !: string

  constructor(
    private _matDailog : MatDialogRef<GetConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public data : {title : string , msg :string}
  ) {  
     this.title = data.title;
     this.msg = data.msg;
  } 

  ngOnInit(): void {

  }

  OnClose(flag : boolean){
    this._matDailog.close(flag)
  }

}
