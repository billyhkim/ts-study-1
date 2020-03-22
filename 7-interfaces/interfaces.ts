// interface = new type describing property names and value types of obj
interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

const oldCivic = {
  name: 'Civic',
  year: 2000,
  broken: true,
};

const printVehicle = (vehicle: { name: string; year: number; broken: boolean; }): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
};

printVehicle(oldCivic);
