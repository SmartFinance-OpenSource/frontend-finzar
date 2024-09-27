import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingViewComponent } from './saving-view.component';

describe('SavingsViewComponent', () => {
  let component: SavingViewComponent;
  let fixture: ComponentFixture<SavingViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavingViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
