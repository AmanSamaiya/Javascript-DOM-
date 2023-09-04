


const numbers = [24, 3, 12, 6, 15];  //test case

for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] % 3 == 0 && numbers[index] % 2 !== 0) {
    console.log(numbers[index]);
  }
  else{
    console.log("no number");
  }
}
