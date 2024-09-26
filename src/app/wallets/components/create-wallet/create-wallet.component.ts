import { Component } from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";


@Component({
  selector: 'app-create-wallet',
  standalone: true,
  imports: [
    MatCardModule, MatFormFieldModule, FormsModule, MatInputModule,
    MatButtonModule
  ],
  templateUrl: './create-wallet.component.html',
  styleUrl: './create-wallet.component.css'
})
export class CreateWalletComponent {
  walletName: string = '';
  initialBalance = 0;

  onSubmit(): void {
    // Handle the form submission logic here
    console.log('Wallet Name:', this.walletName);
    console.log('Initial Balance:', this.initialBalance);
  }

  close(): void {
    // Handle the close logic here, e.g., reset form or navigate away
    this.walletName = '';
    this.initialBalance = 0;
    console.log('Form closed');
  }
}
