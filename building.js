class Building {

  var maxFloor;
  const minFloor = 1;
  var elevators;

  constructor (max, numberOfElevators) {
    maxFloor = max;
    elevators = [];
    for (var i = 0; i < numberOfElevators; i++) {
      elevators.push(new Elevator(this));
    }
  }

  var call = function (floor) {

  };

}
