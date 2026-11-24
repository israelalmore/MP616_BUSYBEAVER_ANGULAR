import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { Login } from './login';
import { routes } from '../../app.routes';

describe('Login', () => {
  let component: Login;
  let fixture: ComponentFixture<Login>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Login],
      providers: [provideRouter(routes)],
    }).compileComponents();

    fixture = TestBed.createComponent(Login);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders the login illustration with descriptive text and intrinsic dimensions', () => {
    const illustration = fixture.nativeElement.querySelector('img') as HTMLImageElement;

    expect(illustration.getAttribute('src')).toBe('/assets/images/acceso-seguro.webp');
    expect(illustration.alt).toBe(
      'Ilustración de un enfermero iniciando sesión en un portal sanitario protegido con escudo y candado',
    );
    expect(illustration.getAttribute('width')).toBe('341');
    expect(illustration.getAttribute('height')).toBe('255');
  });

  it('shows a success message for the local demo credentials', () => {
    const email = fixture.nativeElement.querySelector('#email') as HTMLInputElement;
    const password = fixture.nativeElement.querySelector('#password') as HTMLInputElement;

    email.value = 'enfermera@busybeaver.test';
    email.dispatchEvent(new Event('input'));
    password.value = 'Salud123!';
    password.dispatchEvent(new Event('input'));
    fixture.nativeElement.querySelector('button').click();
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('[role="status"]')?.textContent).toContain(
      'Inicio de sesión correcto',
    );
  });

  it.each([
    ['', ''],
    ['enfermera@busybeaver.test', 'incorrecta'],
  ])('shows an error for invalid credentials (%s)', (emailValue, passwordValue) => {
    const email = fixture.nativeElement.querySelector('#email') as HTMLInputElement;
    const password = fixture.nativeElement.querySelector('#password') as HTMLInputElement;

    email.value = emailValue;
    email.dispatchEvent(new Event('input'));
    password.value = passwordValue;
    password.dispatchEvent(new Event('input'));
    fixture.nativeElement.querySelector('button').click();
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('[role="alert"]')?.textContent).toContain(
      'No se pudo iniciar sesión',
    );
  });

  it('provides a link back to Home', () => {
    expect(fixture.nativeElement.querySelector('.home-link')?.getAttribute('href')).toBe('/');
  });
});
