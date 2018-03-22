
function produceDrivingRange(blockRange) {
  return function calculateRange(street1, street2) {

    let distance =  parseInt(street2.slice(0, 2)) - parseInt(street1.slice(0, 2))

    if (distance > blockRange) {
      let difference = distance - blockRange
      return `${difference} blocks out of range`
    } else {
      return `within range by ${distance}`
    }

  }
}

function produceTipCalculator(porcentage) {
  return function calculateTip(total) {
    return total * porcentage;
  }
}

function createDriver () {
  let DriverId = 0

  return class {
    constructor(name) {
      this.name = name
      this.id = ++DriverId
    }
  }
}
