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

  var callElevator = function (fromFloor, goingUp) { // goingUp is boolean
    // find best elevator (each check will call the available method on the elevator; if unavailable, that elevator will be pssed over)
    // check for unoccupied elevator stopped at this floor
      // if an elevator is found unoccupied at this floor:
        thatElevator.openDoors();
    // check for occupied elevator moving past this floor in the correct direction
      // if one is found,
        thatElevator.addDestination(fromFloor);
    // find closest unoccupied elevator
      var closest = null;
      // for each unoccupied elevator,
        if (closest == null) {
          closest = elevator;
        } else {
          if (closest.checkDistanceToFloor(fromFloor) > elevator.checkDistanceToFloor(fromFloor)) {
            closest = elevator;
          }
        }
  };

}
