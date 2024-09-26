import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {BaseGetService} from "../../../shared/services/base.service";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatCardModule} from "@angular/material/card";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {provideNativeDateAdapter} from "@angular/material/core";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {NgForOf} from "@angular/common";

const currentMonth = new Date();
const month = currentMonth.getMonth();
const year = currentMonth.getFullYear();
const nextMonth = new Date(currentMonth.getFullYear(),currentMonth.getMonth() + 1,1);
nextMonth.setDate(0);

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatFormFieldModule, MatDatepickerModule, MatCardModule, MatSelectModule, MatInputModule, MatButtonModule, NgForOf],
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent implements OnInit {
  categories: any[] = [];

  formsPlaceholder = new FormGroup({
    start: new FormControl(new Date(year, month, 1)),
    end: new FormControl(new Date(nextMonth)),
    category: new FormControl(null),
    note: new FormControl('')
  });

  constructor(private baseService: BaseGetService<any[]>){}

  ngOnInit(): void {
    this.loadCategories();
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
      category: null,
      note: ''
    });
  }
}
