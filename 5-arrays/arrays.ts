// arrays in ts typically have 1 specific type in each, unless initialized without annotations without any values
const autoMakers: string[] = ['Tesla', 'Honda', 'Toyota'];

const dates = [new Date(), new Date()];

const carsByMake: string[][] = [
  ['Model 3'],
  ['Accord'],
  ['Camry']
];

// helps with inference when grabbing values
const car = autoMakers[0];
const myCar = autoMakers.pop();

// prevents wrong value types
// autoMakers.push(true);

// helps with higher order array functions
autoMakers.map((car: string): string => {
  return car.toUpperCase();
});

// flexible types
const importantDates: (Date | string)[] = [];
importantDates.push('01-01-2020');
importantDates.push(new Date());
