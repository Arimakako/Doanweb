import { Component } from '@angular/core';
import {ProductApiService} from '../product-api.service'
@Component({
  selector: 'app-product-admin-delete',
  templateUrl: './product-admin-delete.component.html',
  styleUrls: ['./product-admin-delete.component.css']
})
export class ProductAdminDeleteComponent {
  products: any
  productId: string = ''
  errMessage: string = ''

  constructor(private _service: ProductApiService) {
    this._service.getProducts().subscribe({
      next: (data) => { this.products = data },
      error: (err) => { this.errMessage = err },
    })
  }

  // delete product
  deleteProduct(Id: string) {
    if (this.validate(Id)) {
      this._service.deleteProduct(Id).subscribe({
        next: (data) => {
          this.products = data,
            this.errMessage = 'Delete successfully',
            this.reset(),
            this.getProducts()
        },
        error: (err) => { this.errMessage = err },
      })
    }
  }

  // get products
  getProducts() {
    this._service.getProducts().subscribe({
      next: (data) => { this.products = data },
      error: (err) => { this.errMessage = err },
    })
  }

  // reset
  reset() {
    this.productId = ''
    this.errMessage = ''
  }

  // validate
  validate(productId: string) {
    if (productId == '') {
      this.errMessage = 'Please enter product id'
      return false
    } else
      // check if productId is hex string or not
      if (!/^[0-9a-fA-F]{24}$/.test(productId)) {
        this.errMessage = 'Fashion id is not hex string'
        return false
      }
      else {
        this.errMessage = ''
        return true
      }
  }
}
