class Vehicle {
  constructor(id, numberOfWheels, sound) {
    this.id = id;
    this.numberOfWheels = numberOfWheels;
    this.sound = sound;
  }

  printInfo() {
    console.log(`This vehicle has ${this.numberOfWheels} wheels`);
    console.log(`This vehicle has an id of ${this.id}`);
  }
}
module.exports = Vehicle;

class Car extends Vehicle {
  constructor(color, passengers, id, numberOfWheels, sound) {
    super(id, numberOfWheels, sound);
    this.passengers = passengers;
    this.color = color;
  }

  checkPassengers() {
    if (this.passengers > 4) {
      console.log("too many passengers");
    }
  }
  useHorn() {
    console.log(this.sound);
  }
}

const myCar = new Car("red", 5, "abc", 4, "sup");
myCar.useHorn();
myCar.checkPassengers();