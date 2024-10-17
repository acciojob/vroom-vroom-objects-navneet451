// Complete the js code
// Constructor function for Car
function Car(make, model) {
    this.make = make;
    this.model = model;
}

// Add getMakeModel method to the Car prototype
Car.prototype.getMakeModel = function() {
    return `${this.make} ${this.model}`;
};

// Constructor function for SportsCar
function SportsCar(make, model, topSpeed) {
    // Inherit the Car constructor
    Car.call(this, make, model);
    this.topSpeed = topSpeed;
}

// Inherit Car prototype in SportsCar prototype
SportsCar.prototype = Object.create(Car.prototype);

// Add getTopSpeed method to the SportsCar prototype
SportsCar.prototype.getTopSpeed = function() {
    return this.topSpeed;
};

// Example usage:
const car = new SportsCar("Ferrari", "Testarossa", 200);
console.log(car.getMakeModel()); // Output: Ferrari Testarossa
console.log(car.getTopSpeed());  // Output: 200

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;

