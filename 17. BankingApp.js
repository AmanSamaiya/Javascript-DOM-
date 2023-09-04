let user = {
    name : "Aman" ,
    balance : 500000 
} ;

var action = "withdraw" ;
var transaction = 50000 ;



const updateBalance = (user , action , transaction) =>{

 if(action == "deposit"){
    user.balance += transaction ;
 }

 else if (action == "withdraw"){
    user.balance -= transaction ;
 }

}

updateBalance(user , action , transaction);

console.log(user);