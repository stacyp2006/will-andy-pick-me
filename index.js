var answerButton = document.querySelector(".answer-button");
var clearButton = document.querySelector(".clear-button");
var questionInput = document.querySelector(".question-input");
var magicEightBall = document.querySelector(".eight-ball");
var answer = document.querySelector(".random-answer");

var randomAnswers = ["It is certain.",
  "It is decidedly so.",
  "Without a doubt.",
  "Yes - definitely.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Yes.",
  "Signs point to yes.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don't count on it.",
  "My reply is no.",
  "My sources say no."
  "Outlook not so good.",
  "Very doubtful."];

answerButton.addEventListener("click", answerDisplay);

function getRandomIndex(array) {
  return array[Math.floor(Math.random() * array.length)];

function answerDisplay() {
  magicEightBall.classList.add("hidden");
  questionInput.classList.remove("hidden");
  answer.classList.remove("hidden");
  clearButton.classList.remove("hidden");
  questionInput.innerText = questionInput.value;
  answer.innerText = getRandomIndex(randomAnswers);
};
