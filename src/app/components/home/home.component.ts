import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../../services/api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  providers: [ApiService],
})
export class HomeComponent implements OnInit {
  budgetAmount: number = 0;
  totalPrice: number = 0;  // Added this line
  alertMessage: string | null = null; // Added this line
  successMessage: string | null = null;
  errorMessage: string | null = null;
  items: any[] = []; // Added this line

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getBudget();
    this.loadItems();
  }

  getBudget() {
    this.apiService.getBudget().subscribe((data) => {
      this.budgetAmount = data.amount;
      this.checkBudget(); // Call budget validation after fetching
    });
  }

  setBudget() {
    this.apiService.setBudget({ amount: this.budgetAmount }).subscribe(
      () => {
        this.successMessage = 'Budget set successfully!';
        this.errorMessage = null;
      },
      (error) => {
        this.successMessage = null;
        this.errorMessage = 'Failed to set budget. Please try again.';
      }
    );
  }

  loadItems() {
    this.apiService.getItems().subscribe((data) => {
      this.items = data;
      this.checkBudget(); // Validate budget after loading items
    });
  }

  calculateTotalPrice(): number {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  }

  checkBudget() {
    this.totalPrice = this.calculateTotalPrice();
    if (this.totalPrice > this.budgetAmount) {
      this.alertMessage = '⚠️ Warning: Expenses exceed budget!';
    } else {
      this.alertMessage = null;
    }
  }
}