import { Component, OnInit } from '@angular/core';
import { ImageService } from '../shared/image.service';
import { Uploads } from '../uploads';
import * as _ from "Lodash";


@Component({
  selector: 'upload-form',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor(private upSvc: ImageService) { }

  ngOnInit() {
  }

  detectFiles(event) {
    this.selectedFiles = event.target.files;
  }

  uploadSingle() {
    let file = this.selectedFiles.item(0)
    this.currentUpload = new Uploads(file);
    this.upSvc.pushUpload(this.currentUpload)
  }

  uploadMulti(){
    let files = this.selectedFiles
    let filesIndex = _.range(files.length)
    _.each(filesIndex, (idx) => {
      this.currentUpload = new Uploads(files[idx]);
      this.upsvc.pushUpload(this.currentUpload)]
    })
  }
}
