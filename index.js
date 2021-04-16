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
  string="HH:MM";
  let s=string.split(":");
  let h=s[0];
  let m=s[1];
  let h1=parseInt(h);
  let s1=parseInt(s);
  if(s<12)
  return "Good Morning";
  else if (s>=12 && s<=5)
  return "Good Afternoon";
  else 
  return "Good Evening";
}