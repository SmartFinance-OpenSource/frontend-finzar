import { Routes } from '@angular/router';
import {DashboardComponent} from "./wallets/pages/dashboard/dashboard.component";
import {WalletViewComponent} from "./wallets/pages/wallet-view/wallet-view.component";

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'wallet/:id', component: WalletViewComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**',  redirectTo: 'dashboard' , pathMatch: 'full'}
];
