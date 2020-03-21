// : after params describes return type
// note: type inference works on the return type
const add = (x: number, y: number): number => {
  return x + y;
};

// follow-up note: use return annotation to make sure proper type is returned
const subtract = (x: number, y: number): number => {
  return x - y;
};

function divide(x: number, y: number): number {
  return x / y;
}

const multiply = function(a: number, b: number): number {
  return a * b;
}

// void = function that doesn't have a returned value, save for 'null' and 'undefined'
const logger = (message: string): void => {
  console.log(message);
};

// never = it will never reach end of function by throwing error and exiting early
const throwError = (message: string): never => {
  throw new Error(message);
};