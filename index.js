/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(string){
  let string="HH:MM";
  if (split(string) < 12:00)
   return("Good Morning");
   if (split(string) > 12:00 && split(string) < 05:00)
    return("Good Afternoon");
   if (split(string) > 12:00);
   return ("Good Evening");
}
