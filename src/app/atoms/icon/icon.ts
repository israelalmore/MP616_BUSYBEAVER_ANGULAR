import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-icon',
  styleUrl: './icon.css',
  templateUrl: './icon.html',
})
export class Icon {
  readonly name = input<'search' | 'users' | 'star'>('search');
}
