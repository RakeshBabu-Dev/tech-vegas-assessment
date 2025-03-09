import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl : './home.component.html',
})
export class HomeComponent implements OnInit {
  categories: string[] = [];
  products: any[] = [];
  selectedCategory: string = '';

  constructor(
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
    this.productService.getCategories().subscribe(
      categories => this.categories = categories
    );
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.productService.getProductsByCategory(category).subscribe(
      products => this.products = products
    );
  }

  viewProduct(id: number) {
    this.router.navigate(['/product', id]);
  }
}
