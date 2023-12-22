
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ClientProductService} from '../Client-product.service';
import { Product } from '../Products';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
  products: any;
  cate: string ='';
  productcateunique: string[] = [];
  page: number = 1;
  count: number =0;
  tableSize: number=9;
  tableSizes: any = [5,10,15,20];
  errMessage: string = ''
  constructor(
    public _service: ClientProductService, 
    private _router: Router, 
    private _activeRoute: ActivatedRoute,
    private cartService: CartService  // Inject the CartService
  )  {
    this.getProducts()
    this.page = 1
    
}
  ngOnInit():void{
this.getProducts();

  }

  detailProduct(_id: string) {
    this._router.navigate(['product/productdetail', _id])
  }
  onChange(e: any): void{
      if (e)
        this.page = e;
  }
  getProducts() {
    this._service.getProducts().subscribe((response)=>
    {
      this.products=response;
      console.log(this.products)
    })
  }
  addToCart(product: Product) {
    this.cartService.addItem(product);
    alert('Product added to cart successfully!');
    console.log(this.cartService.getItems());

  }

}
