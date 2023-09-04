var originalPrice = 300 ;
var discountedPrice = 140 ;

var percent ;


const percentage = (originalPrice, discountedPrice )=>{
 percent = (originalPrice - discountedPrice)/(originalPrice)   * 100 ;
}




percentage(originalPrice,discountedPrice);

console.log("Discount percentage is " + Math.round(percent*100)/100);