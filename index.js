function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

  function displayMessage(message){
    document.getElementById('greeting').innerText = message
  }
    function greet(timeString){
      if (parseInt(timeString, 10) < 12){
         return "Good Morning"
      }
      else if(parseInt(timeString, 10) > 17){
         return "Good Evening"
        }
       else return "Good Afternoon"
      }

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
