import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../../interfaces/products';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  listProduct: Product[] = [];
  /*
  listProduct: Product[] = [
    { id: 1, name: "silla 1", shortDescription: "esta es una silla", description: "esta es una silla de buena calidad", price: 100, stock: 1, category: "silla", coverImage: "../../../assets/img/blue_chair.jpg", images: [] },
    { id: 1, name: "silla 1", shortDescription: "esta es una silla", description: "esta es una silla de buena calidad", price: 100, stock: 1, category: "silla", coverImage: "../../../assets/img/blue_chair.jpg", images: [] },
    { id: 1, name: "silla 1", shortDescription: "esta es una silla", description: "esta es una silla de buena calidad", price: 100, stock: 1, category: "silla", coverImage: "../../../assets/img/blue_chair.jpg", images: [] },
    { id: 1, name: "silla 1", shortDescription: "esta es una silla", description: "esta es una silla de buena calidad", price: 100, stock: 1, category: "silla", coverImage: "../../../assets/img/blue_chair.jpg", images: [] },
    { id: 1, name: "silla 1", shortDescription: "esta es una silla", description: "esta es una silla de buena calidad", price: 100, stock: 1, category: "silla", coverImage: "../../../assets/img/blue_chair.jpg", images: [] },
  ];
  */
  loading: boolean = false;

  constructor(
    private _productService: ProductService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.loading = true;
    this._productService.getProducts().subscribe((data: Product[]) => {
      this.listProduct = data;
      this.loading = false;
    });
  }
}
