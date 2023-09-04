

const vowelChecker = (strings) =>{

    var counts = 0 ;

    for(char of strings){
        if(char =="a" || char =="e" || char =="i" || char =="o" || char =="u" ){
            counts += 1 ;
        }
    }

    console.log(counts);
}


vowelChecker("dman");  //test case