// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
  if (someValue > 42) {
    return someValue - 42;
  } else {
    return 42 - someValue;
  }
}

function distanceFromHqInFeet(someValue) {
  let blocks = distanceFromHqInBlocks(someValue);
  return blocks * 264;
}

function distanceTravelledInFeet(start, destination) {
  if (start > destination) {
    return (start - destination) * 264;
  } else {
    return (destination - start) * 264;
  }
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);

  // low to high logic
  if (distance <= 400) {
    return 0;
  } else if (distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance <= 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }

  // high to low logic
  //   if (distance > 2500) {
  //     return "cannot travel that far";
  //   } else if (distance > 2000) {
  //     return 25;
  //   } else if (distance > 400) {
  //     return (distance - 400) * 0.02;
  //   } else {
  //     return 0;
  //   }
}
