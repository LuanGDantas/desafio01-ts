import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { PremiumAccount } from './class/PremiumAccount';

console.log("\nPeopleAccount");
const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10);
console.log(
  `${peopleAccount.getName()}, seu saldo é: R$${peopleAccount.getBalance()}.`
);
let depositAmount = 115.00
console.log(`Realizando deposito de R$${depositAmount}.`);
peopleAccount.deposit(depositAmount);
console.log(
  `Deposito realizado com sucesso. Saldo final: R$${peopleAccount.getBalance()}.`
);
let withdrawValue = 82.00;
console.log(`Realizando saque de R$${withdrawValue}.`);
peopleAccount.withdraw(withdrawValue);
console.log(
  `Saque realizado com sucesso. Saldo final: R$${peopleAccount.getBalance()}.`
);

console.log("\nCompanyAccount");
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20);
console.log(
  `${companyAccount.getName()}, seu saldo é: R$${companyAccount.getBalance()}.`
);
let loanAmount = 25000.00;
console.log(`Realizando empréstimo de R$${loanAmount}.`);
companyAccount.getLoan(loanAmount);
console.log(
  `Empréstimo realizado com sucesso. Saldo final: R$${companyAccount.getBalance()}.`
);
depositAmount = 2000.00;
console.log(`Realizando deposito de R$${depositAmount}.`);
companyAccount.deposit(depositAmount);
console.log(
  `Deposito realizado com sucesso. Saldo final: R$${companyAccount.getBalance()}.`
);
withdrawValue = 15500.00;
console.log(`Realizando saque de R$${withdrawValue}.`);
companyAccount.withdraw(withdrawValue);
console.log(
  `Saque realizado com sucesso. Saldo final: R$${companyAccount.getBalance()}.`
);

console.log("\nPremiumAccount");
const premiumAccount: PremiumAccount = new PremiumAccount('Luan G Dantas', 25);
console.log(
  `${premiumAccount.getName()}, seu saldo é: R$${premiumAccount.getBalance()}.`
);
depositAmount = 200.00;
console.log(`Realizando deposito de R$${depositAmount}.`);
premiumAccount.deposit(depositAmount);
console.log(
  `Deposito realizado com sucesso. Saldo final: R$${premiumAccount.getBalance()}.`
);
withdrawValue = 70.00;
console.log(`Realizando saque de R$${withdrawValue}.`);
premiumAccount.withdraw(withdrawValue);
console.log(
  `Saque realizado com sucesso. Saldo final: R$${premiumAccount.getBalance()}.`
);

