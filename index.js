/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
  debugger;
}
/* End Given Code, don't edit above here...*/
//greet is passed value in input
// let time = new Date();
// let HH = time.getHours();
// let MM = time.getMinutes();
// let now = `${HH}:${MM}`
function greet(string){
  if(parseInt(string) < 12){
    return "Good Morning"
  }
  if(parseInt(string) >= 12 && parseInt(string) < 17){
    return "Good Afternoon"
  }
  if(parseInt(string) >= 17){
    return "Good Evening"
  }
}

function displayMessage(string){
  let greeting = document.querySelector('#greeting')
  greeting.innerText = `${string}`
}

//When the function runs it should update the text inside the #greeting node with the content of the first argument.



/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
