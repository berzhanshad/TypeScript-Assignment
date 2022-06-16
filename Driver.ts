import {Account} from './Account';
import {SavingsAccount} from './SavingsAccount';
import { LoanAccount } from './LoanAccount';
import { TravelAccount } from './TravelAccount';

let myAccount = new Account("Berzhan", "Shababi Shad",8221, 5000.00);
let mySavingsAccount = new SavingsAccount("Berzhan", "Shababi Shad",3255,4865.00,1.90);
let myLoanAccount = new LoanAccount("Berzhan", "Shababi Shad",325566, 6300.00,800.00,5.88);
let myTravelAccount = new TravelAccount("Berzhan", "Shababi Shad",89568754,118900.00, "Tokyo","Air Japan");


let theAccounts: Account[] =[];

theAccounts.push(myAccount);
theAccounts.push(mySavingsAccount);
theAccounts.push(myLoanAccount);
theAccounts.push(myTravelAccount);

for (let tempAccount of theAccounts)
{
    console.log(tempAccount.displayCustomer());
    console.log(tempAccount.addCustomer())
}