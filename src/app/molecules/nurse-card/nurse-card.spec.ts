import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NurseCard } from './nurse-card';

describe('NurseCard', () => {
  let component: NurseCard;
  let fixture: ComponentFixture<NurseCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NurseCard],
    }).compileComponents();

    fixture = TestBed.createComponent(NurseCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
