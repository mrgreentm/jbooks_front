import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { SnackBarComponent } from './snack-bar/snack-bar.component';

@Injectable({
  providedIn: 'root',
})
export class FeedBackService {
  apiUrl = 'localhost:3333/auth';
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(private snackBar: MatSnackBar) {}

  openSnackBar(message: string) {
    this.snackBar.openFromComponent(SnackBarComponent, {
      duration: 2 * 1000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      data: message,
      panelClass: 'custom-snack-bar'
    });
  }
}
