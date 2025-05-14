import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';  // Import RouterModule for routing
import { FormsModule } from '@angular/forms';   // Import FormsModule for ngModel
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule for API calls

import { AppRoutingModule } from './app-routing.module';
// Import the standalone components
import { HomeComponent } from './components/home/home.component';  
import { AddItemComponent } from './components/add-item/add-item.component';  
import { ItemListComponent } from './components/item-list/item-list.component';  

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([  // Add your routes here
      { path: '', component: HomeComponent },
      { path: 'add-item', component: AddItemComponent },
      { path: 'list-item', component: ItemListComponent },
    ]),
    FormsModule,   // Import FormsModule globally
    HttpClientModule, // Import HttpClientModule globally
    HomeComponent,  
    AddItemComponent,  
    ItemListComponent,
    AppRoutingModule  
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
