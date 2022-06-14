
export class Account{

    constructor(private _firstName:string, private _lastName:string, private _accountNumber: number,
        private _balance: number){

    }
    public get firstName(): string {
        return this._firstName;
    }

    public set firstName(value: string){
        this._firstName = value
        
    }
    public get lastName(): string {
        return this._lastName;
    }

    public set lastName(value: string){
        this._lastName = value;
        
    }
    public get accountNumber(): number {
        return this._accountNumber;
    }

    public set accountNumber(num: number){
        this._accountNumber = num;
        
    }
    
    public get balance():number {
        return this._balance;
    }

    public set balance(num: number){
        this._balance = num;
    }
    
   deposit(addition: number)
    {
        this._balance = this._balance + addition;
    }

    withdraw(deduction: number)
    {
        this._balance = this._balance -deduction;
    }

    displayCustomer(): string{
        return `Account Number = ${this._accountNumber}, Balance = ${this._balance} `;

    }
    addCustomer(): string{
        return `Account Numver = ${this._accountNumber}, Balance = ${this._balance}`;
    }
}