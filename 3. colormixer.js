

const colorMixer = (color1 , color2) =>
{
    switch (color1) {

        case "red":
            if(color2=="blue"){
                console.log("purple");
            }
            else if(color2=="yellow"){
                console.log("orange");
            }
            break;


        case "blue":
            if(color2=="red"){
                console.log("purple");
            }
            else if(color2=="yellow"){
                console.log("green");
            }
            break;




        case "yellow":
            if(color2=="red"){
                console.log("orange");
            }
            else if(color2=="blue"){
                console.log("green");
            }
            break;
    


        default:
            console.log("invalid color combination");
            break;
    }

}


colorMixer("blue","yellow"); //test case