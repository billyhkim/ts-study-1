// classes = blueprint to create an obj with fields (values) and methods (fxns) to represent a 'thing'
class Vehicle {
  constructor(public color: string) {}
  
  public drive(): void {
    console.log('driving');
  }

  protected honk(): void {
    console.log('beep beep!');
  }
}

const sedan = new Vehicle('silver');
sedan.drive();
console.log(sedan.color);

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  
  private move(): void { // note: private methods aren't for security measures, just letting others know to be wary of using it
    console.log('car is driving');
  }

  ignitionAndDrive(): void {
    this.move();
    this.honk();
  }
}

const car = new Car(4, 'white');
car.ignitionAndDrive();
