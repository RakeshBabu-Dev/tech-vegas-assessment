import { ProductApiEnums } from './../../enums/product-api.enum';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private baseUrl = 'https://fakestoreapi.com';

    constructor(private http: HttpClient) { }

    getCategories(): Observable<string[]> {
      return this.http.get<string[]>(`${this.baseUrl}${ProductApiEnums.GET_CATEGORIES}`);
    }

  getProductsByCategory(category: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}${ProductApiEnums.GET_PRODUCTS_BY_CATEOGRY}${category}`);
  }

  getProductById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}${ProductApiEnums.GET_PRODUCTS_BY_ID}${id}`);
  }

  searchProducts(query: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}${ProductApiEnums.SEARCH_PRODUCTS}`);
  }


  // getAllProducts(): Observable<string[]> {
  //   return this.http.get<string[]>(`${this.baseUrl}${ProductApiEnums.GET_CATEGORIES}`);
  // }

}
