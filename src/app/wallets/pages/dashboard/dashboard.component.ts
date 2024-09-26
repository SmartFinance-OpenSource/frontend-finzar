import { Component } from '@angular/core';
import {HeaderContentComponent} from "../../../public/components/header-content/header-content.component";
import {WalletItemComponent} from "../../components/wallet-item/wallet-item.component";
import {WalletListComponent} from "../../components/wallet-list/wallet-list.component";
import {OverviewComponent} from "../../components/overview/overview.component";
import {CreateWalletComponent} from "../../components/create-wallet/create-wallet.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    HeaderContentComponent,
    WalletItemComponent,
    WalletListComponent,
    OverviewComponent,
    CreateWalletComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
