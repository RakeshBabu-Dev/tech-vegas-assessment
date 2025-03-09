import { ProductService } from './../../services/product.service';
import { Component, HostListener } from '@angular/core';
import { RouterLink, ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderServiceTsService } from './header.service.ts.service';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-header',
  standalone: true,

  imports: [RouterLink, NgSelectModule, FormsModule, CommonModule],
  templateUrl:'./header.component.html',
  styles: [`
    .navbar {
      margin-bottom: 20px;
    }
  `]
})
export class HeaderComponent {
  cartCount = 0;
  searchQuery = '';
  filteredProducts:any = [];
  profile:boolean = false;
constructor(private router : Router,private productService: ProductService ,private headerService: HeaderServiceTsService){

}
ngOnInit(): void {
 this.headerService.cart$.subscribe(cart => {
      this.cartCount = cart.length; // Update count dynamically
      console.log(cart,"Hiii");

    });
}

  onSearch() {
    console.log(this.searchQuery,"this.searchQuery");

    this.productService.searchProducts('').subscribe(response => {
      this.filteredProducts = response.filter(product =>
        product.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
      console.log(response,"Response");

    })
  }
  logout() {
    // Clear user session (example)
    localStorage.removeItem('authToken');
    this.router.navigate(['/login']);
  }

  // @HostListener('document:click', ['$event'])
  // onClickOutside(event: Event) {
  //   const searchContainer = document.querySelector('.profile-container');
  //   if (!searchContainer?.contains(event.target as Node)) {
  //     this.profile = false;
  //   }
  // }
defaultMsg(message:string){
  alert(message);
  this.profile = false;
}
}
