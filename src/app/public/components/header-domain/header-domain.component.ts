import {Component, Input} from '@angular/core';
import {MatFabButton} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import { MatTabsModule} from "@angular/material/tabs";
import {RouterLink} from "@angular/router";
import {Wallet} from "../../../wallets/model/wallet.entity";


@Component({
  selector: 'app-header-domain',
  standalone: true,
  imports: [
    MatFabButton,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule,
    RouterLink
  ],
  templateUrl: './header-domain.component.html',
  styleUrl: './header-domain.component.css'
})
export class HeaderDomainComponent {
  @Input() wallet!: Wallet;
}
