let oranges: number = 7;
let watermelons = 5; // note: type inference will implicitly infer the type, additionally type inference only works when declaration + initialization happens on same line
let direction: string = 'west';
let completed: boolean = true;

// note same type and value
let falsey: null = null;
let nothing: undefined = undefined;

// built in obj
let now: Date = new Date();

// array
let colors: string[] = ['blue', 'red', 'cyan'];
let nums: number[] = [1,2,3,4,5,6];
let booleans: boolean[] = [true, false, false, true];

// classes
class Car {}
let car: Car = new Car(); // variable car will only ever be an instance of class Car

// obj literal
let point: { x: number; y: number; z: string; } = {
  x: 10,
  y: 30,
  z: 'hello',
};

// function - what args and what returns
// everything after colon describes I/O
const printNum: (i: number) => void = (i: number) => {
  console.log(i);
};

// when to use annotations
// 1) function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number} = JSON.parse(json);
console.log(coordinates);
