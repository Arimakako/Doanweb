import { Component,OnInit } from '@angular/core';
import { Product } from '../Products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: Product[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.loadCartItems();
  }

  loadCartItems() {
    this.cartItems = this.cartService.getItems();
  }

  removeFromCart(item: Product) {
    this.cartService.removeItem(item);
    this.loadCartItems();
  }

  clearCart() {
    this.cartService.clearCart();
    this.loadCartItems();
  }

  get total() {
    return this.cartService.calculateTotal();
  }
}
