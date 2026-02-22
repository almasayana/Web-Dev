import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { products } from '../../data/products';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  productList: Product[] = [...products];

  sortByAsc() {
    this.productList.sort((a, b) => a.rating - b.rating);
  }

  sortByDesc() {
    this.productList.sort((a, b) => b.rating - a.rating);
  }
}