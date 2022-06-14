import {Account} from './Account';
export class TravelAccount extends Account{
    constructor(theFirstName: string, theLastName:string ,theAccountNumber: number, theBalance: number, private _destination:string, private _airline:string ){
        super(theFirstName, theLastName,theAccountNumber, theBalance);
    }

    public get destination(): string {
        return this._destination;
    
    }

    public set destination(location: string)
    {
        this._destination = location;
    }

    public get airline(): string {
        return this._airline;
    
    }

    public set airline(name: string)
    {
        this._airline = name;
    }
    deposit(amount: number){
        super.withdraw(amount);
    }
    withdraw(amount:number){
         super.withdraw(amount);
    }
    displayCustomer(): string {
        return 'Travel ' + super.displayCustomer() + `, Destination: ${this._destination}`;
    }
    addCustomer(): string{
        return 'Travel' +super.addCustomer() + `, Airline = ${this._airline}`
    }
}