import {Component, Input} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {Wallet} from "../../model/wallet.entity";

@Component({
  selector: 'app-wallet-item',
  standalone: true,
  imports: [
    MatCardModule,MatButtonModule,MatIconModule
  ],
  templateUrl: './wallet-item.component.html',
  styleUrl: './wallet-item.component.css'
})
export class WalletItemComponent {
  @Input() wallet!: Wallet;
}
