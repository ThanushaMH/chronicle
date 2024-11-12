import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Entry {
  title: string;
  createdDate: string;
  content: string;
}

@Component({
  selector: 'app-view-entries',
  standalone: true,
  templateUrl: './view-entries.component.html',
  styleUrls: ['./view-entries.component.css'],
  imports: [FormsModule,CommonModule],
})
export class ViewEntriesComponent implements OnInit {
  entries: Entry[] = [];
  filteredEntries: Entry[] = [];
  lastTenEntries: Entry[] = [];
  searchTitle: string = '';
  selectedDate: string = '';
  currentDate: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.currentDate = new Date().toISOString().split('T')[0];
    this.fetchEntries();
  }

  fetchEntries() {
    const mockEntries: Entry[] = [
      { title: 'My First Entry', createdDate: '2023-11-01', content: 'This is the content of my first entry.' },
      { title: 'Learning Angular', createdDate: '2023-11-02', content: 'Today I learned about Angular components.' },
      { title: 'Sunny Day', createdDate: '2023-11-03', content: 'It was a beautiful, sunny day outside.' },
      { title: 'Angular Services', createdDate: '2023-11-04', content: 'Explored Angular services today.' },
      { title: 'Another Entry', createdDate: '2023-11-05', content: 'Just another entry for testing.' },
      { title: 'Mock Data Entry', createdDate: '2023-11-06', content: 'Testing mock data in my app.' },
      { title: 'Frontend Testing', createdDate: '2023-11-07', content: 'Setting up mock data for frontend testing.' },
      { title: 'Components Overview', createdDate: '2023-11-08', content: 'Reviewed Angular component structure.' },
      { title: 'Final Entry', createdDate: '2023-11-09', content: 'This is the final entry in the mock data.' },
      { title: 'Testing Complete', createdDate: '2023-11-10', content: 'Completing frontend testing with mock data.' }
    ];

    this.entries = mockEntries;
    this.filteredEntries = mockEntries;
    this.lastTenEntries = mockEntries.slice(-10).reverse();
  }

  onSearchTitle() {
    const foundEntry = this.entries.find(entry => entry.title.toLowerCase().includes(this.searchTitle.toLowerCase()));
    if (foundEntry) {
      this.router.navigate(['/entry', foundEntry.createdDate]); // Navigate to the new entry component with the date as a parameter
    }
  }

  onSelectDate(date: string) {
    const foundEntry = this.entries.find(entry => entry.createdDate === date);
    if (foundEntry) {
      this.router.navigate(['/entry', foundEntry.createdDate]); // Navigate to the new entry component with the date as a parameter
    }
  }
}
