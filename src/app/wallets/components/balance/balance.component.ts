import {Component, Input, OnInit} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {BaseGetService} from "../../../shared/services/base.service";
import {NgClass} from "@angular/common";

const currentUser = 1;

@Component({
  selector: 'app-balance',
  standalone: true,
  imports: [NgClass, MatCard, MatCardContent, MatCardHeader, MatCardTitle],
  templateUrl: './balance.component.html',
  styleUrl: './balance.component.css'
})
export class BalanceComponent implements OnInit {
  @Input() walletId?: number;
  wallets: any[] = [];
  totalBalance = 0;
  totalPeriodChange = 0;
  totalExpenses = 0;
  totalIncome = 0;

  constructor(private baseService: BaseGetService<any[]>){}

  ngOnInit(): void {
    if (this.walletId) {
      this.loadSingleWallet(this.walletId);
    } else {
      this.loadWallets();
    }
  }

  loadWallets(): void {
    this.baseService.getUserWallets(currentUser).subscribe(
      (walletList) => {
        this.wallets = walletList;
        this.calculateBalances();
      },
      (e) => {
        console.error('Error fetching wallets:', e);
      }
    )
  }

  loadSingleWallet(walletId: number): void {
    this.baseService.getWalletById(walletId).subscribe(
      (wallet) => {
        this.wallets = [wallet];
        this.calculateBalances();
      },
      (e) => {
        console.error('Error fetching wallets:', e);
      }
    )
  }

  calculateBalances(): void {
    let totalBalance = 0;
    let totalExpenses = 0;
    let totalIncome = 0;

    this.wallets.forEach(wallet => {
      // Total balance
      totalBalance += wallet.balance;

      // Total Income
      this.baseService.getWalletEarnings(wallet.id).subscribe(
        (earningsList) => {
          const earningsSum = earningsList
            //.filter(earning => this.applyFilters(earning)) // Apply filters
            .reduce((sum, earning) => sum + earning.amount, 0);
          console.log(earningsSum)
          totalIncome += earningsSum;
          this.updateTotalPeriodChange();
        },
        (e) => {
          console.error(`Error fetching earnings for wallet ${wallet.id}:`, e);
        }
      );

      // Total Expense
      this.baseService.getWalletExpenses(wallet.id).subscribe(
        (expensesList) => {
          const expensesSum = expensesList
            //.filter(expense => this.applyFilters(expense)) // Apply filters
            .reduce((sum, expense) => sum + expense.amount, 0);
          totalExpenses += expensesSum;
          this.updateTotalPeriodChange();
        },
        (e) => {
          console.error(`Error fetching expenses for wallet ${wallet.id}:`, e);
        }
      );
    });

    this.totalBalance = totalBalance;
    this.totalExpenses = -totalExpenses;
    this.totalIncome = totalIncome;
  }

  updateTotalPeriodChange(): void {
    this.totalPeriodChange = this.totalIncome + this.totalExpenses;
  }
}
