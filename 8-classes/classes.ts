// classes = blueprint to create an obj with fields (values) and methods (fxns) to represent a 'thing'
class Vehicle {
  drive(): void {
    console.log('driving');
  }

  honk(): void {
    console.log('beep beep!');
  }
}

class Car extends Vehicle {
  drive(): void {
    console.log('car is driving');
  }
}

const sedan = new Vehicle();
sedan.drive();
sedan.honk();

const car = new Car();
car.drive();
car.honk();
