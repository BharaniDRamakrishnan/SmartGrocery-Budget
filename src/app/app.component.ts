import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavComponent } from './components/nav/nav.component'; // ✅ Import standalone component

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true, // ✅ Mark as standalone
  imports: [RouterModule, NavComponent] // ✅ Import RouterModule here
})
export class AppComponent {}