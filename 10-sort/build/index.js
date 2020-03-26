"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0]);
var numSorter = new Sorter_1.Sorter(numbersCollection);
numSorter.sort();
console.log(numbersCollection.data);
var characterCollection = new CharactersCollection_1.CharactersCollection('HelloWorld');
var charSorter = new Sorter_1.Sorter(characterCollection);
charSorter.sort();
console.log(characterCollection.data);
