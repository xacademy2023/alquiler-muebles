import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../../interfaces/products';
import { ProductService } from '../../services/product.service';

type User = {
  name: string;
  email: string;
  isSeller: boolean;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  usersList: User[] = [
    { name: "Luis1", email: "luis1@gmail.com", isSeller: false },
    { name: "Luis2", email: "luis2@gmail.com", isSeller: true },
    { name: "Luis3", email: "luis3@gmail.com", isSeller: true },
    { name: "Luis4", email: "luis4@gmail.com", isSeller: false },
    { name: "Luis5", email: "luis5@gmail.com", isSeller: true },
  ];
  //listProduct: Product[] = []
  loading: boolean = false;

  constructor(private _productService: ProductService, private toastr: ToastrService) { }

  ngOnInit(): void {
    //this.getProducts();
    this.getUsers();
  }

  getUsers(): void {

  }

  deleteUser(email: string): void {

  }

  setSellerState(user: User, isSeller: boolean): void {
    user.isSeller = isSeller;
  }

  /*
  getProducts() {
      this.loading = true;
      this._productService.getProducts().subscribe((data: Product[]) => {
      this.listProduct = data;
      this.loading = false;
    })
  }

  deleteProduct(id: number) {
      this.loading = true;
      this._productService.deleteProduct(id).subscribe(() => {
      this.getProducts();
      this.toastr.warning('Producto eliminado con exito!', 'Producto eliminado');
    })
  }
  */
}
