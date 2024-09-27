import {Component, Input, SimpleChanges} from '@angular/core';
import {MatTableModule} from "@angular/material/table";

@Component({
  selector: 'app-transactions-table',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './transactions-table.component.html',
  styleUrl: './transactions-table.component.css'
})
export class TransactionsTableComponent {
  @Input() transactions: any[] = [];

  displayedColumns: string[] = ['category_id','amount', 'note', 'date'  ];
  dataSource = this.transactions;

  ngOnInit(): void {
    this.dataSource = [...this.transactions]; // Initialize with a copy of transactions
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['transactions'] && changes['transactions'].currentValue) {
      console.log('Updated Transactions:', this.transactions);
      this.dataSource = [...this.transactions]; // Update dataSource with fresh data
    }
  }
}
