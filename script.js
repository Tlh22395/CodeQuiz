var startButton = document.getElementById("start");
var startScreen = document.getElementById("startScreen");
var questionsScreen = document.getElementById("questionsScreen");
var endScreen = document.getElementById("endScreen");
var answers = [] 
var index = 0
var score = 0
var secondsLeft = 40
var timer = document.getElementById("time")

var questions = [
    {
    q: "In pro basketball, how high is the basketball hoop from the ground?",
    answers: ["12", "10", "8", "6"],
    CorrectAnswer: "12"
    },
    {
    q: "What sport is deemed 'King of Sports'?",
    answers: ["Football", "Soccer", "Baseball", "Wrestling"],
    CorrectAnswer: "Soccer"
    },
    {
    q: "In football, how many points is a touchdown worth?",
    answers: ["6", "3", "2", "9"],
    CorrectAnswer: "6"
    },
    {
    q: "What is Canada's National Sport?",
    answers: ["Hockey", "Football", "Lacrosse", "Basketball"],
    CorrectAnswer: "Lacrosse"
    },
    {
    q: "During the first ever modern Olympics, what were the first placers awarded with?",
    answers: ["Bronze Medals", "Ribbons", "Gold Medals", "Silver Medals"],
    CorrectAnswer: "Silver Medals"
    },
];