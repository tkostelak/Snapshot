import { Component, OnInit, Input } from '@angular/core';
import { ImageService } from '../shared/image.service';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database'
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  @Input() file: File;

  constructor(private imageService: ImageService, private route: ActivatedRoute) { }

  ngOnInit(){
    this.image = this.imageService.getImage(
      +this.route.snapshot.params['id']
    )
  }

  updateTimeStamp() {
    let date = new Date()
    this.imageService.updateImage(this.image.$key, { timeStamp: date})
  }

  updateActive(value: boolean) {
    this.imageService.updateImage(this.image.$key, { active: value})
  }

  deleteImage() {
    this.imageService.deleteImage(this.image.$key)
  }

}
