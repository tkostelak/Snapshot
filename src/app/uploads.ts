export class Uploads {
  $key: string;
  file: File;
  name: string;
  url: string;
  progress: number;
  createdAt: Date = new Date();
  caption: string;
  category: string;

  constructor(file:File){

    this.file = file;
  }
}
