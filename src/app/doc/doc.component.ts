import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class DocComponent {
  docTitle: string = '';
  isMediaPanelOpen = false;
  mediaFiles: { name: string; url: string; type: string }[] = [];
  isDocSaved: boolean = false;
  
  isOverlayOpen: boolean = false; // To manage overlay visibility
  overlayMedia: { name: string; url: string; type: string } | null = null; // Track selected media for overlay

 

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  saveDoc() {
    if (this.docTitle.trim()) {
      alert(`Document titled "${this.docTitle}" has been saved!`);
      this.isDocSaved = true;
    } else {
      alert('Please enter a title before saving.');
    }
  }
  triggerFileInput() {
    this.fileInput.nativeElement.click();
  }
  

  toggleMediaPanel() {
    this.isMediaPanelOpen = !this.isMediaPanelOpen;
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      for (let i = 0; i < input.files.length; i++) {
        const file = input.files[i];
        const reader = new FileReader();

        reader.onload = (e: any) => {
          this.mediaFiles.push({
            name: file.name,
            url: e.target.result,
            type: file.type
          });
        };

        reader.readAsDataURL(file);
      }
    }
  }

  removeMedia(index: number) {
    this.mediaFiles.splice(index, 1);
  }

  openOverlay(media: { name: string; url: string; type: string }) {
    this.overlayMedia = media;
    this.isOverlayOpen = true;
  }

  closeOverlay() {
    this.isOverlayOpen = false;
    this.overlayMedia = null;
  }

  
}
