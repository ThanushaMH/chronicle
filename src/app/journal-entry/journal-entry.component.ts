import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-journal-entry',
  templateUrl: './journal-entry.component.html',
  standalone: true,
  imports: [ CommonModule, RouterModule /* Material modules */ ]
})
export class JournalEntryComponent {
  showMedia = false;
  toggleMedia() {
    this.showMedia = !this.showMedia;
  }
}
