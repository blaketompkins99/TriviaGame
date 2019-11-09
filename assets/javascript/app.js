var timeLeft = 30;
var interval;
var right = 0;
var wrong = 0;
var unanswered = 0;
var answer0 = "unanswered";
var answer1 = "unanswered";
var answer2 = "unanswered";
var answer3 = "unanswered";
var answer4 = "unanswered";
var questions = {

    question0: "Who has scored the most points in NBA history?",
    a0: "Kareem Abdul-Jabbar",
    b0: "Michael Jordan",
    c0: "LeBron James",

    question1: "How many championships have the Celtics won?",
    a1: "11",
    b1: "28",
    c1: "17",

    question2: "Who has the most triple-doubles in NBA history?",
    a2: "Russell Westbrook",
    b2: "Oscar Robertson",
    c2: "Kobe Bryant",

    question3: "How many NBA Finals MVP awards does Michael Jordan have?",
    a3: "2",
    b3: "4",
    c3: "6",

    question4: "Who was the first player to make 400+ 3-point shots in a single season?",
    a4: "Reggie Miller",
    b4: "Stephen Curry",
    c4: "Ray Allen"
}

$("#startBtn").on("click", initialize);

function initialize() {

    $("#startBtn").remove();

    function decrement() {
        timeLeft--;
        $("#timer").html("<h1>" + timeLeft + "<h1>");
        $("#timer").css("position", "relative");
        $("#timer").css("color", "red");
        if (timeLeft === 0) {
            endGame();
        }
    }

    $("#questions").append("<h2>" + questions.question0 + "<h2>");
    $("#questions").append("<input type='radio' id='right0' name='q0' value='correct'>" + questions.a0 + " ");
    $("#questions").append("<input type='radio' id='wrong0' name='q0' value='incorrect'>" + questions.b0 + " ");
    $("#questions").append("<input type='radio' id='wrong0' class='0' name='q0' value='incorrect'>" + questions.c0 + " ");
    answer0 = $(".0").attr("value");
    console.log(answer0);
    if($('#right0').is(':checked')) {
        right++;
    } else if ($('#wrong0').is(':checked')){
        wrong++
    } else {
        unanswered++;
    }

    $("#questions").append("<h2>" + questions.question1 + "<h2>");
    $("#questions").append("<input type='radio' id='wrong1' name='q1' value='incorrect'>" + questions.a1 + " ");
    $("#questions").append("<input type='radio' id='wrong1' name='q1' value='incorrect'>" + questions.b1 + " ");
    $("#questions").append("<input type='radio' id='right1' id='1' name='q1' value='correct'>" + questions.c1 + " ");
    answer1 = $(".1").attr("value");
    console.log(answer1);
    if($('#right1').is(':checked')) {
        right++;
    } else if ($('#wrong1').is(':checked')){
        wrong++
    } else {
        unanswered++;
    }

    $("#questions").append("<h2>" + questions.question2 + "<h2>");
    $("#questions").append("<input type='radio' id='wrong2' name='q2' value='incorrect'>" + questions.a2 + " ");
    $("#questions").append("<input type='radio' id='right2' name='q2' value='correct'>" + questions.b2 + " ");
    $("#questions").append("<input type='radio' id='wrong2' name='q2' value='incorrect'>" + questions.c2 + " ");
    answer2 = $(".2").attr("value");
    console.log(answer2);
    if($('#right2').is(':checked')) {
        right++;
    } else if ($('#wrong2').is(':checked')){
        wrong++
    } else {
        unanswered++;
    }

    $("#questions").append("<h2>" + questions.question3 + "<h2>");
    $("#questions").append("<input type='radio' id='wrong3' name='q3' value='incorrect'>" + questions.a3 + " ");
    $("#questions").append("<input type='radio' id='wrong3' name='q3' value='incorrect'>" + questions.b3 + " ");
    $("#questions").append("<input type='radio' id='right3' name='q3' value='correct'>" + questions.c3 + " ");
    answer3 = $(".3").attr("value");
    console.log(answer3);
    if($('#right3').is(':checked')) {
        right++;
    } else if ($('#wrong3').is(':checked')){
        wrong++
    } else {
        unanswered++;
    }

    $("#questions").append("<h2>" + questions.question4 + "<h2>");
    $("#questions").append("<input type='radio' id='wrong4' name='q4' value='incorrect'>" + questions.a4 + " ");
    $("#questions").append("<input type='radio' id='right4' name='q4' value='correct'>" + questions.b4 + " ");
    $("#questions").append("<input type='radio' id='wrong4' name='q4' value='incorrect'>" + questions.c4 + " ");
    answer4 = $(".4").attr("value");
    console.log(answer4);
    if($('#right4').is(':checked')) {
        right++;
    } else if ($('#wrong4').is(':checked')){
        wrong++
    } else {
        unanswered++;
    }

    $("#doneBtn").append("<button id='done'>DONE");

    $("#done").css("background-color", "rgb(59, 120, 233");
    $("#done").css("height", "100px");
    $("#done").css("width", "300px");
    $("#done").css("font-size", "50px");
    $("#done").css("font-family", "unset");
    $("#done").css("color", "white");
    $("#done").css("border", "solid 2px black");
    $("#done").css("clear", "both");
    $("#done").css("margin", "75px");

    $("#begin").css("height", "1000px");

    clearInterval(interval);
    interval = setInterval(decrement, 1000);

    function endGame() {
        console.log("right " + right);
        console.log("wrong " + wrong);
        console.log("ua " + unanswered);
        $("#questions").remove();
        $("#timer").remove();
        $("#doneBtn").remove();
        $("#begin").css("height", "400px");
        $("#results").append("<h3>Correct: " + right + "<h3>");
        $("#results").append("<h3>Incorrect: " + wrong + "<h3>");
        $("#results").append("<h3>Unanswered: " + unanswered + "<h3>");
        timeLeft = -1;
    }

    $("#done").on("click", endGame);

}