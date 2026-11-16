import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './login/login';
import { Search } from './search/search';

export const routes: Routes = [
  { path: '', component: Home, title: 'Home | Busy Beaver' },
  { path: 'login', component: Login, title: 'Login | Busy Beaver' },
  { path: 'search', component: Search, title: 'Search | Busy Beaver' },
  { path: '**', redirectTo: '' },
];
