import { Injectable } from '@angular/core';
import { Product} from './Products';


@Injectable({
  providedIn: 'root'
})
export class CartService{
  items: Product[] = [];

  constructor() {}
  



  addItem(item: Product): void {
    const existingItem = this.items.find((product) => product._id === item._id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.items.push(item);
    }
  }
  getItems(): Product[] {
    return this.items;
  }
  addToCart(product: Product) {
    this.addItem(product);
    console.log(this.getItems()); // Kiểm tra xem sản phẩm đã được thêm vào giỏ hàng
    alert("Product added to cart successfully!")
  }

  removeItem(itemId: any): void {
    this.items = this.items.filter((item) => item._id !== itemId);
  }

  calculateTotal(): number {
    return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  clearCart(): void {
    this.items = [];
  }

}