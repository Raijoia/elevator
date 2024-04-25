import { Routes } from '@angular/router';
import { InitialPageComponent } from './components/initial-page/initial-page.component';
import { AutomatoComponent } from './components/automato/automato.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {
    path: 'candy-machine',
    component: InitialPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'automato',
    component: AutomatoComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];
