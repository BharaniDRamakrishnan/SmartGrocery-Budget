import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:3000/api'; // update this if your backend uses a different port

  constructor(private http: HttpClient) {}

  setBudget(budget: { amount: number }): Observable<any> {
    return this.http.post(`${this.baseUrl}/budget`, budget);
  }
  getBudget() {
  return this.http.get<{ amount: number }>('http://localhost:3000/api/budget');
}

  addItem(item: { name: string; price: number }) {
  return this.http.post('http://localhost:3000/api/items', item);
}

  getItems(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/items`);
  }
 deleteItem(itemId: string) {
  return this.http.delete(`http://localhost:3000/api/items/${itemId}`);
}
}
