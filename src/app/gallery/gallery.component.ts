import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { ImageService } from '../services/image.service';
import { ImageFilterPipe } from '../shared/filter.pipe';
import { Observable } from 'rxjs/Observable';
import { GalleryImage } from '../models/galleryimage.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, OnChanges{
  images: Observable<GalleryImage[]>;

  constructor(private imageService: ImageService) {
  }

  ngOnInit(){
    this.images = this.imageService.getImages();
  }

  ngOnChanges(){
    this.images = this.imageService.getImages();
  }
}
