import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./wallets/pages/dashboard/dashboard.component";
import {WalletViewComponent} from "./wallets/pages/wallet-view/wallet-view.component";
import {SavingViewComponent} from "./savings/pages/saving-view/saving-view.component";
import {NgModule} from "@angular/core";

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'wallet/:id', component: WalletViewComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

  { path: 'savings/:id', component: SavingViewComponent },
  { path: '**',  redirectTo: 'savings/32' , pathMatch: 'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
