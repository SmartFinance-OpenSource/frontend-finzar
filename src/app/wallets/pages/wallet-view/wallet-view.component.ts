import {Component, OnInit} from '@angular/core';
import {HeaderDomainComponent} from "../../../public/components/header-domain/header-domain.component";
import {ActivatedRoute} from "@angular/router";
import {Wallet} from "../../model/wallet.entity";
import {BaseGetService} from "../../../shared/services/base.service";
import {WalletListComponent} from "../../components/wallet-list/wallet-list.component";
import {FilterComponent} from "../../components/filter/filter.component";
import {TransactionsTableComponent} from "../../components/transactions-table/transactions-table.component";
import {BalanceComponent} from "../../components/balance/balance.component";
import {Transaction} from "../../model/transaction.entity";

@Component({
  selector: 'app-wallet-view',
  standalone: true,
  imports: [HeaderDomainComponent, WalletListComponent, FilterComponent, TransactionsTableComponent, BalanceComponent],
  templateUrl: './wallet-view.component.html',
  styleUrl: './wallet-view.component.css'
})

export class WalletViewComponent implements OnInit {
  walletId!: string;
  wallet!: Wallet;
  transactions: Transaction[] = [];

  constructor(
    private route: ActivatedRoute,
    private baseGetService: BaseGetService<any>
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
}
