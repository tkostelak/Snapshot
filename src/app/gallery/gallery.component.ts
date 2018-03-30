import { Component, OnChanges } from '@angular/core';
import { ImageService } from '../shared/image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  title = 'Gallery'
  visibleImages: any[] = [];

  constructor(private newImageService: ImageService) {
    this.visibleImages = this.newImageService.getImages();

   }

}
