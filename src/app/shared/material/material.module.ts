import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';



const ngMat = [
  MatButtonModule, MatCardModule, MatSnackBarModule, MatDialogModule, MatInputModule, MatDividerModule, MatIconModule,
  MatSelectModule,MatProgressSpinnerModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...ngMat
  ],
  exports: [
    ...ngMat
  ]
})
export class MaterialModule { }
