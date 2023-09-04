const removeDuplicates = (cart) => {
  let uniqueItems = [];

  cart.forEach((item) => {
    if (!uniqueItems.includes(item)) {
      uniqueItems.push(item);
    }
  });

  console.log(uniqueItems);
};

removeDuplicates(["apple", "orange", "apple", "papaya", "orange", "orange"]); //test case
