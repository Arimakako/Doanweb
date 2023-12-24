
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ClientProductService} from '../Client-product.service';
import { Product } from '../Products';
import { CartService } from '../cart.service';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
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
  private destroy$: Subject<void> = new Subject<void>();
  private addToCartSubject: Subject<Product> = new Subject<Product>();
  constructor(
    public _service: ClientProductService, 
    private _router: Router, 
    private _activeRoute: ActivatedRoute,
    private cartService: CartService  // Inject the CartService
  )  {
    this.getProducts()
    this.page = 1
    
}
ngOnDestroy(): void {
  this.destroy$.next();
  this.destroy$.complete();
}
  ngOnInit():void{
    this.getProducts();

  // Example of debouncing the addToCart event using RxJS
  this.addToCartSubject.pipe(debounceTime(500), takeUntil(this.destroy$)).subscribe((product) => {
    this.handleAddToCart(product);
  });
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
  if (product.quantity < 0) {
    alert('Invalid quantity');
    return;
  }

  alert('Your product has been added to the cart!');
  this.addToCartSubject.next(product);
}

handleAddToCart(product: Product) {
  this.cartService.addItem(product);
  console.log(product);
}
}

