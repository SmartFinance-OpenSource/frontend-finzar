import {Component, OnInit} from '@angular/core';
import {HeaderDomainComponent} from "../../../public/components/header-domain/header-domain.component";
import {ActivatedRoute} from "@angular/router";
import {Wallet} from "../../model/wallet.entity";
import {BaseGetService} from "../../../shared/services/base.service";
import {WalletListComponent} from "../../components/wallet-list/wallet-list.component";
import {FilterComponent} from "../../components/filter/filter.component";
import {TransactionsTableComponent} from "../../components/transactions-table/transactions-table.component";
import {BalanceComponent} from "../../components/balance/balance.component";
import {Transaction} from "../../../shared/model/transaction.entity";
import { MatButtonModule} from "@angular/material/button";
import {TransactionDialogComponent} from "../../components/transaction-dialog/transaction-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-wallet-view',
  standalone: true,
  imports: [
    HeaderDomainComponent,
    WalletListComponent,
    FilterComponent,
    TransactionsTableComponent,
    BalanceComponent,
    MatButtonModule,

  ],
  templateUrl: './wallet-view.component.html',
  styleUrl: './wallet-view.component.css'
})

export class WalletViewComponent implements OnInit {
  walletId!: string;
  wallet!: Wallet;
  transactions: Transaction[] = [];


  constructor(
    private route: ActivatedRoute,
    private baseGetService: BaseGetService<any>,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.walletId = params.get('id')!;
      console.log('Wallet ID:', this.walletId);
      this.wallet = new Wallet();
      this.transactions = [];
      this.fetchWallet();
      this.fetchTransactions();
    });
  }

  fetchWallet(): void {
    this.baseGetService.getWalletById(this.walletId).subscribe(
      (wallet: Wallet) => {
        this.wallet = wallet;
      },
      error => {
        console.error('Error fetching wallet:', error);
      }
    );
  }

  fetchTransactions(): void {
    this.baseGetService.getWalletTransactions(this.walletId).subscribe(
      (transactions: Transaction[]) => {
        const walletIdAsNumber = Number(this.walletId); // Convert walletId to number
        this.transactions = transactions.filter(t => t.wallet_id === walletIdAsNumber);
        console.log('Filtered Transactions:', this.transactions);
      },
      error => {
        console.error('Error fetching transactions:', error);
      }
    );
  }

  onTransactionDialog(): void {
    const dialogRef = this.dialog.open(TransactionDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // Handle the result if needed
    });
  }


}
