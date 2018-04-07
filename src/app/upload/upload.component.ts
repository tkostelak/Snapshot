import { Component, OnInit } from '@angular/core';
// import { ImageService } from '../shared/image.service';
import { Uploads } from '../uploads';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { AngularFirestore } from 'angularfire2/firestore';
import * as _ from "Lodash";
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';

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

  constructor(private storage: AngularFireStorage, private db: AngularFirestore) { }

  toggleHover(event: boolean){

  }

  startUpload(event: FileList){
    const file = event.item(0);

    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type :( ')
      return;
    }

    const path = `test/${new Date().getTime()}_${file.name}`;

    this.task = this.storage.upload(path, file)

    this.percentage = this.task.percentageChanges();
    this.snapshot = this.task.snapshotChanges().pipe(
      tap(snap => {
        if (snap.bytesTransferred === snap.totalBytes){
          this.db.collection('photos').add( { path, size: snap.totalBytes})
        }
      })
    )

    this.downloadURL = this.task.downloadURL();
  }

  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes
  }

  ngOnInit() {
  }
}
