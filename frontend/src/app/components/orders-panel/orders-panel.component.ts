import { Component, OnInit  } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { OrderDialogComponent } from './order-dialog/order-dialog.component';
import { Order } from '../../interfaces/orders';
import { OrderService } from '../../services/order.service';

// inProgress, sent, --> ((accepted, rejected))
@Component({
  selector: 'app-orders-panel',
  templateUrl: './orders-panel.component.html',
  styleUrls: ['./orders-panel.component.css']
})
export class OrdersPanelComponent implements OnInit {

  loading: boolean = false;
  //ordersList: Order[] = [];
  ordersList: Order[] = [
    { orderId: 1, userId: 1, products: [ 1, 2, 3], status: 'sent' },
    { orderId: 2, userId: 1, products: [ 4, 5, 6], status: 'sent' },
    { orderId: 3, userId: 2, products: [ 7, 8, 9], status: 'sent' },
    { orderId: 4, userId: 1, products: [ 10, 11, 12], status: 'sent' },
  ];

  constructor(
    private _orderService: OrderService,
    private toastr: ToastrService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(): void {
    this.loading = true;
    this._orderService.getOrders().subscribe((data: Order[]) => {
      this.ordersList = data;
      this.loading = false;
    });
  }

  rejectOrder(orderId: number, orderStatus: string): void {
    this.loading = true;
    this._orderService.rejectOrder(orderId, orderStatus).subscribe(() => {
      this.getOrders();
      this.toastr.warning(`Orden (${orderId}) rechazada con exito!`, 'Orden rechazada');
      this.loading = false;
    });    
  }

  acceptOrder(order: Order): void {
    this.loading = true;
    this._orderService.acceptOrder(order).subscribe(() => {
      this.getOrders();
      this.toastr.warning(`Orden (${order}) aceptada con exito!`, 'Orden aceptada');
      this.loading = false;
    });    
  }

  openRejectOrderDialog(order: Order): void {
    let dialogRef = this.dialog.open(OrderDialogComponent, { 
      width: "40%", height: "30%",
      data: {
        orderId: order.orderId, orderUser: order.userId
      }
    }); 
    dialogRef.afterClosed().subscribe((result: number) => {
      if(typeof result === "number") {
        this.rejectOrder(result);
      }
    });
  }

  openAcceptOrderDialog(order: Order): void {
    let dialogRef = this.dialog.open(OrderDialogComponent, { 
      width: "40%", height: "30%",
      data: {
        orderId: order.orderId, orderUser: order.userId
      }
    }); 
    dialogRef.afterClosed().subscribe((result: number) => {
      if(typeof result === "number") {
        this.acceptOrder(result);
      }
    });
  }
}
