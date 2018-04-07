import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';

import { ImageFilterPipe} from './shared/filter.pipe'
// import { ImageService } from './shared/image.service';
import { AppComponent } from './app.component';
import { NavbarComponent} from './navbar/navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageComponent } from './image/image.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UploadComponent } from './upload/upload.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: 'image/:id',
    component: ImageComponent
  },
  {
    path: 'upload',
    component: UploadComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
