import {Component, ChangeDetectionStrategy, OnInit, Input} from '@angular/core';
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
import {HeaderContentComponent} from "../../../public/components/header-content/header-content.component";
import {BaseGetService} from "../../../shared/services/base.service";
import {NgForOf} from "@angular/common";
import {CommonModule } from "@angular/common";
import {RouterLink} from "@angular/router";
import {Saving} from "../../model/saving.entity";
import {ActivatedRoute} from "@angular/router";


export interface SavingsTransactions {
  transactions: string;
  date: string;
  name: string;
  amount: string;
}

const ELEMENT_DATA: SavingsTransactions[] = [
  {transactions: 'Extra income', date: 'Oct 17, 2024', name: 'Apuesta deportiva', amount: '+500.00 PEN'},
  {transactions: 'Extra income', date: 'Oct 16, 2024', name: 'trabajito de calculo', amount: '+216.00 PEN'},
  {transactions: 'Extra income', date: 'Oct 15, 2024', name: 'fiver editor payment', amount: '+257.40 PEN'},
  {transactions: 'Extra income', date: 'Oct 13, 2024', name: 'Sueldo trabajo', amount: '+1025.00 PEN'},
  {transactions: 'Extra income', date: 'Oct 11, 2024', name: 'Yape', amount: '+50.00 PEN'},

];


@Component({
  selector: 'app-saving-view',
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
    MatTableModule,
    HeaderContentComponent,
    NgForOf,
    CommonModule,
    RouterLink
  ],
  templateUrl: './saving-view.component.html',
  styleUrl: './saving-view.component.css',
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class SavingViewComponent implements OnInit {
  id!:string;
  saving!: Saving;
  savings: any[] = [];

  constructor(private baseGetService: BaseGetService<any>, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Capturar el parámetro `id` de la URL
    const id = this.route.snapshot.paramMap.get('id');

    // Obtener los detalles del ahorro utilizando el `id`
    this.baseGetService.getWalletSavings(id).subscribe({
      next: (saving) => {
        this.saving = saving;
      },
      error: (err) => {
        console.error('Error fetching saving details:', err);
      }
    });
  }

  mode: ProgressSpinnerMode = 'determinate';
  value = 50;
  displayedColumns: string[] = ['transactions', 'date', 'name', 'amount'];
  dataSource = ELEMENT_DATA;


}
