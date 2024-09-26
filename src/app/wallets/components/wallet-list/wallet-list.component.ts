import {Component, OnInit} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {WalletItemComponent} from "../wallet-item/wallet-item.component";
import {BaseGetService} from "../../../shared/services/base.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-wallet-list',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    WalletItemComponent,
    NgForOf
  ],
  templateUrl: './wallet-list.component.html',
  styleUrl: './wallet-list.component.css'
})
export class WalletListComponent implements OnInit {
  wallets: any[] = []; // Variable to store wallets

  constructor(private baseGetService: BaseGetService<any>) {}

  ngOnInit(): void {
    this.baseGetService.getUserWallets(1).subscribe({
      next: wallets => {
        this.wallets = wallets; // Store the fetched wallets
      },
      error: err => {
        console.error('Error fetching wallets:', err);
      }
    });
  }
}
