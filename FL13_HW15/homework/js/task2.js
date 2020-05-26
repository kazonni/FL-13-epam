const Vehicle = function(color, engine){
  this.color = color;
  this.engine = engine;
  this.maxSpeed = 70;
}
Vehicle.prototype.upgradeEngine = function (newEngine, maxSpeed){
  this.maxSpeed = maxSpeed;
  this.engine = newEngine;
}
Vehicle.prototype.getInfo = function (){
  let props = {};
  for(let attr in this){
    if(this.hasOwnProperty(attr)){
      props[attr] = this[attr];
    }
  }
  return props;
}

const Car = function(model, color, engine){
  this.model = model;
  Vehicle.call(this, color, engine);
  this.maxSpeed = 80;
}
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

const Motorcycle = function(model, color, engine){
  this.model = model;
  Vehicle.call(this, color, engine);
  this.maxSpeed = 90;
}
Motorcycle.prototype = Object.create(Vehicle.prototype);
Motorcycle.prototype.constructor = Motorcycle;

