import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../../interfaces/products';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //listProduct: Product[] = [];
  
  listProduct: Product[] = [
    { name: "silla 1", category: "silla", image: "../../../assets/img/blue_chair.jpg", description: "esta es una silla", price: 400, stock: 1 },
    { name: "silla 2", category: "silla", image: "../../../assets/img/blue_chair.jpg", description: "esta es una silla", price: 400, stock: 1 },
    { name: "silla 3", category: "silla", image: "../../../assets/img/blue_chair.jpg", description: "esta es una silla", price: 400, stock: 1 },
    { name: "silla 4", category: "silla", image: "../../../assets/img/blue_chair.jpg", description: "esta es una silla", price: 400, stock: 1 },
    { name: "silla 5", category: "silla", image: "../../../assets/img/blue_chair.jpg", description: "esta es una silla", price: 400, stock: 1 },
    { name: "silla 6", category: "silla", image: "../../../assets/img/blue_chair.jpg", description: "esta es una silla", price: 400, stock: 1 },
    { name: "silla 7", category: "silla", image: "../../../assets/img/blue_chair.jpg", description: "esta es una silla", price: 400, stock: 1 },
    { name: "silla 8", category: "silla", image: "../../../assets/img/blue_chair.jpg", description: "esta es una silla", price: 400, stock: 1 },
    { name: "silla 9", category: "silla", image: "../../../assets/img/blue_chair.jpg", description: "esta es una silla", price: 400, stock: 1 },
  ];
  
  loading: boolean = false;

  constructor(private _productService: ProductService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    /*
    this.loading = true;
    this._productService.getProducts().subscribe((data: Product[]) => {
      this.listProduct = data;
      this.loading = false;
    })
    */
  }

}
