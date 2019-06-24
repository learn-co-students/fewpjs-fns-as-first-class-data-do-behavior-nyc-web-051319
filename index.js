/* Given Code, don't edit */

function handleClick(e) {

  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
const msgContainer = document.querySelector('#greeting')

function greet(timeString){
  const currentTime = parseInt(timeString)
  // debugger
  if (currentTime < 12){
    return 'Good Morning'
  }
  if (currentTime > 17){
    return 'Good Evening'
  }
  else
  return 'Good Afternoon'
}// end of greet func

function displayMessage(input){
  msgContainer.innerText = input

}
