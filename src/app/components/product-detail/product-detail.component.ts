import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { HeaderServiceTsService } from '../header/header.service.ts.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-detail.component.html',
  styles: [`
    img {
      max-height: 400px;
      object-fit: contain;
    }
  `]
})
export class ProductDetailComponent implements OnInit {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private headerService: HeaderServiceTsService

  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.productService.getProductById(id).subscribe(
      product => this.product = product
    );
  }

  addToCart(item:any) {
    console.log(item);

this.headerService.setCartDetails(item);
  }
}
