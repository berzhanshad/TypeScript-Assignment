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
exports.SavingsAccount = void 0;
var Account_1 = require("./Account");
var SavingsAccount = /** @class */ (function (_super) {
    __extends(SavingsAccount, _super);
    function SavingsAccount(theFirstName, theLastName, theAccountNumber, theBalance, _interest) {
        var _this = _super.call(this, theFirstName, theLastName, theAccountNumber, theBalance) || this;
        _this._interest = _interest;
        return _this;
    }
    Object.defineProperty(SavingsAccount.prototype, "interest", {
        get: function () {
            return this._interest;
        },
        set: function (interestAmount) {
            this._interest = interestAmount;
        },
        enumerable: false,
        configurable: true
    });
    SavingsAccount.prototype.deposit = function (amount) {
        _super.prototype.deposit.call(this, amount);
    };
    SavingsAccount.prototype.displayCustomer = function () {
        return 'Savings ' + _super.prototype.displayCustomer.call(this) + ", Interest = ".concat(this._interest);
    };
    SavingsAccount.prototype.addCustomer = function () {
        return 'savings' + _super.prototype.addCustomer.call(this) + ",Intrest = ".concat(this._interest);
    };
    return SavingsAccount;
}(Account_1.Account));
exports.SavingsAccount = SavingsAccount;
