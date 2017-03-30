class Building {

  var maxFloor;
  const minFloor = 1;
  var elevators;

  constructor (numberOfFloors, numberOfElevators) {
    maxFloor = numberOfFloors;
    elevators = [];
    for (var i = 0; i < numberOfElevators; i++) {
      elevators.push(new Elevator(this));
    }
  }

  var callElevator = function (fromFloor, toFloor) { // I'm a little confused by point 6 in the instructions; the way I read it, it sounds like there's a button for all other floors on each floor, rather than just an up or down button.  Hence, direction will be inferred based on the toFloor's relationship to the fromFloor (ie > or <)
    // find best elevator
    // check for occupied elevator moving past this floor
    // find unoccupied elevator
  };

}
