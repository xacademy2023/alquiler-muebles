import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { OrderDialogComponent } from './order-dialog/order-dialog.component';
import { Order } from '../../interfaces/orders';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-orders-panel',
  templateUrl: './orders-panel.component.html',
  styleUrls: ['./orders-panel.component.css'],
})
export class OrdersPanelComponent implements OnInit {
  loading: boolean = false;
  ordersList: Order[] = [];

  constructor(
    private _orderService: OrderService,
    private toastr: ToastrService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(): void {
    this.loading = true;
    this._orderService.getOrders().subscribe((orders: Order[]) => {
      const ordersSent = orders.filter((order) => order.status === 'sent');
      this.ordersList = ordersSent;
      this.loading = false;
    });
  }

  rejectOrder(order: Order): void {
    this.loading = true;
    this._orderService
      .updateOrder(order.id, { status: 'rejected' })
      .subscribe(() => {
        this.getOrders();
        this.toastr.warning(
          `Orden (${order}) rechazada con exito!`,
          'Orden rechazada'
        );
        this.loading = false;
      });
  }

  acceptOrder(order: Order): void {
    this.loading = true;
    this._orderService
      .updateOrder(order.id, { status: 'accepted' })
      .subscribe(() => {
        this.getOrders();
        this.toastr.success(
          `Orden (${order}) aceptada con exito!`,
          'Orden aceptada'
        );
        this.loading = false;
      });
  }

  openOrderDialog(order: Order): void {
    let dialogRef = this.dialog.open(OrderDialogComponent, {
      width: '60%',
      height: '50%',
      data: {
        order: { ...order },
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'accept') {
        this.acceptOrder(order);
      } else if (result == 'reject') {
        this.rejectOrder(order);
      }
    });
  }
}
