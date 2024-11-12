import { Component, OnInit } from '@angular/core';
import { RouterModule,RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone:true,
  imports:[RouterModule,RouterOutlet],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  // Properties for dynamic content
  quoteOfTheDay!: string; // Definite assignment assertion

  quotes: string[] = [
    '"Writing is the painting of the voice." - Voltaire',
    '"Fill your paper with the breathings of your heart." - William Wordsworth',
    '"Journal writing is a voyage to the interior." - Christina Baldwin',
    '"The pen is the tongue of the mind." - Miguel de Cervantes',
    '"Documenting little details of your everyday life becomes a celebration of who you are." - Carolyn V. Hamilton'
  ];

  constructor() {}

  ngOnInit(): void {
    // Initialize with a random quote of the day
    this.getRandomQuote();
  }

  // Method to get a random quote
  getRandomQuote(): void {
    const randomIndex = Math.floor(Math.random() * this.quotes.length);
    this.quoteOfTheDay = this.quotes[randomIndex];
  }

  // Method to handle the "Start Your Journey" button click
  startJourney(): void {
    console.log('Navigating to the journal creation page...');
    // Here you would typically navigate to another component or display a dialog
  }
  
}