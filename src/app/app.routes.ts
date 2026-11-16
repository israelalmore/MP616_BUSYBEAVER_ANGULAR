import { Routes } from '@angular/router';
import { Home } from './home/home';
import { NurseList } from './nurse-list/nurse-list';

export const routes: Routes = [
  { path: '', component: Home, title: 'Home | Busy Beaver' },
  { path: 'registry', component: NurseList, title: 'Registro de enfermería | Busy Beaver' },
  { path: '**', redirectTo: '' },
];
