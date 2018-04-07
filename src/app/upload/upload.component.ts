import { Component, OnInit } from '@angular/core';
import { ImageService } from '../shared/image.service';
import { Uploads } from '../uploads';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import * as _ from "Lodash";
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'upload-form',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  task: AngularFireUploadTask;

  percentage: Observable<number>;

  snapshot: Observable<any>;

  downloadURL : Observable<string>;

  isHovering: boolean;

  constructor(private storage: AngularFireStorage) { }

  toggleHover(event: boolean){

  }

  startUpload(event: FileList){
    const file = event.item(0);

    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type :( ')
    }
  }

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
