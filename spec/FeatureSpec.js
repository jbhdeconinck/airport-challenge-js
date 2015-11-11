'use strict';

describe('Feature Test:', function(){
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
  });

  // As an air traffic controller
  // To get passengers to a destination
  // I want to instruct a plan to land at
  // an airport and confirm that it has landed

    it('planes can be instructed to land at an airport', function(){
      plane.land(airport);
      expect(airport.planes()).toContain(plane);
    });

  // As an air traffic controller
  // To get passengers to a destination
  // I want to instruct a plan to take off from
  // an airport and confirm that it is no longer in the airport

    it('can instruct a plane to take off and leave the airport', function(){
      plane.land(airport);
      plane.takeoff(airport);
      expect(airport.planes()).not.toContain(plane);
    });

    // As an air traffic controller
    // To get passengers to a destination
    // I cannot land a plane when airport is full

    it('cannot land a plane when airport is full', function(){
      for (i=0; i<20; i++) {
        plane.land(airport);}
        expect(function() { airport.instructToLand(plane); }).toThrowError("airport is full");
    });

    // As an air traffic controller
    // To ensure safety
    // I want to prevent takeoff when weather is stormy

    it('can instruct plane not to take-off when weather stormy', function(){
      plane.land(airport);
      spyOn(airport,'isStormy').and.returnValue(true);
      expect(function() { plane.takeoff(); }).toThrowError('cannot take-off in stormy weather');
      expect(airport.planes()).toContain(plane);
    });

    // As an air traffic controller
    // To ensure safety
    // I want to prevent landing when weather is stormy

    it('can instruct plane not to land when weather stormy', function(){
      spyOn(airport,'isStormy').and.returnValue(true);
      expect(function() { plane.land(airport); }).toThrowError('cannot land in stormy weather');
      expect(airport.planes()).not.toContain(plane);
    });

});
