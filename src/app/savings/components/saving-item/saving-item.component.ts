import { Component, Input } from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import { Saving } from '../../model/saving.entity';
import { CommonModule } from '@angular/common';
import {MatProgressBar} from "@angular/material/progress-bar"; // Asegúrate de importar CommonModule
import {RouterLink} from "@angular/router";
import {MatButton} from "@angular/material/button";
import { BaseGetService } from '../../../shared/services/base.service';
import {MatDialog} from "@angular/material/dialog";


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
    MatProgressBar,
    RouterLink,
    MatCardActions,
    MatButton
  ],
  templateUrl: './saving-item.component.html',
  styleUrl: './saving-item.component.css'
})
export class SavingItemComponent {
  @Input() saving!: Saving;

  constructor(private baseGetService: BaseGetService<any>) {}

  getPercentage(): number {
    return (this.saving.current_amount / this.saving.total_goal) * 100;
  }

  onDeleteSaving(savingId: number): void {
    this.baseGetService.deleteSaving(savingId).subscribe({
      next: () => {
        // Eliminar el ahorro de la lista actual
        console.log(`Saving with ID ${savingId} deleted`);
        // Puedes agregar aquí un evento o lógica para actualizar la lista de ahorros en la UI
      },
      error: err => {
        console.error('Error deleting saving:', err);
      }
    });
  }

}
