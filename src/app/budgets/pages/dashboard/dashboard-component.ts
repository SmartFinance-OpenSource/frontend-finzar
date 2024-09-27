import { Component } from '@angular/core';
import {HeaderContentComponent} from "../../../../../../../../Downloads/budgets-bc/budgets-bc/budgets-bc/budgets-finzar/src/app/public/components/header-content/header-content.component";
import {CreateBudgetsComponent} from "../../components/create-budget/create-budget.component";
import {BudgetListComponent} from "../../components/budget-list/budget-list.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    HeaderContentComponent,
    CreateBudgetsComponent,
    BudgetListComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
