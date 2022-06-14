import {Account} from './Account';

export class LoanAccount extends Account{
    constructor(theFirstName: string, theLastName:string ,theAccountNumber: number, theBalance: number,  private _loanAmount: number, private _loaninterest_Rate: number )
    {
        super(theFirstName, theLastName,theAccountNumber, theBalance);
    }

    public get loanAmount(): number{
        return this._loanAmount;
    }

    public set loanAmount(num: number){
        this._loanAmount = num;
    }

    public get loaninterest_rate(): number{
        return this._loaninterest_Rate;
    }

    public set loaninterest_rate(num: number){
        this._loaninterest_Rate = num;
    }
    deposit(amount: number){
       super.withdraw(amount);
   }
   
   withdraw(amount:number){
        super.withdraw(amount);
    }
    displayCustomer(): string{
        return 'Loan ' +super.displayCustomer() + `, Loan Amount = ${this._loanAmount}`;
    }
    addCustomer(): string{
        return 'Loan' +super.addCustomer() + `, Loan Interest Rate = ${this._loaninterest_Rate}`
    }
}