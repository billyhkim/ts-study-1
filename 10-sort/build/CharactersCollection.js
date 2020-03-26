"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CharactersCollection = /** @class */ (function () {
    function CharactersCollection(data) {
        this.data = data;
    }
    CharactersCollection.prototype.compare = function (leftIndex, rightIndex) {
        return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
    };
    CharactersCollection.prototype.swap = function (leftIndex, rightIndex) {
        var chars = this.data.split('');
        var leftVal = chars[leftIndex];
        chars[leftIndex] = chars[rightIndex];
        chars[rightIndex] = leftVal;
        this.data = chars.join('');
    };
    Object.defineProperty(CharactersCollection.prototype, "length", {
        get: function () {
            // don't need to call as function with ()
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    return CharactersCollection;
}());
exports.CharactersCollection = CharactersCollection;
