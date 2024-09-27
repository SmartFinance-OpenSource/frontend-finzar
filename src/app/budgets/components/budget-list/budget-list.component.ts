import { Component, OnInit, Input } from '@angular/core';
import {BudgetItemComponent} from "../budget-item/budget-item.component";
import {MatCard} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {NgForOf} from "@angular/common";
import {BaseGetService} from "../../../../../../../../Downloads/budgets-bc/budgets-bc/budgets-bc/budgets-finzar/src/app/shared/services/base-service";

@Component({
  selector: 'app-saving-list',
  standalone: true,
  imports: [
    BudgetItemComponent,
    MatCard,
    MatIcon,
    NgForOf
  ],
  templateUrl: './saving-list.component.html',
  styleUrl: './saving-list.component.css'
})
export class BudgetListComponent implements OnInit {
  @Input() saving: any;
  savings: any[] = [];

  constructor(private baseGetService: BaseGetService<any>) {}

  ngOnInit() {
    this.baseGetService.getWalletSavings(312).subscribe({
      next: budgets => {
        this.savings = budgets;
      },
      error: err =>{
        console.error('Error fetching savings:', err);
      }
    });

  }

}
