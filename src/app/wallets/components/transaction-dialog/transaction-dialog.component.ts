import {Component, inject, OnInit} from '@angular/core';
import {MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {BaseGetService} from "../../../shared/services/base.service";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";
import {NgForOf} from "@angular/common";
import {MatCard} from "@angular/material/card";

@Component({
  selector: 'app-transaction-dialog',
  standalone: true,
  imports: [MatDialogModule, MatInputModule, FormsModule, MatButtonModule, MatSelect, MatOption, MatDatepicker, MatDatepickerToggle, MatDatepickerInput, NgForOf, MatCard],
  templateUrl: './transaction-dialog.component.html',
  styleUrl: './transaction-dialog.component.css'
})
export class TransactionDialogComponent implements OnInit {
  typeId: number = 0;
  categoryId: number = 0;
  amount: number = 0;
  date: Date = new Date();
  note: string = '';
  recurrence: string = '';

  types: any[] = [];  // Lista para tipos de transacción
  categories: any[] = [];  // Lista para categorías
  recurrencies: any[] = [];  // Lista para recurrencias

  constructor(
    private baseService: BaseGetService<any>,
    private dialogRef: MatDialogRef<TransactionDialogComponent>
  ) {
  }

  ngOnInit(): void {
    // Cargar tipos de transacción
    this.baseService.getAllTransactionTypes().subscribe({
      next: (data: any) => {
        this.types = data;
      },
      error: (err) => {
        console.error('Error fetching transaction types:', err);
      }
    });

    // Cargar categorías
    this.baseService.getAllCategories().subscribe({
      next: (data: any) => {
        this.categories = data;
      },
      error: (err) => {
        console.error('Error fetching categories:', err);
      }
    });

    // Cargar recurrencias
    this.baseService.getAllRecurrents().subscribe({
      next: (data: any) => {
        this.recurrencies = data;
      },
      error: (err) => {
        console.error('Error fetching recurrencies:', err);
      }
    });
  }

  addTransaction() {
    const newTransaction = {
      typeId: this.typeId,
      categoryId: this.categoryId,
      amount: this.amount,
      date: this.date,
      note: this.note,
      recurrence: this.recurrence
    };

    this.baseService.createTransaction(newTransaction).subscribe({
      next: (response) => {
        console.log('Transaction created successfully:', response);
        this.dialogRef.close(newTransaction);  // Cerrar el diálogo y pasar la nueva transacción
      },
      error: (err) => {
        console.error('Error creating transaction:', err);
      }
    });
  }
}
