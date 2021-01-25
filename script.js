//created variables for buttons, answers, and quiz
var startBtn = document.getElementById("start");
var startScreen = document.getElementById("startScreen");
var questionsScreen = document.getElementById("questionScreen");
var gameOverScreen = document.getElementById("endScreen");
var answers = []
var index = 0
var score = 0

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
function questionBuilder() {
    console.log(questions[index])
    questionsScreen.innerHTML = questions[index].q         
    for (var i = 0; i < questions[index].answers.length; i++) {
        var answerButton = document.createElement("BUTTON");
        answerButton.innerHTML = questions[index].answers[i];
        answerButton.setAttribute("value", questions[index].answers[i])
        questionsScreen.appendChild(answerButton)

        answerButton.addEventListener("click", function (event) {
            console.log(event.target.value)
            if (event.target.value === questions[index].correctAnswer) {
                score++
                console.log("correct")
                console.log(score)
                
            }
            else if (event.target.value !== questions[index].correctAnswer) {
                console.log("incorrect")
            }
            index++
            questionBuilder();
            

        })
    }
}


startBtn.addEventListener("click", function () {
    console.log("button clicked")
    startScreen.style.display = "none"
    questionsScreen.style.display = "block";
    questionBuilder();
})

function endgame (){
    startScreen.style.display = "none";
    questionsScreen.style.display = "none";
}