export class Transaction {
  id: number;
  transaction_type_id: number;
  wallet_id: number;
  amount: number;
  date: Date;
  note: string;
  category_id: number;

  constructor(
    id = 0,
    transaction_type_id = 0,
    wallet_id = 0,
    amount = 0,
    date = new Date(),
    note = '',
    category_id = 0
  ) {
    this.id = id;
    this.transaction_type_id = transaction_type_id;
    this.wallet_id = wallet_id;
    this.amount = amount;
    this.date = new Date(date);
    this.note = note;
    this.category_id = category_id;
  }
}

