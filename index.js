/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(time) {
  let hour = parseInt(time.split(':')[0])
  switch (hour) {
    case hour < 12:
      return "Good Morning";
      break;
    case hour >= 12 && hour <= 17:
      return "Good Afternoon";
      break;
    default:
      return "Good Evening";
      break;
  }
}

function displayMessage(string) {
  greeting = document.getElementsById("greeting");
  greeting.innerHTML = string;
}