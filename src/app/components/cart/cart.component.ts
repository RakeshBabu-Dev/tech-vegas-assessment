import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderServiceTsService } from '../header/header.service.ts.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  totalPrice: number = 0;

  constructor(private headerService: HeaderServiceTsService) {}

  ngOnInit() {
    this.headerService.getCartDetails().subscribe(cart => {
      this.cartItems = cart;
      this.calculateTotal();
    });
  }

  calculateTotal() {
    this.totalPrice = this.cartItems.reduce((total, item) => total + item.price, 0);
  }

  removeItem(index: number) {
    this.cartItems.splice(index, 1); // Remove item from local array
      // this.headerService.setCartDetails([...this.cartItems]);
    this.calculateTotal();
  }

}
