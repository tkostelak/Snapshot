// import { Injectable } from '@angular/core';
// import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
// import { Uploads } from '../uploads';
// import * as firebase from 'firebase';
// import { AngularFireModule } from 'angularfire2';
// import { UploadComponent } from '../upload/upload.component';
//
// @Injectable()
// export class ImageService{
//   constructor() {}
// //
//   visibleImages = [];
//   getImages(){
//     return this.visibleImages = Images.slice(0);
//   }
//
//   getImage(id: number){
//     return Images.slice(0).find(image => image.id === id)
//   }
// }
//
// const Images = [
//   {'id': 1, 'category': 'animals', 'caption': 'What an adorable cat', 'url': 'assets/img/animals_01.jpg'},
//   {'id': 2, 'category': 'animals', 'caption': 'What an adorable dog', 'url': 'assets/img/animals_02.jpg'},
//   {'id': 3, 'category': 'travel', 'caption': 'Pyramids of Giza at sunset', 'url': 'assets/img/travel_01.jpg'},
//   {'id': 4, 'category': 'animals', 'caption': 'What a majestic fox', 'url': 'assets/img/animals_03.jpg'},
//   {'id': 5, 'category': 'people', 'caption': 'Breathtaking shot of children in the Himalayas', 'url': 'assets/img/people_01.jpg'},
//   {'id': 6, 'category': 'animals', 'caption': 'What an adorable kitten', 'url': 'assets/img/animals_04.jpg'},
//   {'id': 7, 'category': 'animals', 'caption': 'What adorable puppies', 'url': 'assets/img/animals_05.jpg'},
//   {'id': 8, 'category': 'travel', 'caption': 'The Eiffel Tower', 'url': 'assets/img/travel_02.jpg'},
//   {'id': 9, 'category': 'travel', 'caption': 'The Sydney Opera House', 'url': 'assets/img/travel_03.jpg'},
//   {'id': 10, 'category': 'travel', 'caption': 'Breathtaking Seattle Sunrise', 'url': 'assets/img/travel_04.jpg'},
//   {'id': 11, 'category': 'travel', 'caption': 'The Great Wall of China', 'url': 'assets/img/travel_05.jpg'},
//   {'id': 12, 'category': 'people', 'caption': 'Family in Porto Novo, Benin', 'url': 'assets/img/people_02.jpg'},
//   {'id': 13, 'category': 'people', 'caption': 'Two infant cousins in the Democratic Republic of Congo', 'url': 'assets/img/people_03.jpg'},
//   {'id': 14, 'category': 'people', 'caption': 'Brazilian Teenagers at Sunset', 'url': 'assets/img/people_04.jpg'},
//   {'id': 15, 'category': 'people', 'caption': 'Monks in Cambodia', 'url': 'assets/img/people_05.jpg'}
// ]
