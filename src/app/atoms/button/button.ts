import { Component, input, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-button',
  styleUrl: './button.css',
  templateUrl: './button.html',
})
export class Button {
  readonly type = input<'button' | 'submit' | 'reset'>('button');
  readonly variant = input<'primary' | 'link' | 'icon'>('primary');
  readonly clicked = output<MouseEvent>();
}
