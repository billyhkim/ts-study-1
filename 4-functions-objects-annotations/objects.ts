const profile = {
  name: 'Bob',
  age: 25,
  coordinates: {
    lat: 30,
    long: 45
  },
  setAge(age: number): void {
    this.age = age;
  }
}

// annotation with destructuring
const { age }: { age: number } = profile;

const { coordinates: { lat, long }}:
  { coordinates: { lat: number; long: number } } = profile;
