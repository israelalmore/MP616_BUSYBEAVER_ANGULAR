import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  protected readonly navigation = [
    { label: 'Acceso', path: '/login', icon: '↪' },
    { label: 'Registro', path: '/registry', icon: '▤' },
    { label: 'Buscar', path: '/search', icon: '⌕' },
  ];

  protected readonly isExploring = signal(false);
}
