let score = 0
const scoreDisplay = document.querySelector("#scoreDisplay")
const question = document.querySelector("#question")
const choices = document.querySelectorAll(".choices")
const background = document.querySelector('.container')
let gameArray = shuffleQuestions()
let counter = gameArray.length - 1

function shuffleQuestions(){
  let shuffledArray = []
  let length = questions.length
  let index
  while(length){
    index = Math.floor(Math.random() * length)
    shuffledArray.push(questions.splice(index, 1))
    length--
  }
  return shuffledArray
}

$(".answers").click(function(e) {
  var classes = e.target.classList.value;
  if (classes.includes("correct")) {
    score += 100
    $(function() {
      $('#yes').fadeIn('normal', function() {
      $(this).delay(100).fadeOut();
   })
})
  } else if (classes.includes("wrong")) {
$(function() {
      $('#no').fadeIn('normal', function() {
      $(this).delay(100).fadeOut();
   })
})
    score -= 50
  }
  counter--
  scoreDisplay.textContent = score
  counter > 0 ? reset(gameArray.shift()) : endGame()
})


//randomly pick next question from questions & display question
function reset(question) {
  question = question[0]
  $("#question").html(question.question)
  $("#one").html(question.choices[0])
  $("#two").html(question.choices[1])
  $("#three").html(question.choices[2])
  $("#four").html(question.choices[3])
  addClasses(question)
}
// add correct class to
function addClasses(question) {
  for (i = 0; i < question.choices.length; i++) {
    choices[i].classList = ["choices"]
    question.correct === i ? choices[i].classList.add("correct") : choices[i].classList.add("wrong")
  }
}

function endGame() {
  background.innerHTML = `<h3>Game Over</h3><p>Your score was ${score}</p><p>Thanks for playing!</p>`
}
