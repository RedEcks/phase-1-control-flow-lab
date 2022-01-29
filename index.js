
function scuberGreetingForFeet(distance){
  // Write your code here!
  if (distance<=400){
    return "This one is on me!";
  }
  else if (distance>=2000&&distance<2500){
    return "I will gladly take your thirty bucks.";
  }
  else if (distance>2500)
  return "No can do.";
}

function ternaryCheckCity(city,message){
  // Write your code here!
  (city==='NYC')? (message= "Ok, sounds good."):(message="No go.");
  return message;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip){
    case 'generous':
      return "Thank you so much.";
    case 'not as generous':
      return "Thank you.";
    default:
      return "Bye.";
  }
}