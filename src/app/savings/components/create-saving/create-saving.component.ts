import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import {NgForOf, NgIf} from "@angular/common";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';

@Component({
  selector: 'app-create-saving',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    NgIf,
    MatSelect,
    MatOption,
    NgForOf,
    MatDatepickerToggle,
    MatDatepicker,
    MatDatepickerInput,
    MatDatepickerModule
  ],
  templateUrl: './create-saving.component.html',
  styleUrl: './create-saving.component.css'
})
export class CreateSavingComponent {
  savingName: string = '';
  totalGoal = 0;
  savingFor: string = '';  // Nuevo campo para "Saving for"
  recurringId: number | undefined;
  startDate: string | undefined;


  recurrences = [
    { value: 1, viewValue: 'Once' },
    { value: 2, viewValue: 'Daily' },
    { value: 3, viewValue: 'Weekly' },
    { value: 4, viewValue: 'Biweekly' },
    { value: 5, viewValue: 'Monthly' },
    { value: 6, viewValue: 'Yearly' }
  ];

  constructor(private dialogRef: MatDialogRef<CreateSavingComponent>) {}

  onSubmit(): void {
    if (this.savingName && this.totalGoal >= 0) {
      this.dialogRef.close({
        savingName: this.savingName,
        totalGoal: this.totalGoal,
        savingFor: this.savingFor,  // Guardar el propósito del ahorro
        recurringId: this.recurringId,
        startDate: this.startDate
      });
    }
  }

  close(): void {
    this.dialogRef.close(null);
  }
}
