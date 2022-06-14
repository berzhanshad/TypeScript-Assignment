"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.LoanAccount = void 0;
var Account_1 = require("./Account");
var LoanAccount = /** @class */ (function (_super) {
    __extends(LoanAccount, _super);
    function LoanAccount(theFirstName, theLastName, theAccountNumber, theBalance, _loanAmount, _loaninterest_Rate) {
        var _this = _super.call(this, theFirstName, theLastName, theAccountNumber, theBalance) || this;
        _this._loanAmount = _loanAmount;
        _this._loaninterest_Rate = _loaninterest_Rate;
        return _this;
    }
    Object.defineProperty(LoanAccount.prototype, "loanAmount", {
        get: function () {
            return this._loanAmount;
        },
        set: function (num) {
            this._loanAmount = num;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoanAccount.prototype, "loaninterest_rate", {
        get: function () {
            return this._loaninterest_Rate;
        },
        set: function (num) {
            this._loaninterest_Rate = num;
        },
        enumerable: false,
        configurable: true
    });
    LoanAccount.prototype.deposit = function (amount) {
        _super.prototype.withdraw.call(this, amount);
    };
    LoanAccount.prototype.withdraw = function (amount) {
        _super.prototype.withdraw.call(this, amount);
    };
    LoanAccount.prototype.displayCustomer = function () {
        return 'Loan ' + _super.prototype.displayCustomer.call(this) + ", Loan Amount = ".concat(this._loanAmount);
    };
    LoanAccount.prototype.addCustomer = function () {
        return 'Loan' + _super.prototype.addCustomer.call(this) + ", Loan Interest Rate = ".concat(this._loaninterest_Rate);
    };
    return LoanAccount;
}(Account_1.Account));
exports.LoanAccount = LoanAccount;
