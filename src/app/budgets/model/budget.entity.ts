export class Budget {
  id: number;
  walletId: number;
  name: string;
  total_goal: number;
  current_goal: number;
  current_amount: number;
  category_id: number;
  recurring_id: number;
  start_date: string;

  constructor(){
    this.id = 0;
    this.walletId = 0;
    this.name = '';
    this.total_goal = 0;
    this.current_goal = 0;
    this.current_amount = 0;
    this.category_id = 0;
    this.recurring_id = 0;
    this.start_date = '';
  }
}
