describe("Airport", function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpy(plane);
  });


  it('has no planes by default', function(){
    expect(airport.planes()).toEqual([]);
  });

  it('adapts instructions if weather stormy', function() {
    expect(airport.isStormy()).toBeFalsy();
  });

  describe("instructToLand", function() {

    it('can clear planes for landing', function(){
      airport.instructToLand(plane);
      expect(airport.planes()).toEqual([plane]);
    });
  });

  describe("instructToTakeOff", function() {

    it("instructs plane to take off", function() {
      airport.instructToLand(plane);
      airport.instructToTakeOff(plane);
      expect(airport.planes()).toEqual([]);
    });

  });

  describe("when airport is full", function() {

    it("cannot land a plane", function() {
      for (i=0; i<20; i++) {
        airport.instructToLand(plane);}
        expect(function() { airport.instructToLand(plane) }).toThrowError("airport is full")
    });

  });

  describe('when weather is stormy', function() {
    it('can instruct plane not to take-off', function(){
      spyOn(airport,'isStormy').and.returnValue(true);
      expect(function() { airport.instructToTakeOff(plane); }).toThrowError('cannot take-off in stormy weather');
    });
    it('can instruct plane not to land', function(){
      spyOn(airport,'isStormy').and.returnValue(true);
      expect(function() { airport.instructToLand(plane); }).toThrowError('cannot land in stormy weather');
    });
  });
});
