import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FamousMonument } from './famous-monument';

describe('FamousMonument', () => {
  let component: FamousMonument;
  let fixture: ComponentFixture<FamousMonument>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FamousMonument],
    }).compileComponents();

    fixture = TestBed.createComponent(FamousMonument);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
