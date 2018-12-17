function checkMyTriangle() {
    var firstSide = document.getElementById("FSide").value;
    var secondSide = document.getElementById("SSide").value;
    var thirdSide = document.getElementById("TSide").value;

    var sidesArray = [firstSide,secondSide,thirdSide];
    sidesArray;

    if ((sidesArray[0] === sidesArray[1]) && (sidesArray[1]=== sidesArray[2])){
        alert("equilateral triangle");
      }
     
     else if ((sidesArray[0]===sidesArray[1]) ||(sidesArray[0]===sidesArray[2]) || (sidesArray[1]===sidesArray[2])) {
        alert("Isoscele triangle");
     
     }

     else if (sidesArray[0]+sidesArray[1]>=sidesArray[2] && sidesArray[0]+sidesArray[2]>=sidesArray[1]&& sidesArray[1]+sidesArray[2]>=firstSide && sidesArray[1]!=sidesArray[2] && sidesArray[0]!=sidesArray[1] && sidesArray[0]!=sidesArray[2]){
         alert("Scalene");
     }
     
     else if (sidesArray[0]+sidesArray[1]<=sidesArray[2] || sidesArray[0]+sidesArray[2]<=sidesArray[1] || sidesArray[1]+sidesArray[2]<=sidesArray[0]){
         alert("Not a triangle");
     }


    else {
       alert("Invalid inputs");
     }
     }