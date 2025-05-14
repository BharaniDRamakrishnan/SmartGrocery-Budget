import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { HttpClientModule } from '@angular/common/http';  // HttpClientModule for API calls
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
  standalone: true,  // Marking the component as standalone
  imports: [CommonModule, HttpClientModule,FormsModule],  // Import necessary modules here
})
export class AddItemComponent {
  itemName: string = '';
  itemPrice: number = 0;
  item: { price: number; name: string } = { price: 0, name: '' };
  alertMessage: string | null = null;  // Add this line

  constructor(private apiService: ApiService, private router: Router) {}

  addItem() {
  console.log('Add Item button clicked'); // Debugging
  const newItem = { name: this.item.name, price: this.item.price };
  this.apiService.addItem(newItem).subscribe(
    (response) => {
      console.log('Item added:', response);
      this.router.navigate(['/list-item']);
      this.alertMessage = 'Item added successfully!';
    },
    (error) => {
      console.error('Error adding item:', error);
      this.alertMessage = 'Failed to add item.';
    }
  );
}
  }

