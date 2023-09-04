

var defaultpass = "Thisisthepassword";

const passwordChecker = (pass) => {


  if (pass == defaultpass)
    console.log("Password Matched. Password validation Successful.");
  else {
    console.log("Password didn't match. Password validation unsuccessful");
  }
};


passwordChecker("Thisisthepassword");  //Test Case 
