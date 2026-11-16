import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { routes } from '../app.routes';
import { NurseList } from './nurse-list';

describe('NurseList', () => {
  let fixture: ComponentFixture<NurseList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NurseList],
      providers: [provideRouter(routes)],
    }).compileComponents();

    fixture = TestBed.createComponent(NurseList);
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('displays every registered nurse, an icon, and navigation to Home', () => {
    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelectorAll('.nurse-card')).toHaveLength(6);
    expect(element.querySelector('svg[role="img"]')).toBeTruthy();
    expect(element.querySelector('a[routerLink="/"]')).toBeTruthy();
  });

  it('updates the visible favorites count when a nurse is selected', () => {
    const element = fixture.nativeElement as HTMLElement;
    const favoriteButton = element.querySelector('.favorite-button') as HTMLButtonElement;

    favoriteButton.click();
    fixture.detectChanges();

    expect(element.querySelector('.list-summary')?.textContent).toContain('1 favoritos');
    expect(element.querySelector('[role="status"]')?.textContent).toContain('1 profesional guardado');
    expect(favoriteButton.getAttribute('aria-pressed')).toBe('true');
  });
});
