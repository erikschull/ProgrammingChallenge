
Class Elevator {
  var currentFloor;
  var building;
  var occupied;
  var destination;
  var doorsOpen;

  constructor (building) {
    currentFloor = 0;
    this.building = building;
    destination = null;
    doorsOpen = false;
    occupied = false;
  };

  var checkDistanceToFloor = function (floor) {
    return Math.abs(currentFloor - floor);
  }

  var report = function () {
    building.updateElevator(this);
  }

  var moveUp = function () {
    if (doorsOpen) return; // Make sure the doors are closed before changing floors
    if (currentFloor >= building.maxFloor) return; // Make sure this move is valid
    currentFloor++;
    report();
  }

  var moveDown = function () {
    if (doorsOpen) return; // Make sure the doors are closed before changing floors
    if (currentFloor <= building.minFloor) return; // Make sure this move is valid
    currentFloor--;
    report();
  };

  var openDoors = function () {
    doorsOpen = true;
    report();
  };

  var closeDoors = function () {
    doorsOpen = false;
    report();
  };
};
