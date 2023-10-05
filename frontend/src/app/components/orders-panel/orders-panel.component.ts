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
  ordersList: Order[] = [];
  /*
  ordersList: Order[] = [
    { id: 1, products: [{ id: 1, name: "silla", prize: 3},], status: 'sent', user: { name: "juan", id: 33 }, userId: 1, productId: 7 },
    { id: 56, products: [{ id: 1, name: "silla", prize: 3},], status: 'sent', user: { name: "juan", id: 32 }, userId: 5, productId: 7 },
    { id: 32, products: [{ id: 1, name: "silla", prize: 3},], status: 'sent', user: { name: "juan", id: 73 }, userId: 1, productId: 7 },
    { id: 98, products: [{ id: 1, name: "silla", prize: 3},], status: 'sent', user: { name: "juan", id: 99 }, userId: 8, productId: 7 },
  ];
  */

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

  rejectOrder(order: Order): void {
    this.loading = true;
    this._orderService.updateOrder(order.id, { status: "rejected" }).subscribe(() => {
      this.getOrders();
      this.toastr.warning(`Orden (${order}) rechazada con exito!`, 'Orden rechazada');
      this.loading = false;
    });    
  }

  acceptOrder(order: Order): void {
    this.loading = true;
    this._orderService.updateOrder(order.id, { status: "accepted" }).subscribe(() => {
      this.getOrders();
      this.toastr.warning(`Orden (${order}) aceptada con exito!`, 'Orden aceptada');
      this.loading = false;
    });    
  }

  openOrderDialog(order: Order): void {
    let dialogRef = this.dialog.open(OrderDialogComponent, { 
      width: "60%", height: "50%",
      data: {
        order: {...order} 
      }
    }); 
    dialogRef.afterClosed().subscribe((result) => {
        if(result === "accept") {
          this.acceptOrder(result);
        }
        else if(result == "reject") {
          this.rejectOrder(result);
        }
        console.log(result);
    });
  }
}
