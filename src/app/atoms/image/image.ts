import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-image',
  styleUrl: './image.css',
  templateUrl: './image.html',
})
export class Image {
  readonly initials = input('??');
}
