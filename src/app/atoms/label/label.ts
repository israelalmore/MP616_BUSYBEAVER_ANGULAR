import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-label',
  styleUrl: './label.css',
  templateUrl: './label.html',
})
export class Label {
  readonly forId = input('');
  readonly text = input('');
}
