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
exports.TravelAccount = void 0;
var Account_1 = require("./Account");
var TravelAccount = /** @class */ (function (_super) {
    __extends(TravelAccount, _super);
    function TravelAccount(theFirstName, theLastName, theAccountNumber, theBalance, _destination, _airline) {
        var _this = _super.call(this, theFirstName, theLastName, theAccountNumber, theBalance) || this;
        _this._destination = _destination;
        _this._airline = _airline;
        return _this;
    }
    Object.defineProperty(TravelAccount.prototype, "destination", {
        get: function () {
            return this._destination;
        },
        set: function (location) {
            this._destination = location;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TravelAccount.prototype, "airline", {
        get: function () {
            return this._airline;
        },
        set: function (name) {
            this._airline = name;
        },
        enumerable: false,
        configurable: true
    });
    TravelAccount.prototype.deposit = function (amount) {
        _super.prototype.withdraw.call(this, amount);
    };
    TravelAccount.prototype.withdraw = function (amount) {
        _super.prototype.withdraw.call(this, amount);
    };
    TravelAccount.prototype.displayCustomer = function () {
        return 'Travel ' + _super.prototype.displayCustomer.call(this) + ", Destination: ".concat(this._destination);
    };
    TravelAccount.prototype.addCustomer = function () {
        return 'Travel' + _super.prototype.addCustomer.call(this) + ", Airline = ".concat(this._airline);
    };
    return TravelAccount;
}(Account_1.Account));
exports.TravelAccount = TravelAccount;
