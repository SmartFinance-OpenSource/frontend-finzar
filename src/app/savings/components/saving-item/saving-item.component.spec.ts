import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingItemComponent } from './saving-item.component';

describe('SavingItemComponent', () => {
  let component: SavingItemComponent;
  let fixture: ComponentFixture<SavingItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavingItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
