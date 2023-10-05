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
  totalCart: number | undefined = 0;
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

        if (orderInProgress) {
          this.idOrder = orderInProgress[0].id;
          this.myProducts = orderInProgress[0].products;
          this.myProducts?.forEach((product) => {
            product.quantity = 1;
          });
          this.calculateTotal();
          this.loading = false;
        }
      } catch (error) {
        this.cartIsEmpty = true;
      }
    });
  }

  deleteProduct(idProduct: number | undefined) {
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
        const productFound: any = this.myProducts?.find(
          (product) => product.id === idProduct
        );
        const { id } = productFound;
        this._orderService.deleteProductOrder(id, this.idOrder).subscribe();
        Swal.fire('Producto eliminado!', '', 'success');
      }
      this.getOrder();
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

  calculateTotal() {
    this.totalCart = this.myProducts?.reduce(
      (total, product) => total + product.quantity * product.price,
      0
    );
  }

  add(product: Product) {
    product.quantity++;
    this.calculateTotal();
  }

  decrease(product: Product) {
    if (product.quantity > 1) {
      product.quantity--;
      this.calculateTotal();
    }
  }
}
