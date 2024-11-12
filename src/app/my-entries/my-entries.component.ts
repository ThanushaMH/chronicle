import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-my-entries',
  standalone: true,
  imports:[RouterModule,RouterOutlet],
  templateUrl: './my-entries.component.html',
  styleUrls: ['./my-entries.component.css']
})
export class MyEntriesComponent {
  constructor(private router: Router) {} // Inject Router
  // Any required functionality for buttons can go here
  addEntry() {
    console.log("Add Entry clicked");
    this.router.navigate(['./friends']); // Adjust the path as needed
    // Logic to add a new entry
  }

  viewEntries() {
    console.log("View Entries clicked");
    this.router.navigate(['./doc']);
    // Logic to view all entries
  }
}