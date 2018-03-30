import { Component, OnChanges, Input } from '@angular/core';
import { ImageService } from '../shared/image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnChanges {
  title = 'Gallery'
  visibleImages: any[] = [];
  @Input() filterBy?: string = 'all'

  constructor(private newImageService: ImageService) {
    this.visibleImages = this.newImageService.getImages();
  }

  ngOnChanges(){
    this.visibleImages = this.imageService.getImages();
  }
}
