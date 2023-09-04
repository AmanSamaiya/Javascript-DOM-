dishes = {
  burger: 200,
  pizza: 400,
  colddrinks: 500,
};

let persons = 5;

var dishesTotal;
var splitAmount;

const billSpilt = (dishes, persons) => {
  const dishesValues = Object.values(dishes);
  dishesTotal = dishesValues.reduce((prev, curr) => prev + curr, 0);
  splitAmount = dishesTotal / persons;
  return splitAmount;
};

billSpilt(dishes, persons);

console.log("Total bill is " + dishesTotal);
console.log("splitted amount is " + splitAmount);
