

var tempinCelcius = 45 ;


var tempinFahrenheit ;

const tempConverter = (tempinCelcius)=>{
  
  tempinFahrenheit = tempinCelcius * (9/5) + 32 ;

 return tempinFahrenheit ;
}

tempConverter(tempinCelcius);


console.log("temperature in Fahrenheit is " + tempinFahrenheit);