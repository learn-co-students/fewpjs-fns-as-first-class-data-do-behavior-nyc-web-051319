/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(str) {
  let time = str.split(':')
  let hour = parseInt(time[0])
  if (hour < 12) {
    return "Good Morning"
  } else if (hour >= 12 && hour <= 16) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}

function displayMessage(str) {
  const greeting = document.getElementById('greeting')
  greeting.innerText = str
}
