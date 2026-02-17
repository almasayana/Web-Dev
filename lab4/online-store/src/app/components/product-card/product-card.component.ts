import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() product!: Product;
  currentImageIndex: number = 0;

  cart: Product[] = [];
favorites: Product[] = [];

addToCart() {
  this.cart.push(this.product);
  console.log('Корзина:', this.cart);
  alert('Товар добавлен в корзину');
}

addToFavorites() {
  this.favorites.push(this.product);
  console.log('Избранное:', this.favorites);
  alert('Добавлено в избранное');
}

  nextImage() {
    if (this.product.images && this.product.images.length > 0) {
      this.currentImageIndex =
        (this.currentImageIndex + 1) % this.product.images.length;
    }
  }

  prevImage() {
    if (this.product.images && this.product.images.length > 0) {
      this.currentImageIndex =
        (this.currentImageIndex - 1 + this.product.images.length) %
        this.product.images.length;
    }
  }

  selectImage(index: number) {
    this.currentImageIndex = index;
  }
}
