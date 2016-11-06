import { Routes, RouterModule} from '@angular/router';
import { HomeComponent} from './home/home.component';
import { AuthComponent } from './auth/auth.component';
export const RouterConfig: Routes = [
  {
    path: 'register',
    component:AuthComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path:'',
    redirectTo: 'home',
    pathMatch:'full'
  },
  {
    path: '**',
    redirectTo: 'home'
  }
]
