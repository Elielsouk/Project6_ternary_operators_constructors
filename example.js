function count_Function() {
  document.getElementById("Counting").innerHTML = Count();//this is a function about nested function.
  function Count() {
      var Starting_point= 15;
      function Plus_one() {Starting_point += 17;}
      Plus_one();
      return Starting_point;
  }
}
//this is a example of a person must be 18+ to ride a car.
function Ride_Function() {
  var Height, Can_ride;
  Height = document.getElementById("Height").value;
  Can_ride = (Height<18) ? "You are too young to drive":"You are old enough";
  document.getElementById("Ride").innerHTML = Can_ride + ".";
}