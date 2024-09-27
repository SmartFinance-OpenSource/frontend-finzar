import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBudgetsComponent} from "./create-budget.component";

describe('BudgetsViewComponent', () => {
  let component: CreateBudgetsComponent;
  let fixture: ComponentFixture<CreateBudgetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateBudgetsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CreateBudgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
