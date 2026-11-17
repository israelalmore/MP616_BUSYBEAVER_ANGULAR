import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { routes } from '../../app.routes';
import { Search } from './search';

describe('Search', () => {
  let fixture: ComponentFixture<Search>;
  let element: HTMLElement;

  const searchFor = (term: string) => {
    const input = element.querySelector('input') as HTMLInputElement;
    input.value = term;
    input.dispatchEvent(new Event('input'));
    (element.querySelector('button[type="submit"]') as HTMLButtonElement).click();
    fixture.detectChanges();
  };

  const names = () =>
    Array.from(element.querySelectorAll('.nurse-card strong')).map((n) => n.textContent?.trim());

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Search],
      providers: [provideRouter(routes)],
    }).compileComponents();

    fixture = TestBed.createComponent(Search);
    element = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('renders the icons and a link back to Home', () => {
    expect(element.querySelector('svg[role="img"]')).toBeTruthy();
    expect(element.querySelector('.search-icon')).toBeTruthy();
    expect(element.querySelector('.home-link')?.getAttribute('href')).toBe('/');
  });

  it('lists every nurse before searching', () => {
    expect(names().length).toBe(7);
  });

  it('returns exactly 3 results when searching "Mar"', () => {
    searchFor('Mar');

    expect(names()).toEqual(['María García', 'Marta López', 'Mario Sánchez']);
    expect(element.querySelector('.results-count')?.textContent).toContain('3 resultados');
  });

  it('ignores case and accents', () => {
    searchFor('LUCIA');

    expect(names()).toEqual(['Lucía Fernández']);
  });

  it('shows a message when nothing matches', () => {
    searchFor('Pedro');

    expect(names().length).toBe(0);
    expect(element.querySelector('[role="alert"]')?.textContent).toContain('Pedro');
  });

  it('restores the full list after clearing the search', () => {
    searchFor('Mar');
    (element.querySelector('.link-button') as HTMLButtonElement).click();
    fixture.detectChanges();

    expect(names().length).toBe(7);
    expect((element.querySelector('input') as HTMLInputElement).value).toBe('');
  });
});
