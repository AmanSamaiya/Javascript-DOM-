

var marks = [ 18 , 11 , 14 , 20 , 45 ];

var largestnumber = 0 ;


 largestnumber = marks.reduce( (prev ,curr) => (prev>curr)?prev:curr , 0 )


console.log("highest marks are " + largestnumber);



