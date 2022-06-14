import { Account } from "./Account";

export class SavingsAccount extends Account {

    constructor (theFirstName: string, theLastName:string ,theAccountNumber: number, theBalance:number,private _interest: number){
         super(theFirstName, theLastName,theAccountNumber, theBalance);
         }
 
    public get interest(): number {
        return this._interest;
    }
         
    public set interest(interestAmount: number){
        this._interest = interestAmount;
    }

    deposit(amount: number){
        super.deposit(amount);
    }
   
    displayCustomer(): string{
        return 'Savings ' +super.displayCustomer() + `, Interest = ${this._interest}`;
    }
    addCustomer():string{
        return 'savings' + super.addCustomer() + `,Intrest = ${this._interest}`;
    }

}
