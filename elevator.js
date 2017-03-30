
Class Elevator {
  const maxTrips = 100;
  var currentFloor;
  var building;
  var occupied;
  var destination;
  var doorsOpen;
  var trips;
  var maintenanceMode;

  constructor (building) {
    currentFloor = 0;
    this.building = building;
    destination = [];
    doorsOpen = false;
    occupied = false;
    trips = 0;
    maintenanceMode = false;
  };

  var checkDistanceToFloor = function (floor) {
    return Math.abs(currentFloor - floor);
  }

  var report = function () {
    building.updateElevator(this);
  }

  var moveUp = function () {
    if (doorsOpen) closeDoors(); // Make sure the doors are closed before changing floors
    if (currentFloor >= building.maxFloor) return; // Make sure there is a floor to move up to
    currentFloor++;
    if (currentFloor === destination[0]) {
      completeTrip();
    }
    report();
  }

  var moveDown = function () {
    if (doorsOpen) closeDoors(); // Make sure the doors are closed before changing floors
    if (currentFloor <= building.minFloor) return; // Make sure there is a floor to move down to
    currentFloor--;
    if (currentFloor === destination[0]) {
      completeTrip();
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

  var completeTrip = function () {
    trips++; // I define a trip as the elevator reaching a destination
    if (trips == maxTrips) {
      maintenanceMode = true;
    }
    destination.remove(0); // Not valid js, but I'm pressed for time.  Remove the first element from the desination array
    if (destination.length === 0) { // if there are no more destinations, it is inferred that all occupants have exited the elevator
      occupied = false;
    }
    OpenDoors();
  };

  var addDestination = function (floor) {
    if (maintenanceMode) return false; // in this case, the elevator is unavailable until it has been maintained
    if (trips + destination.length < maxTrips) { // make sure the elevator has enough trips remaining to be able to add another destination
      destination.push(floor);
      if (movingUp()) {
        destination.sort("ascending"); // Not going to worry about implementing the sorting/inserting of the new floor; just know that the destination array should wind up sorted
      } else {
        destination.sort("descending"); // Not going to worry about implementing the sorting/inserting of the new floor; just know that the destination array should wind up sorted
      }
      return true;
    } else {
      return false;
    }
  };

  var movingUp = function () {
    return currentFloor < destination[0];
  };

  var movingDown = function () {
    return currentFloor > destination[0];
  };

  var pushFloorButton = function (floor) { // This is how an occupant will add a destination from inside the elevator
    if(addDestination(floor)) {
      occupied = true;
    };
  };

  var available = function () {
    if (maintenanceMode) return false;
  };

  var performMaintenance = function () {
    trips = 0;
    maintenanceMode = false;
  };
};
