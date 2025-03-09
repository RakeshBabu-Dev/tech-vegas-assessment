import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderServiceTsService {
  public cartSubject = new BehaviorSubject<any[]>([]); // Holds cart items
  cart$ = this.cartSubject.asObservable(); // Expose cart as Observable

 constructor(private http: HttpClient) { }

 getCartDetails(): Observable<any[]> {
  return this.cart$;
}

setCartDetails(item: any): void {
  const currentCart = this.cartSubject.getValue(); // Get current cart
  const updatedCart = [...currentCart, item]; // Add new item
  this.cartSubject.next(updatedCart); // Update BehaviorSubject
}

}
