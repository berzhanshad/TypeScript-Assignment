"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Account_1 = require("./Account");
var SavingsAccount_1 = require("./SavingsAccount");
var LoanAccount_1 = require("./LoanAccount");
var TravelAccount_1 = require("./TravelAccount");
var myAccount = new Account_1.Account("Berzhan", "Shababi Shad", 8221, 5000.00);
var mySavingsAccount = new SavingsAccount_1.SavingsAccount("Berzhan", "Shababi Shad", 3255, 4865.00, 1.90);
var myLoanAccount = new LoanAccount_1.LoanAccount("Berzhan", "Shababi Shad", 325566, 6300.00, 800.00, 5.88);
var myTravelAccount = new TravelAccount_1.TravelAccount("Berzhan", "Shababi Shad", 89568754, 118900.00, "Tokyo", "Air Japan");
var theAccounts = [];
theAccounts.push(myAccount);
theAccounts.push(mySavingsAccount);
theAccounts.push(myLoanAccount);
theAccounts.push(myTravelAccount);
for (var _i = 0, theAccounts_1 = theAccounts; _i < theAccounts_1.length; _i++) {
    var tempAccount = theAccounts_1[_i];
    console.log(tempAccount.displayCustomer());
    console.log(tempAccount.addCustomer());
}
