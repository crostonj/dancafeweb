import { Component, OnInit } from '@angular/core';
import { ProductAService } from '../../Services/Product/product-a.service';
import { InventoryItem } from '../../Model/inventoryItem';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  private productService: ProductAService;
  products: InventoryItem[];
  productID: number;

  constructor(productService: ProductAService) {
    this.productService = productService;
   }

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
       next: (items: InventoryItem[]) => {
        this.products = items;
      },
      error: () => {
        console.log('Error getting products');
      }
    });
  }
}
