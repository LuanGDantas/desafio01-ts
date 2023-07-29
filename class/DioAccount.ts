export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private status: boolean
  private balance: number = 0

  constructor(name: string, accountNumber: number, status: boolean = true){
    this.name = name;
    this.accountNumber = accountNumber;
    this.status = status;
  }

  public getName(): string {
    return this.name;
  }

  public deposit(value: number): void {
    this.validateStatus();    
    this.balance += value;
  }

  public withdraw = (value:number): void => {
    this.checkBalance(value);
    this.validateStatus();
    this.balance -= value;
  }

  public getBalance = (): number => {
    return this.balance;
  }

  protected validateStatus(): void {
    if (!this.status) {
      throw new Error('Conta inválida')
    }
  }

  protected checkBalance(value: number): void {
    if(value > this.balance) {
      throw new Error('Saldo Isuficiente')
    }
  }
}
