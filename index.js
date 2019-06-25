/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(string){
  const hour = parseInt(string);
  if ( hour < 12) return "Good Morning"
  if ( hour > 17) return "Good Evening"
  return "Good Afternoon"
}
/* Write your implementation of displayMessage() */
 function displayMessage(string){
   document.getElementById("greeting").innerText = string;
 }
