"use strict";
// interfaces are helpful because they (1) setup contracts between classes, (2) used when different objs work together, (3) promotes loose coupling--good for dissimilar objs
// inheritance/abstract classes (1) setup contracts between classes, (2) used when trying to build up a definition of an obj, (3) strongly couples classes--good for similar classes
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter = /** @class */ (function () {
    function Sorter() {
    }
    Sorter.prototype.sort = function () {
        var length = this.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
