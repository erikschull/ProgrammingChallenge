
Class Elevator {
  var currentFloor;
  var building;
  var occupied;
  var destination;
  var doorsOpen;
  var trips;
  var available;

  constructor (building) {
    currentFloor = 0;
    this.building = building;
    destination = null;
    doorsOpen = false;
    occupied = false;
    trips = 0;
    available = true;
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
    if (currentFloor === destination) {
      trips++;
      OpenDoors;
    }
    report();
  }

  var moveDown = function () {
    if (doorsOpen) return; // Make sure the doors are closed before changing floors
    if (currentFloor <= building.minFloor) return; // Make sure this move is valid
    currentFloor--;
    if (currentFloor === destination) {
      trips++;
      OpenDoors;
    }
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

  var call = function (floor) {

  };

  var assignDestination = function (floor) {

  };
};
