"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection = /** @class */ (function () {
    function NumbersCollection(data) {
        this.data = data;
    }
    NumbersCollection.prototype.compare = function (left, right) {
        return this.data[left] > this.data[right];
    };
    NumbersCollection.prototype.swap = function (left, right) {
        var leftVal = this.data[left];
        this.data[left] = this.data[right];
        this.data[right] = leftVal;
    };
    Object.defineProperty(NumbersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    return NumbersCollection;
}());
exports.NumbersCollection = NumbersCollection;
