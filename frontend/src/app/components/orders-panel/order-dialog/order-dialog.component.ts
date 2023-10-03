import { Component, Inject, OnInit  } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-order-dialog',
  templateUrl: './order-dialog.component.html',
  styleUrls: ['./order-dialog.component.css']
})
export class OrderDialogComponent implements OnInit {
  dashboardData: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ref: MatDialogRef<OrderDialogComponent>
  ) {}

  ngOnInit(): void {
    this.dashboardData = this.data;
  }
  
  rejectOrder(): void {
    //this.ref.close(this.dashboardData.userId);
  }

  acceptOrder(): void {
    //this.ref.close(this.dashboardData.userId);
  }
}
