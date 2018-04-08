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

  ngOnInit() {
  }
}
