import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/interfaces/products';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css'],
})
export class CrudComponent implements OnInit {
  form: FormGroup;
  loading: boolean = false;
  id: number;
  operacion: string = 'Agregar ';

  constructor(
    private fb: FormBuilder,
    private _productService: ProductService,
    private router: Router,
    private toastr: ToastrService,
    private aRouter: ActivatedRoute
  ) {
    this.form = this.fb.group({
      category: ['', Validators.required],
      name: ['', Validators.required],
      shortDescription: ['', Validators.required],
      price: [null, Validators.required],
      coverImage: ['', Validators.required],
      stock: [null, Validators.required],
      description: ['', Validators.required],
      images1: ['', Validators.required],
      images2: ['', Validators.required],
      images3: ['', Validators.required],
    });
    this.id = Number(aRouter.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    if (this.id != 0) {
      this.operacion = 'Editar ';
      this.getProduct(this.id);
    }
  }

  getProduct(id: number) {
    this.loading = true;
    this._productService.getProduct(id).subscribe((product: Product) => {
      this.loading = false;
      this.form.patchValue({
        category: product.category,
        name: product.name,
        shortDescription: product.shortDescription,
        price: product.price,
        coverImage: product.coverImage,
        stock: product.stock,
        description: product.description,
        images1: product.images1,
        images2: product.images2,
        images3: product.images3,
      });
    });
  }

  addProduct() {
    const product: Product = {
      category: this.form.value.category,
      name: this.form.value.name,
      shortDescription: this.form.value.shortDescription,
      price: this.form.value.price,
      coverImage: this.form.value.coverImage,
      stock: this.form.value.stock,
      description: '',
      images1: this.form.value.images1,
      images2: this.form.value.images2,
      images3: this.form.value.images3,
    };

    this.loading = true;
    if (this.id !== 0) {
      product.id = this.id;
      this._productService.updateProduct(this.id, product).subscribe(() => {
        this.toastr.info(
          `Producto ${product.name} actualizado con exito!`,
          'Producto actualizado'
        );
        this.loading = false;
        this.router.navigate(['/dashboard']);
      });
    } else {
      this._productService.saveProduct(product).subscribe(() => {
        this.toastr.success(
          `Producto ${product.name} registrado con exito!`,
          'Producto registrado'
        );
        this.loading = false;
        this.router.navigate(['/dashboard']);
      });
    }
  }
}
