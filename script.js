//created variables for buttons, answers, and quiz
var startButton = document.getElementById("start");
var startScreen = document.getElementById("startScreen");
var questionsScreen = document.getElementById("questionsScreen");
var endScreen = document.getElementById("endScreen");
var answers = [] 
var index = 0
var score = 0
var seconds = 40
var timer = document.getElementById("time")

//questions for quiz
var questions = [
    {
    q: "In pro basketball, how high is the basketball hoop from the ground?",
    answers: ["12", "10", "8", "6"],
    correctAnswer: "12"
    },
    {
    q: "What sport is deemed 'King of Sports'?",
    answers: ["Football", "Soccer", "Baseball", "Wrestling"],
    correctAnswer: "Soccer"
    },
    {
    q: "In football, how many points is a touchdown worth?",
    answers: ["6", "3", "2", "9"],
    correctAnswer: "6"
    },
    {
    q: "What is Canada's National Sport?",
    answers: ["Hockey", "Football", "Lacrosse", "Basketball"],
    correctAnswer: "Lacrosse"
    },
    {
    q: "During the first ever modern Olympics, what were the first placers awarded with?",
    answers: ["Bronze Medals", "Ribbons", "Gold Medals", "Silver Medals"],
    correctAnswer: "Silver Medals"
    },
];
// function for quiz questions
function questionMaker() {
    if (index >= questions.length) {
        endGame();
        return;
    }
    console.log('questions', question[index])
    questionsScreen.innerHTML = questions[index].q
    for (var i = 0; i < question[index].answers.length; i++) {
        var answerBtn = document.createElement("Button");
        answerBtn.innerHTML = questions[index].answers[i];
        answerBtn.setAttribute("value", question[index].answers[i]);
        questionsScreen.appendChild(answerBtn);

        answerBtn.addEventListener("click", function (quiz) {
            console.log(quiz.target.value)
            if(quiz.target.value === questions[index].correctAnswer) {
                score++
                console.log("Correct Answers")
                console.log("Score")
            }
            else if (quiz.target.value !== question[index].correctAnswer) {
                (secondsLeft = - 5)
                console.log("incorrect")
            }
            index++;
            questionMaker();
        })
    }
}

//function for start button
startButton.addEventListener("click", function () {
    console.log("button clicked")
    startScreen.style.display = "none";
    questionsScreen.display.innerHTML = "questionsScreen";

    setTimer();
    questionMaker();
})

//create function for timer
function setTimer(){
    var timeInt = setInterval (function(){
        seconds--;
        timer.textContent = seconds === 0;
            clearInterval(timeInt)

    }, 1000)

}
function endGame() {
    console.log("Thank you for playing!!")
    questionsScreen.style.display = "none";
    endScreen.innerHTML = "Your Score: " + score + questions.length
};


