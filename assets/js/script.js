// Selects element by class
//We store the interval in a variable. This is an important step, so that we can get the interval to stop. 
var timer = document.querySelector(".time");
var mainEl = document.getElementById("main");
var startButtn = document.querySelector(".start");
var pargElmt = document.querySelector("p");


var secondsLeft = 76;

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

/* add event listener for start button; when user clicks, timer starts
and series of questions pop-up to be answered */
startButtn.addEventListener("click", function() {
    setTime();
    // var h1Elmt = document.queryselector("h1");
    mainEl.textContent = " ";
    // h1Elmt.textContent = " ";
    // startButtn.textContent =" ";

})

var score = 0;

var quizzes = [ 
    {
        question: "Commonly used data types DO not include: \n (a) strings \n (b) booleans \n (c) alerts \n (d) numbers",
        answer: "c"
    },
    {
        question: "The condition in an if/else statement is enclosed with _____. \n (a) quotes \n (b)curly brackets \n (c) parenthesis \n (d) square brackets",
        answer: "b"
    },
    {
        question: "Arrays in JavaScript can be used to store ______. \n (a) numbers and strings \n (b) other arrays \n (c)booleans \n (d) all of the above",
        answer: "d"
    },
    {
        question: "String values must be enclosed within _______ when being assigned to variables. \n (a) commas, (b) curly brackets (c) quotes (d) parenthesis",
        answer: "c"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is: \n (a) JavaScript (b) terminal/bash (c) for loops (d)console.log ",
        answer: "d"
    }]

for (q=0; q < quizzes.length; q++) {
    var userAns = window.prompt(quizzes[q].answer);
    
    if (userAns == quizzes[i].answer) {
        score++;
        alert("Correct ✅");
    } else {
        score
        alert("Wrong ❌");
    }
}