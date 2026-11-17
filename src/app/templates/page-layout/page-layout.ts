import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavigationMenu } from '../../organisms/navigation-menu/navigation-menu';

@Component({
  imports: [NavigationMenu, RouterLink],
  selector: 'app-page-layout',
  styleUrl: './page-layout.css',
  templateUrl: './page-layout.html',
})
export class PageLayout {
  readonly showNavigation = input(false);
}
