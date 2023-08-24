import { Component, OnInit, Inject } from '@angular/core';
import { Product } from "../../../interfaces/products";
import { MatDialog, MatDialogRef} from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA)public product: any, public dialogRef: MatDialogRef<DialogBoxComponent>) {}

  currentProduct: any;
  ngOnInit(): void {
    this.currentProduct = this.product;
  }
 
  requestProduct(): void {
    this.dialogRef.close();
  }

  closeDialog(): void {
    this.dialogRef.close();
  }


}
