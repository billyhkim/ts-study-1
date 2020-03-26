import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const numSorter = new Sorter(numbersCollection);
numSorter.sort();
console.log(numbersCollection.data);

const characterCollection = new CharactersCollection('HelloWorld');
const charSorter = new Sorter(characterCollection);
charSorter.sort();
console.log(characterCollection.data);
