import {Component, OnInit} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {WalletItemComponent} from "../wallet-item/wallet-item.component";
import {BaseGetService} from "../../../shared/services/base.service";
import {NgForOf} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {CreateWalletComponent} from "../create-wallet/create-wallet.component";
import {Wallet} from "../../model/wallet.entity";

@Component({
  selector: 'app-wallet-list',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    WalletItemComponent,
    NgForOf,
    MatButtonModule,
    MatDialogModule
  ],
  templateUrl: './wallet-list.component.html',
  styleUrl: './wallet-list.component.css'
})
export class WalletListComponent implements OnInit {
  wallets: any[] = []; // Variable to store wallets

  constructor(private baseGetService: BaseGetService<any>, private dialog: MatDialog) {}

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


  OnAddWallet(): void {
    const dialogRef = this.dialog.open(CreateWalletComponent, {
      hasBackdrop: true
    });



    dialogRef.afterClosed().subscribe(result => {
      if (result) {


        this.baseGetService.createWallet(
          new Wallet(
            this.generateUniqueId(),
            result.walletName,
            1,
            result.initialBalance,
            result.initialBalance
          )
        ).subscribe({
          next: (wallet) => {
            this.wallets.push(wallet); // Add the new wallet to the array
          },
          error: (err) => {
            console.error('Error creating wallet:', err);
          }
        });
      }
    });
  }

  private generateUniqueId() {
    return Math.floor(Math.random() * 10000) + 1;
  }
}
