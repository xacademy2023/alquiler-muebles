import { Component } from '@angular/core';
import { Order } from 'src/app/interfaces/order';
import { OrderService } from '../../services/order.service';
import { Product } from 'src/app/interfaces/products';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  idOrder: number | undefined = 0;
  myProducts: Product[] | undefined = [];
  loading: boolean = false;
  quantity: number = 1;
  totalItem: number = 0;
  totalCart: number = 0;
  cartIsEmpty: boolean = false;

  constructor(private _orderService: OrderService, private router: Router) {}

  ngOnInit(): void {
    this.getOrder();
  }

  getOrder() {
    this.loading = true;
    this._orderService.getOrders().subscribe((orders: Order[]) => {
      try {
        const orderInProgress = orders.filter(
          (order) => order.status === 'inProgress'
        );
        this.idOrder = orderInProgress[0].id;
        this.myProducts = orderInProgress[0].products;
        this.loading = false;
      } catch (error) {
        this.cartIsEmpty = true;
      }
    });
  }

  deleteProduct() {
    Swal.fire({
      title: '¿Estas seguro/a de eliminar el producto?',
      showCancelButton: true,
      confirmButtonText: 'Si',
      denyButtonText: `No`,
      background: '#724a72',
      color: '#FFF',
      confirmButtonColor: 'green',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Producto eliminado!', '', 'success');
      }
    });
  }

  deleteOrder() {
    Swal.fire({
      title: '¿Estas seguro/a de cancelar la orden?',
      showCancelButton: true,
      confirmButtonText: 'Si',
      denyButtonText: `No`,
      background: '#724a72',
      color: '#FFF',
      confirmButtonColor: 'green',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Orden cancelada!', '', 'success');
        this._orderService.deleteOrder(this.idOrder).subscribe();
        this.router.navigate(['/home']);
      }
    });
  }

  confirmOrder() {
    Swal.fire({
      title: 'Estas apunto de enviar tu orden. ¿Estas seguro/a?',
      showCancelButton: true,
      confirmButtonText: 'Si',
      denyButtonText: `No`,
      background: '#724a72',
      color: '#FFF',
      confirmButtonColor: 'green',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Orden confirmada!', '', 'success');
        this._orderService
          .updateOrder(this.idOrder, { status: 'sent' })
          .subscribe();
        this.router.navigate(['/home']);
      }
    });
  }

  add() {
    console.log('Agregando');
  }

  decrease() {
    console.log('Restando');
  }
}
