'use strict';

function Airport(capacity) {
  this.stormy = false
  this._hangar = [];
  if (capacity === undefined) {this.capacity = 20;
  }
}

Airport.prototype.planes = function() {
  return this._hangar;
};

Airport.prototype.instructToLand = function(plane) {
  if (this.isStormy()) {throw new Error('cannot take-off in stormy weather');}
  if (this._hangar.length === this.capacity) {throw new Error("airport is full");}
    this._hangar.push(plane);
};

Airport.prototype.instructToTakeOff = function(plane) {
  if (this.isStormy()) {throw new Error('cannot take-off in stormy weather');}
    this._hangar = [];
};

Airport.prototype.isStormy = function() {
  return false;
};
