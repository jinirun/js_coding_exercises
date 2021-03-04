function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich.fillings;

}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  if (person.city == "Manchester")
    return true;
  return false;
}

function getBusNumbers(people) {
  let noOfBuses;
  if (people === undefined) throw new Error("people is required");
  noOfBuses = people / 40;

  if(noOfBuses <= 1)
    return 1;
  else if (noOfBuses > 1 && noOfBuses <= 2)
    return 2;
  else if (noOfBuses > 2 && noOfBuses <= 3)
    return 3;
  else
    return Math.ceil(noOfBuses);
}

function countSheep(arr) {
  let count = 0;
  if (arr === undefined) throw new Error("arr is required");
  for(let i in arr){
    if(arr[i] == "sheep")
      count += 1;
  }
  return count;
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  if(person.address.city == "Manchester" && person.address.postCode.startsWith('M'))
    return true;
  return false;
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
