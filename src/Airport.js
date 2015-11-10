function Airport(capacity) {
  this.stormy = false
  this.planes = [];
  if (capacity === undefined) {this.capacity = 20;
  }
}

Airport.prototype.instructToLand = function(plane) {
  if (this.planes.length === this.capacity) {throw new Error("airport is full");}
    this.planes.push(plane);
};

Airport.prototype.instructToTakeOff = function(plane) {
  if (this.stormy === true) {throw new Error("cannot take off in stormy weather")}
  return plane
};
