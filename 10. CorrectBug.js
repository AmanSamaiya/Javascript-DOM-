

var cart = {
  apple: 1,
  mango: 2,
  tea: 4,
};


let cartNew = Object.assign({},cart)

for (let key in cartNew) { 
 
 

  cartNew[key] = cart[key] * 2;



  
}
console.log(cartNew);