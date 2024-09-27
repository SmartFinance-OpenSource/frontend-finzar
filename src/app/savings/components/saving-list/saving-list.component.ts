import { Component, OnInit, Input } from '@angular/core';
import {SavingItemComponent} from "../saving-item/saving-item.component";
import {MatCard} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {NgForOf} from "@angular/common";
import {BaseGetService} from "../../../shared/services/base.service";
import {RouterLink} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {CreateSavingComponent} from "../create-saving/create-saving.component";


@Component({
  selector: 'app-saving-list',
  standalone: true,
  imports: [
    SavingItemComponent,
    MatCard,
    MatIcon,
    NgForOf,
    RouterLink
  ],
  templateUrl: './saving-list.component.html',
  styleUrl: './saving-list.component.css'
})
export class SavingListComponent implements OnInit {
  @Input() saving: any;
  savings: any[] = [];

  constructor(private baseGetService: BaseGetService<any>, public dialog: MatDialog) {}

  ngOnInit() {
    // Cargar la lista de ahorros cuando el componente se inicie
    this.loadSavings();
  }

  // Método para abrir el diálogo
  onAddSaving(): void {
    const dialogRef = this.dialog.open(CreateSavingComponent, {
      width: '400px'
    });

    // Cuando se cierre el diálogo, obtener el resultado y agregarlo a la lista si es válido
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addSaving(result);
      }
    });
  }

  // Método para agregar el nuevo ahorro
  addSaving(newSaving: any): void {
    const saving = {
      walletId: 312,
      name: newSaving.savingName || 'Unnamed Saving',
      total_goal: newSaving.totalGoal || 0,
      current_goal: 0,
      current_amount: 0,
      saving_for: newSaving.savingFor || '',  // Guardar "Saving for"
      recurring_id: newSaving.recurringId,
      start_date: newSaving.startDate || new Date().toISOString().split('T')[0]
    };

    // Llamada POST para guardar el nuevo ahorro en db.json
    this.baseGetService.createSaving(saving).subscribe({
      next: (savedSaving) => {
        // Agregar el nuevo ahorro a la lista local y refrescar las cards
        this.savings.push(savedSaving);
        console.log('Saving added:', savedSaving);
      },
      error: err => {
        console.error('Error adding saving:', err);
      }
    });
  }

  // Método para cargar la lista de ahorros desde db.json
  loadSavings(): void {
    this.baseGetService.getWalletSavings(312).subscribe({
      next: savings => {
        this.savings = savings;
      },
      error: err => {
        console.error('Error fetching savings:', err);
      }
    });
  }

}
