import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../Products';
import { ClientProductService } from '../Client-product.service';
@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent {
  product = new Product() 
  id: string = '' 
  errMessage: string = ''

  constructor(private _service: ClientProductService, private _router: Router, private _activeroute: ActivatedRoute) {
    this._activeroute.params.subscribe(params => {
      this.id = params['id'] //
      if (this.id != null){
        this.searchProduct(this.id) // get fashionselected
      } else {
        window.alert('Invalid fashion id to show')
        this._router.navigate(['product/catalog'])
      }
    })
  }
  goBack() {
    this._router.navigate(['product/catalog']);
  }
  searchProduct(productId: string) {
    this._service.getProduct(productId).subscribe({
      next: (data) => { this.product = data },
      error: (err) => { this.errMessage = err },
    })
  }
}
