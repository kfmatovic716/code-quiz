// Selects element by class
//We store the interval in a variable. This is an important step, so that we can get the interval to stop. 
var timer = document.querySelector(".time");
var mainEl = document.getElementById("main");
var startButtn = document.querySelector(".start");

var secondsLeft = 61;

function setTime() {
  // Sets interval in variable
  //The setInterval() method takes a function as its first argument
  var timerInterval = setInterval(function() {
    //The function is the action that we want to be evaluated at each interval. This function prints a message at each interval
    secondsLeft--;
    // secondsLeft = secondsLeft - 1;
    timer.textContent = secondsLeft;

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      //When the countdown reaches zero, we want the action to stop. The clearInterval() method stops the execution of the interval. It takes one parameter: the variable name assigned to the interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }
    //The second argument that the setInterval() method takes is the interval. Because intervals use milliseconds, we use 1000 to create an interval of one second
  }, 1000);
}



startButtn.addEventListener("click", function() {
    setTime();
})