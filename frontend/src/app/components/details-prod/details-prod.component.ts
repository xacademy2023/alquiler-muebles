import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../../interfaces/products';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-details-prod',
  templateUrl: './details-prod.component.html',
  styleUrls: ['./details-prod.component.css']
})
export class DetailsProdComponent implements OnInit{
  loading: boolean = false;
  id: number;
  category: string;
  name: string;
  description: string;
  shortDescription: string;
  price: number;
  image: string;
  stock: number;

  constructor(
    private _productService: ProductService,
    private router: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private aRouter: ActivatedRoute
  ) {
    this.id = Number(aRouter.snapshot.paramMap.get('id'));
    this.category = '';
    this.name = '';
    this.description = '';
    this.shortDescription= '';
    this.price = 0;
    this.image = '';
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
        this.description = product.shortDescription;
        this.price = product.price;
        this.image = product.coverImage;
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

}
