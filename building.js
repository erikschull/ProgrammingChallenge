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

  var callElevator = function (fromFloor) {

  };

}
