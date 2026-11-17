import { Component, signal } from '@angular/core';
import { Button } from '../../atoms/button/button';
import { PageLayout } from '../../templates/page-layout/page-layout';

@Component({
  imports: [Button, PageLayout],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  protected readonly isExploring = signal(false);
}
