


var rentalValue = 0 ;

const rentalCalculator =(days,car)=>{

    

  switch (car) {
    case "Economy":
        rentalValue = 4000 * days ;
               
        break;
  
    case "Midsize":
        rentalValue = 10000 * days ;
        break;
  
    case "Luxury":
        rentalValue = 20000 * days ;
        break;
  
    default:
        console.log("invalid car type");
        break;
  }
  
  console.log("Rental value is " + rentalValue);

}


rentalCalculator(4 , "Luxury");  // test case