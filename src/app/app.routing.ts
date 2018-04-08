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
import { LoginComponent } from './login/login.component';
import { AuthenticationGuard } from './services/authenticationGuard.service';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent, canActivate: [AuthenticationGuard]
  },
  {
    path: 'image/:id',
    component: ImageComponent, canActivate: [AuthenticationGuard]
  },
  {
    path: 'upload',
    component: UploadComponent, canActivate: [AuthenticationGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

//Guard is feature that prevents user from visiting URL without first authenticating!
