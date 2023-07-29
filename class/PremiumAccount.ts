import { DioAccount } from "./DioAccount";

export class PremiumAccount extends DioAccount {
  
  constructor(name: string, accountNumber: number, status: boolean = true) {
    super(name, accountNumber, status);
  }

  public deposit(value: number): void {
    super.deposit((value + 10));
  }
}