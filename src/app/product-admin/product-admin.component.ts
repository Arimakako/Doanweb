import { Component } from '@angular/core';
import { ProductApiService } from '../product-api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-admin',
  templateUrl: './product-admin.component.html',
  styleUrls: ['./product-admin.component.css']
})
export class ProductAdminComponent {
  products: any;
  errMessage: string = ''
  constructor(public _service: ProductApiService, private _router: Router) {
    this.getProducts()
  }

  getProducts() {
    this._service.getProducts().subscribe({
      next: (data) => { this.products = data },
      error: (err) => { this.errMessage = err }
    })
  }

  createProduct() {
    this._router.navigate(['products/new'])
  }

  updateProduct(productId: string) {
    this._router.navigate(['products/edit', productId])
  }

  detailProduct(productId: string) {
    this._router.navigate(['products/detail', productId])
  }

  deleteProduct(productId: string) {
    // confirm delete
    if (confirm("Are you sure to delete this product?")) {
      this._service.deleteProduct(productId).subscribe({
        next: (data) => { this.products = data, this.getProducts();
          window.location.reload(); // Reload the page
         },
        error: (err) => { this.errMessage = err }
      })
      this.getProducts()
    }
  }
}
