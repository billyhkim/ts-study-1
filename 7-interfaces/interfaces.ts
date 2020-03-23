// interface = new type describing property names and value types of obj
interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'Civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);

const drink = {
  color: 'Clear',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar.`
  }
};

printSummary(drink);

// 1. create functions that accept args typed with interfaces
// 2. objs/classes can implement a given interface to work with function
