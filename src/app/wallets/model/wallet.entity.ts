export class Wallet {
  id: number;
  user_id: number;
  name: string;
  balance: number;
  total_balance: number;

  constructor() {
    this.id = 0;
    this.name = '';
    this.user_id = 0;
    this.balance = 0;
    this.total_balance = 0;
  }
}
