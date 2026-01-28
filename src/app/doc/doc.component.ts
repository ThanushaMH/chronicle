import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class DocComponent implements OnInit {
  docTitle: string = '';
  isMediaVisible = false; // Media visibility flag (initially hidden)
  mediaFiles: { name: string; url: string; type: string, size: number }[] = []; // Added size property for validation
  isDocSaved: boolean = false;
  
  isOverlayOpen: boolean = false; // Overlay visibility flag
  overlayMedia: { name: string; url: string; type: string } | null = null; // Selected media for overlay
  currentDateTime: string = ''; // Store current date and time
  totalMediaSize: number = 0; // Track the total size of all media files in bytes
  maxMediaSize: number = 2 * 1024 * 1024; // 2MB limit
fileErrorMessage: any;

  ngOnInit() {
    const now = new Date();
    this.currentDateTime = now.toLocaleString(); // Get current date and time
  }

  saveDoc() {
    if (this.docTitle.trim()) {
      alert(`Document titled "${this.docTitle}" has been saved!`);
      this.isDocSaved = true;
    } else {
      alert('Please enter a title before saving.');
    }
  }

  // Handle media file selection
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    let totalSize = this.mediaFiles.reduce((acc, file) => acc + (file as any).size || 0, 0); // Initialize totalSize before the block      
      if (input.files) {
        for (let i = 0; i < input.files.length; i++) {
        const file = input.files[i];
  
        // Check if adding the current file exceeds the size limit
        if (totalSize + file.size > 2 * 1024 * 1024) { // 2 MB limit
          alert('Total file size cannot exceed 2 MB. Please remove some files or choose smaller files.');
          return; // Stop further processing
        }
  
        totalSize += file.size; // Add file size to the total

        const reader = new FileReader();

        reader.onload = (e: any) => {
          this.mediaFiles.push({
            name: file.name,
            url: e.target.result,
            type: file.type,
            size: file.size
          });
          this.totalMediaSize += file.size; // Update total size after successful addition
        };

        reader.readAsDataURL(file);
      }
    }
  }

  // Toggle media visibility (show/hide)
  toggleMediaVisibility() {
    this.isMediaVisible = !this.isMediaVisible;
  }

  removeMedia(index: number) {
    const removedFile = this.mediaFiles.splice(index, 1)[0];
    this.totalMediaSize -= removedFile.size; // Update total size after removal
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
