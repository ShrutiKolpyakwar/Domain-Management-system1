import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Import Router

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {}  // Inject Router

  products = [
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },
    {
      id: '2000',
      code: 'f2560fh0g3',
      name: 'Bamboo',
      description: 'Product Description',
      image: 'bamboo.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
    }
  ];

  cols = [
    { field: 'code', header: 'Code' },
    { field: 'name', header: 'Name' },
    { field: 'category', header: 'Category' },
    { field: 'quantity', header: 'Quantity' },
    { field: 'inventory', header: 'Status' }
  ];

  dateValue: Date | null = null;
  selectedCity: any;
  selectedCountry: any;

  cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
  ];

  countries = [
    { name: 'United States', code: 'US' },
    { name: 'Canada', code: 'CA' },
    { name: 'Mexico', code: 'MX' }
  ];

  date1: Date | null = null;
  date2: Date | null = null;
  date3: Date | null = null;

  // Add logout method
  logout() {
    localStorage.clear();  // Clear any session data if needed
    this.router.navigate(['/login']);  // Navigate to login route
  }
}
