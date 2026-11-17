import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { NurseList } from './pages/nurse-list/nurse-list';
import { Login } from './pages/login/login';
import { Search } from './pages/search/search';

export const routes: Routes = [
  { path: '', component: Home, title: 'Home | Busy Beaver' },
  { path: 'registry', component: NurseList, title: 'Registro de enfermería | Busy Beaver' },
  { path: 'login', component: Login, title: 'Login | Busy Beaver' },
  { path: 'search', component: Search, title: 'Search | Busy Beaver' },
  { path: '**', redirectTo: '' },
];