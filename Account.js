"use strict";
exports.__esModule = true;
exports.Account = void 0;
var Account = /** @class */ (function () {
    function Account(_firstName, _lastName, _accountNumber, _balance) {
        this._firstName = _firstName;
        this._lastName = _lastName;
        this._accountNumber = _accountNumber;
        this._balance = _balance;
    }
    Object.defineProperty(Account.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "accountNumber", {
        get: function () {
            return this._accountNumber;
        },
        set: function (num) {
            this._accountNumber = num;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "balance", {
        get: function () {
            return this._balance;
        },
        set: function (num) {
            this._balance = num;
        },
        enumerable: false,
        configurable: true
    });
    Account.prototype.deposit = function (addition) {
        this._balance = this._balance + addition;
    };
    Account.prototype.withdraw = function (deduction) {
        this._balance = this._balance - deduction;
    };
    Account.prototype.displayCustomer = function () {
        return "Account Number = ".concat(this._accountNumber, ", Balance = ").concat(this._balance, " ");
    };
    Account.prototype.addCustomer = function () {
        return "Account Numver = ".concat(this._accountNumber, ", Balance = ").concat(this._balance);
    };
    return Account;
}());
exports.Account = Account;
