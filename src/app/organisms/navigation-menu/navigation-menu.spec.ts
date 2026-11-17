import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { NavigationMenu } from './navigation-menu';

describe('NavigationMenu', () => {
  let component: NavigationMenu;
  let fixture: ComponentFixture<NavigationMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationMenu],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(NavigationMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
