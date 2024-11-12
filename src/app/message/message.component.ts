import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  decodedMessage: string = '';

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.messageService.getEncodedMessage().subscribe((encodedMessage) => {
      // Decode the Base64 message
      this.decodedMessage = atob(encodedMessage);
    });
  }
}
