import { Component } from '@angular/core';
import {FilterComponent} from "../filter/filter.component";
import {BalanceComponent} from "../balance/balance.component";

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [FilterComponent, BalanceComponent],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent {
}
