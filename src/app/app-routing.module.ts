import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import the components for routing
import { HomeComponent } from './components/home/home.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { ItemListComponent } from './components/item-list/item-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add-item', component: AddItemComponent },
  { path: 'list-item', component: ItemListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Register routes
  exports: [RouterModule]  // Export RouterModule so it's available throughout the app
})
export class AppRoutingModule { }
