function checkMyTriangle() {
    var firstSide = parseInt(document.getElementById("FSide").value);
    var secondSide = parseInt(document.getElementById("SSide").value);
    var thirdSide = parseInt(document.getElementById("TSide").value);

    var sidesArray = [firstSide,secondSide,thirdSide];
    sidesArray;
    

    if (sidesArray[0]+sidesArray[1]>sidesArray[2] && sidesArray[0]+sidesArray[2]>sidesArray[1]&& sidesArray[1]+sidesArray[2]>sidesArray[0] && sidesArray[1]!=sidesArray[2] && sidesArray[0]!=sidesArray[1] && sidesArray[0]!=sidesArray[2]){
        alert("Those inputs make a Scalene triangle!")
    
    }else if ((sidesArray[0] === sidesArray[1]) && (sidesArray[1]=== sidesArray[2])){
        alert("Those inputs make equilateral triangle");
    }else if ((sidesArray[0]===sidesArray[1]) ||(sidesArray[0]===sidesArray[2]) || (sidesArray[1]===sidesArray[2])) {
        alert("Those inputs make Isoscele triangle");
    }else if (sidesArray[0]+sidesArray[1] < sidesArray[2] || sidesArray[0]+sidesArray[2] < sidesArray[1] || sidesArray[1]+sidesArray[2] < sidesArray[0]){
        alert("Not a triangle");
     }
    else {
       alert("Invalid inputs to make a triangle");
     }
     
     }