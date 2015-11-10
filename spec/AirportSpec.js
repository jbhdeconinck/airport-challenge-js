describe("Airport", function() {
  var airport;
  var plane, flying, land;

  beforeEach(function() {

    airport = new Airport();

    plane = {
        setFlying: function(value) {
          flying = value;
        },
        getFlying: function() {
          return flying;
        },
        setLand: function(value) {
          land = value;
        },
        getLand: function() {
          return land;
        }
    };

    weather = {
        setStormy: function(value) {
          stormy = value;
        },

        getStormy: function() {
          return stormy;
        }
    };

  });

  describe("instructToLand", function() {

    it("reports plane has landed", function() {
      airport.instructToLand(plane)
      expect(airport.planes.length).toEqual(1)
    });

  });

  describe("instructToTakeOff", function() {

    it("instructs plane to take off", function() {
      expect(airport.instructToTakeOff(plane)).toEqual(plane)
    });

    it("cannot instruct to take off when stormy", function() {
      weather.setStormy(true)
      expect(function() { airport.instructToTakeOff(plane) }).toThrowError("cannot take off in stormy weather")
    });

  });

  describe("when airport is full", function() {

    it("cannot land a plane", function() {
      for (i=0; i<20; i++) {
        airport.instructToLand(plane);}
        expect(function() { airport.instructToLand(plane) }).toThrowError("airport is full")
    });

  });



});
