import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../../interfaces/products';
import { ProductService } from '../../services/product.service';
import { OrderService } from '../../services/order.service';
import { Order } from 'src/app/interfaces/order';
import { getUserData } from 'src/app/shared/userData/getUserData';

@Component({
  selector: 'app-details-prod',
  templateUrl: './details-prod.component.html',
  styleUrls: ['./details-prod.component.css'],
})
export class DetailsProdComponent implements OnInit {
  loading: boolean = false;
  id: number;
  category: string;
  name: string;
  description: string;
  shortDescription: string;
  price: number;
  coverImage: string;
  images1: string;
  images2: string;
  images3: string;
  stock: number;

  constructor(
    private _productService: ProductService,
    private _orderService: OrderService,
    private router: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private aRouter: ActivatedRoute
  ) {
    this.id = Number(aRouter.snapshot.paramMap.get('id'));
    this.category = '';
    this.name = '';
    this.description = '';
    this.shortDescription = '';
    this.price = 0;
    this.coverImage = '';
    this.images1 = '';
    this.images2 = '';
    this.images3 = '';
    this.stock = 0;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = +params.getAll('id');

      if (!isNaN(this.id)) {
        this.getProduct(this.id);
      } else {
        this.handleError('El id no es válido');
      }
    });
  }

  getProduct(id: number) {
    this.loading = true;

    this._productService.getProduct(id).subscribe(
      (product: Product) => {
        this.name = product.name;
        this.category = product.category;
        this.description = product.description;
        this.shortDescription = product.shortDescription;
        this.price = product.price;
        this.coverImage = product.coverImage;
        this.images1 = product.images1;
        this.images2 = product.images2;
        this.images3 = product.images3;
        this.stock = product.stock;
        this.loading = false;
        this.router.navigate([`detailsProd/${product.id}`]);
      },
      (error) => {
        this.handleError('Ocurrió un error al obtener el producto');
      }
    );
  }

  handleError(errorMessage: string) {
    this.toastr.error(errorMessage, 'Error');
    this.router.navigate(['detailsProd/{{product.id}}']);
  }

  addProduct() {
    const { userId, role } = getUserData();
    if (role === 'comprador') {
      const order: Order = {
        userId,
        productId: this.id,
      };

      this._orderService.newOrder(order).subscribe(
        (order): void => {
          this.toastr.success('Producto agregado al carrito');
        },
        (error) => {
          this.handleError('Ocurrió un error al agregar el producto');
        }
      );
    } else {
      this.handleError('Debes logearte para agregar un producto al carrito');
      this.router.navigate(['/login']);
    }
  }
}
