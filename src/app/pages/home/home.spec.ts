import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { routes } from '../../app.routes';
import { Home } from './home';

describe('Home', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home],
      providers: [provideRouter(routes)],
    }).compileComponents();
  });

  it('renders the illustration and links to each destination', () => {
    const fixture = TestBed.createComponent(Home);
    fixture.detectChanges();
    const element = fixture.nativeElement as HTMLElement;
    const illustration = element.querySelector('img') as HTMLImageElement;

    expect(illustration.getAttribute('src')).toBe('/assets/images/inicio-hero.webp');
    expect(illustration.alt).toBe(
      'Ilustración de una enfermera y el castor Busy Beaver gestionando datos sanitarios con gráficos en pantalla',
    );
    expect(illustration.getAttribute('width')).toBe('407');
    expect(illustration.getAttribute('height')).toBe('299');
    expect(element.querySelector('svg[role="img"]')).toBeTruthy();
    expect(Array.from(element.querySelectorAll('nav a')).map((link) => link.getAttribute('href'))).toEqual([
      '/login',
      '/registry',
      '/search',
    ]);
  });

  it('shows an information message after the button is clicked', () => {
    const fixture = TestBed.createComponent(Home);
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('button') as HTMLButtonElement;

    button.click();
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('[role="status"]')?.textContent).toContain(
      'Usa el menú superior para acceder a las secciones disponibles.',
    );
  });
});
