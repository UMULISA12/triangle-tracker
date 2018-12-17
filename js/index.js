function checkMyTriangle() {
    var firstSide = document.getElementById("FSide").value;
    var secondSide = document.getElementById("SSide").value;
    var thirdSide = document.getElementById("TSide").value;

    if ((firstSide === thirdSide) && (firstSide=== secondSide) && (secondSide===thirdSide)){
        alert(" equilateral triangle");
      }
     
     else if ((firstSide===secondSide) ||(firstSide===thirdSide) || (secondSide===thirdSide)) {
        alert(" Isoscelene triangle");
     
     }
     
     else if(((firstSide+secondSide) > thirdSide) && ((firstSide+thirdSide) > secondSide) && ((secondSide+thirdSide) > firstSide) && (firstSide!=secondSide) && (firstSide!=thirdSide) && (secondSide!=thirdSide)) {
       alert(" scalene triangle");
     }
     
     else if (((firstSide+secondSide) <= thirdSide) ||((firstSide+thirdSide)<=secondSide) ||((secondSide+thirdSide) <= firstSide) ) {
       alert("can not make a triangle");
     }
     else {
       alert("Invalid inputs");
     }
     }