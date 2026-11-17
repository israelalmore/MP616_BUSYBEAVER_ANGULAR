import { Component, input, output } from '@angular/core';
import { NurseCard, NurseCardData } from '../../molecules/nurse-card/nurse-card';

@Component({
  imports: [NurseCard],
  selector: 'app-nurse-list-organism',
  styleUrl: './nurse-list.css',
  templateUrl: './nurse-list.html',
})
export class NurseList {
  readonly nurses = input<NurseCardData[]>([]);
  readonly favorites = input<Set<number>>(new Set());
  readonly favoriteToggled = output<number>();
}
