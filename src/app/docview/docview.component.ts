import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-doc-view',
  templateUrl: './docview.component.html',
  styleUrls: ['./docview.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class DocViewComponent {
  docTitle: string = 'Sample Document';
  isEditable: boolean = false; // View-only mode by default
  isMediaPanelOpen: boolean = false;
  mediaFiles: { name: string; url: string; type: string }[] = [];
  isOverlayOpen: boolean = false;
  overlayMedia: { name: string; url: string; type: string } | null = null;

  // For Delete Dialog
  isDeleteDialogOpen: boolean = false;

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  editDoc() {
    this.isEditable = true; // Enable editing
  }

  saveDoc() {
    this.isEditable = false; // Disable editing
    alert('Document saved!');
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

  confirmDelete() {
    this.isDeleteDialogOpen = true;
  }

  cancelDelete() {
    this.isDeleteDialogOpen = false;
  }

  deleteDoc() {
    // Call backend delete endpoint (just a mock for now)
    alert('Entry deleted!');
    this.isDeleteDialogOpen = false;
    // After delete, navigate or perform any needed action
  }

  closeDoc() {
    // Navigate to the previous component
    // Assuming you use Angular's router, you can use this:
    window.history.back();
  }
}
