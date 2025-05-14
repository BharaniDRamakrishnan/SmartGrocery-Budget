import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { HttpClientModule } from '@angular/common/http';  // HttpClientModule for API calls
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
  standalone: true,  // Marking the component as standalone
  imports: [CommonModule,FormsModule, HttpClientModule],  // Import necessary modules here
})
export class ItemListComponent implements OnInit {
  items: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadItems();
  }

  loadItems() {
    this.apiService.getItems().subscribe((data) => {
      this.items = data;
    });
  }
 deleteItem(itemId: string) {
  console.log('Deleting item with ID:', itemId); // Debugging log
  this.apiService.deleteItem(itemId).subscribe(
    () => {
      this.items = this.items.filter(item => item._id !== itemId);
    },
    (error) => console.error('Error deleting item:', error)
  );
}
}
  

