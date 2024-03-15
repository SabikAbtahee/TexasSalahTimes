import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalahTimesComponent } from './salah-times.component';

describe('SalahTimesComponent', () => {
  let component: SalahTimesComponent;
  let fixture: ComponentFixture<SalahTimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalahTimesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalahTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
