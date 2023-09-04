var cart = [
  { item: "apple", units: 5, price: 20 },
  { item: "juice", units: 6, price: 60 },
  { item: "book", units: 3, price: 200 },
];

var totalPrice = 0;

cart.map((el) => {
  totalPrice += el.units * el.price;
});

console.log("Total Price is " + totalPrice);
