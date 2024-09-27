import { Component, ChangeDetectionStrategy} from '@angular/core';
import {
  MatCard, MatCardActions, MatCardAvatar,
  MatCardContent, MatCardFooter,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle,
  MatCardTitleGroup
} from "@angular/material/card";
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatProgressSpinner, ProgressSpinnerMode} from "@angular/material/progress-spinner";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import {FormsModule} from "@angular/forms";
import {MatSlider, MatSliderThumb} from "@angular/material/slider";
import {MatIcon} from "@angular/material/icon";
import {MatFormField} from "@angular/material/form-field";
import {MatDatepickerToggle, MatDateRangeInput, MatDateRangePicker} from "@angular/material/datepicker";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatProgressBar} from "@angular/material/progress-bar";
import {MatButton} from "@angular/material/button";
import {MatCell, MatHeaderCell, MatHeaderRow, MatRow, MatTable} from "@angular/material/table";
import {MatTableModule} from '@angular/material/table';

export interface BudgetsTransactions {
  transactions: string;
  date: string;
  name: string;
  amount: string;
}

const ELEMENT_DATA: BudgetsTransactions[] = [
  {transactions: 'Food & Drink', date: 'Oct 17, 2024', name: 'Cena', amount: '-40.00 PEN'},
  {transactions: 'Food & Drink', date: 'Oct 16, 2024', name: 'Desayuno', amount: '-16.00 PEN'},
  {transactions: 'Food & Drink', date: 'Oct 15, 2024', name: 'Cafe', amount: '-3.50 PEN'},
  {transactions: 'Food & Drink', date: 'Oct 13, 2024', name: 'Almuerzo', amount: '-25.00 PEN'},
  {transactions: 'Food & Drink', date: 'Oct 11, 2024', name: 'Desayuno Restaurante', amount: '-50.00 PEN'},

];


@Component({
  selector: 'app-budgets-view',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardSubtitle,
    MatCardTitle,
    MatCardTitleGroup,
    MatCardHeader,
    MatProgressSpinner,
    MatCardActions,
    MatRadioGroup,
    MatRadioButton,
    FormsModule,
    MatSlider,
    MatSliderThumb,
    MatCardFooter,
    MatCardAvatar,
    MatIcon,
    MatFormField,
    MatDateRangeInput,
    MatDatepickerToggle,
    MatDateRangePicker,
    MatFormFieldModule,
    MatDatepickerModule,
    MatProgressBar,
    MatButton,
    MatTable,
    MatHeaderCell,
    MatCell,
    MatHeaderRow,
    MatRow,
    MatTableModule
  ],
  templateUrl: './budgets-view.component.html',
  styleUrl: './budgets-view.component.css',
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class BudgetsViewComponent {
  mode: ProgressSpinnerMode = 'determinate';
  value = 50;
  displayedColumns: string[] = ['transactions', 'date', 'name', 'amount'];
  dataSource = ELEMENT_DATA;


}
