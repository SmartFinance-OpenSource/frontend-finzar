import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BaseGetService} from "../../../shared/services/base.service";
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardActions, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatFormField, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatOption, provideNativeDateAdapter} from "@angular/material/core";
import {MatSelect} from "@angular/material/select";
import {NgForOf} from "@angular/common";
import {
  MatDatepickerToggle,
  MatDateRangeInput,
  MatDateRangePicker,
  MatEndDate,
  MatStartDate
} from "@angular/material/datepicker";

const currentMonth = new Date();
const month = currentMonth.getMonth();
const year = currentMonth.getFullYear();
const nextMonth = new Date(currentMonth.getFullYear(),currentMonth.getMonth() + 1,1);
nextMonth.setDate(0);
const currentUser = 1;

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule, MatButton, MatCard, MatCardActions, MatCardHeader, MatCardTitle, MatFormField, MatInput, MatLabel, MatOption, MatSelect, NgForOf, ReactiveFormsModule, MatDateRangeInput, MatDateRangePicker, MatDatepickerToggle, MatEndDate, MatStartDate, MatSuffix],
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent implements OnInit {
  categories: any[] = [];
  wallets: any[] = [];

  formsPlaceholder = new FormGroup({
    start: new FormControl(new Date(year, month, 1)),
    end: new FormControl(new Date(nextMonth)),
    wallet: new FormControl(null),
    category: new FormControl(null),
    note: new FormControl('')
  });

  constructor(private baseService: BaseGetService<any[]>){}

  ngOnInit(): void {

    this.loadWallets();
    this.loadCategories();
  }

  loadWallets(): void {
    this.baseService.getUserWallets(currentUser).subscribe(
      (walletList) => {
        this.wallets = walletList;
      },
      (e) => {
        console.error('Error fetching wallets:', e);
      }
    )
  }

  loadCategories(): void {
    this.baseService.getAllCategories().subscribe(
      (categoryList) => {
        this.categories = categoryList;
      },
      (e) => {
        console.error('Error fetching categories:', e);
      }
    )
  }

  resetFilters(): void {
    this.formsPlaceholder.reset({
      start: new Date(year, month, 1),
      end: new Date(nextMonth),
      wallet: null,
      category: null,
      note: ''
    });
  }
}
