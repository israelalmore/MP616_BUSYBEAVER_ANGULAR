import { Component, input, output } from '@angular/core';
import { Image } from '../../atoms/image/image';
import { Icon } from '../../atoms/icon/icon';

export interface NurseCardData {
  id: number;
  name: string;
  surname?: string;
  unit?: string;
  shift?: 'Mañana' | 'Tarde' | 'Noche';
  specialty?: string;
  department?: string;
}

@Component({
  imports: [Icon, Image],
  selector: 'app-nurse-card',
  styleUrl: './nurse-card.css',
  templateUrl: './nurse-card.html',
})
export class NurseCard {
  readonly nurse = input<NurseCardData>({ id: 0, name: 'Enfermero', surname: '' });
  readonly compact = input(false);
  readonly favorite = input(false);
  readonly favoriteToggled = output<number>();

  protected initials(name: string): string {
    return name.split(' ').map((part) => part[0]).join('').slice(0, 2).toUpperCase();
  }
}
