// Write your code in this file!
function scuberGreetingForFeet(ride) {
  if (ride > 2500){
    return "No can do."
  }
  if (ride <= 400){
    return "This one is on me!";
  }if(ride > 2000 ){
    return "I will gladly take your thirty bucks."
  }
}

function ternaryCheckCity(city){
  if (city == "NYC") {
    return "Ok, sounds good.";
  }
  else if (city != "NYC")  {
    return "No, go.";
  }
}