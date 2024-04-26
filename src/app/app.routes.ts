import { Routes } from '@angular/router';
import { CandyMachineComponent } from './components/candy-machine/candy-machine.component';
import { AutomatoComponent } from './components/automato/automato.component';
import { HomeComponent } from './components/home/home.component';
import { ElevatorComponent } from './components/elevator/elevator.component';

export const routes: Routes = [
  {
    path: 'candy-machine',
    component: CandyMachineComponent,
    pathMatch: 'full',
  },
  {
    path: 'automato',
    component: AutomatoComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'elevator',
    component: ElevatorComponent
  }
];
