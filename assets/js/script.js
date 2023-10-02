
var timer = document.querySelector(".time");
var main = document.querySelector("#main");
var startButtn = document.querySelector(".start");
var actualQuestn = document.querySelector(".question-here");
var quizBox = document.querySelector(".container-Quiz");
var ltrA = document.querySelector("#choice1");
var ltrB = document.querySelector("#choice2");
var ltrC = document.querySelector("#choice3");
var ltrD = document.querySelector("#choice4");
var confAns = document.querySelector("#conf-answr");
var selectdAns = document.querySelectorAll(".button-li");
var recordScore = document.querySelector(".record-score");
var finiScore= document.querySelector(".final-score");
var score = 0;
var totalScore

// list of JSON-formatted multiple choice questions to be used
var multChoiceQs = [ 
    {
        question: "Commonly used data types DO not include: ",
        choices: ["(a) strings", "(b) booleans", "(c) alerts", "(d) numbers"],
        answer: "c"
    },
    {
        question: "The condition in an if/else statement is enclosed with _____.",
        choices: [" (a) quotes","(b)curly brackets","(c) parenthesis","(d) square brackets"],
        answer: "b"
    },
    {
        question: "Arrays in JavaScript can be used to store ______.",
        choices: ["(a) numbers and strings","(b) other arrays","(c)booleans","(d) all of the above"],
        answer: "d"
    },
    {
        question: "String values must be enclosed within _______ when being assigned to variables.",  
        choices: ["(a) commas,","(b) curly brackets","(c) quotes","(d) parenthesis"],
        answer: "c"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is: ",
        choices: ["(a) JavaScript","(b) terminal/bash","(c) for loops","(d)console.log "],
        answer: "d"
    }];

// timer starts at 76 seconds
var secondsLeft = 76;


function setTime() {
  // Sets interval in variable decrementing time
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timer.textContent = secondsLeft;
    

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      //When the countdown reaches zero, we want the action to stop. The clearInterval() method stops the execution of the interval. It takes one parameter: the variable name assigned to the interval
      clearInterval(timerInterval);
      // Calls function to create and append image
    //   sendMessage();
    }
    //The second argument that the setInterval() method takes is the interval. Because intervals use milliseconds, we use 1000 to create an interval of one second
  }, 1000);
}

// questions are visible after start button is pressed
function showQuestn(i) {
    // for(i=0; i< multChoiceQs.length; i++)??
    actualQuestn.textContent = multChoiceQs[i].question;
    ltrA.textContent = multChoiceQs[i].choices[0];
    ltrB.textContent = multChoiceQs[i].choices[1];
    ltrC.textContent = multChoiceQs[i].choices[2];
    ltrD.textContent = multChoiceQs[i].choices[3];
    questNumber = i;
}


/* add event listener for start button; when user clicks, timer starts
and series of questions pop-up to be answered; starts with question #1 */
startButtn.addEventListener("click", function() {
    setTime();
    main.style.display = none;
    quizBox.style.display = visible;
    var questNumber = 0;
    showQuestn(questNumber);
});

/* 
-eventlistener when one of the choices is clicked 
- check if user clicked  the correct answer
if user clicked the correct answer then score = 11 and display correct (.textContent = "Correct!")
else if clicked the incorrect answer, time decreases to 10 and display incorrect (.textContent = "Wrong!") */

selectdAns.addEventListener("click", function() {
//  Loop through and answer each question
    for (q=0; q < multChoiceQs.length; q++) {
        if (multChoiceQs.choice.answer == **** ) {
            confAns.textContent = "Correct!✅";
            timer = secondsLeft;
            score += 5;
        }else {
            confAns.textContent = "Wrong!❌";
            timer= secondsLeft - 5;
        } 
    }
}; 

// displays the block when game ends and shows the total score user asked to enter initials
function gameEnds() {
    timer.style.display = "none";
    quizBox.style.display = "none";
    recordScore.style.display = "block";
    finiScore.textContent = "Your score is: "+ score;
};


// display high scores and add eventlistener to go back and clear high scores buttons





/*
functions to 
 1. display the question
 2. calculate the answer is correct and time adjustments when it user loses
 3. calculates final score and enter initials with submit button, also add comment that game is done on the same page
 4. display high score with 2 buttons to go back and clear high scores

*/