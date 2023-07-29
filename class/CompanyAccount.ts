import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number, status: boolean = true){
    super(name, accountNumber, status);
  }

  public getLoan(value: number): void {
    this.deposit(value);
  }
}
