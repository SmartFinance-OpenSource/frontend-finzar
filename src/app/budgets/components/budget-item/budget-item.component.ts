import { Component, Input } from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import { Budget} from "../../model/budget.entity";
import { CommonModule } from '@angular/common';
import {MatProgressBar} from "@angular/material/progress-bar"; // Asegúrate de importar CommonModule


@Component({
  selector: 'app-saving-item',
  standalone: true,
  imports: [
    MatCardTitle,
    MatCardHeader,
    MatIcon,
    MatCard,
    MatCardContent,
    CommonModule,
    MatProgressBar
  ],
  templateUrl: './saving-item.component.html',
  styleUrl: './saving-item.component.css'
})
export class BudgetItemComponent {
  @Input() budget!: Budget;
  getPercentage(): number {
    return (this.budget.current_amount / this.budget.total_goal) * 100;
  }
}
