let score = 0;
const scoreDisplay = document.querySelector("#scoreDisplay")
const question = document.querySelector("#question")
const choices = document.querySelectorAll(".choices")
const background = document.querySelector('.container')

const setBackgroundColor = function(e){
  if(e){
    background.style.background = 'yellow'
  } else {
    background.style.background = 'orange'
  }
  setTimeout(resetBackgroundColor, 1000)
}

const resetBackgroundColor = function(){
  background.style.background = '#62B6CB'
}

$(".answers").click(function(e) {
  var classes = e.target.classList.value;
  if (classes.includes("correct")) {
    score += 100;
    setBackgroundColor(e);
    $(function() {
      $('#yes').fadeIn('normal', function() {
      $(this).delay(100).fadeOut();
   });
});
  } else if (classes.includes("wrong")) {
$(function() {
      $('#no').fadeIn('normal', function() {
      $(this).delay(100).fadeOut();
   });
});
    score -= 50;
      setBackgroundColor();
  }
  scoreDisplay.textContent = score;
  reset();
});

//randomly pick next question from questions & display question
function reset() {
  var nextQNum = Math.floor(Math.random() * questions.length);
  var nextQ = questions[nextQNum].question;
  $("#q").html(questions[nextQNum].question);
  $("#one").html(questions[nextQNum].choices[0]);
  $("#two").html(questions[nextQNum].choices[1]);
  $("#three").html(questions[nextQNum].choices[2]);
  $("#four").html(questions[nextQNum].choices[3]);
  addClasses(nextQNum);
}
// add correct class to
function addClasses(index) {
  var multChoices = questions[index].choices;
  var answerInd = questions[index].correct;
  var answer = questions[index].choices[answerInd];

  for (i = 0; i < multChoices.length; i++) {
    choices[i].classList = ["choices"];
    if (answerInd === i) choices[i].classList.add("correct");
    else choices[i].classList.add("wrong");
  }
}

const questions = [
  {
    question: "Who is the author of <em>A Tale of Two Cities</em>?",
    choices: [
      "Charles Dickens",
      "Jane Austen",
      "Daniel Defoe",
      "Arthur Conan Doyle"
    ],
    correct: 0
  },
  {
    question:
      "Who is the narrator of F. Scott Fitzgerald's <em>The Great Gatsby</em>?",
    choices: [
      "F. Scott Fitzgerald",
      "Nick Carraway",
      "Jay Gatsby",
      "T.J. Eckleburg"
    ],
    correct: 1
  },
  {
    question: "What is Hamlet's mother's name?",
    choices: ["Penelope", "Gertrude", "Ophelia", "Calliope"],
    correct: 1
  },
  {
    question:
      "Identify the source of these lines: 'Beauty is truth, truth beauty, that is all / Ye know on earth, and all ye need to know.'",
    choices: [
      "John Keats's 'Ode To a Grecian Urn'",
      "Shakespeare's <em>The Tempest</em>",
      "Edgar Allan Poe's 'Ligeia'",
      "Sir Philip Sidney's 'Sonnet 64'"
    ],
    correct: 0
  },
  {
    question:
      "When was the oldest surviving copy of Homer's <em>Iliad</em> composed?",
    choices: [
      "From the ninth to the fifteenth century CE",
      "117 BCE",
      "Eight century BCE",
      "Ninth century BCE"
    ],
    correct: 2
  },{
    question:
      "How many novels did Tobias Smollett write?",
    choices: [
      "1",
      "6",
      "16",
      "61"
    ],
    correct: 1
  },
    {
    question:
      "Who is the author of the following lines:<br>'And we are here as on a darkling plain<br>Swept with confused alarms of struggle and flight,<br>Where ignorant armies clash by night?'",
    choices: [
      "Seamus Heaney",
      "Anne Sexton",
      "Lord Alfred Tennyson",
      "Matthew Arnold"
    ],
    correct: 3
  },
  {
    question:
      "Which of the following best describes blank verse?",
    choices: [
      "Unrhymed iambic pentameter",
      "Rhymed iambic tetrameter",
      "Free verse",
      "Accented verse"
    ],
    correct: 0
  },
  {
    question:
      "How old was Miguel Cervantes when he completed <em>Don Quixote</em>?",
    choices: [
      "27",
      "37",
      "42",
      "68"
    ],
    correct: 3
  },
  {
    question:
      "Theocritus is known for his contribution to which major ancient genre?",
    choices: [
      "Pastoral",
      "Epic",
      "Tragedy",
      "Biography"
    ],
    correct: 0
  },
    {
    question:
      "Who first used the phrase, 'To err is human, to forgive divine?'",
    choices: [
      "William Shakespeare",
      "Alexander Pope",
      "William Wordsworth",
      "Emily Dickinson"
    ],
    correct: 1
  },
  {
    question:
      "Which of these poems is the shortest (in lines)?",
    choices: [
      "Ezra Pound, 'In a Station of the Metro",
      "William Carlos Williams, 'The Red Wheelbarrow'",
      "Basho, 'An old silent pond'",
      "Marianne Moore, 'Silence'"
    ],
    correct: 0
  },
  {
    question:
      "Lyn Hejinian is known for her contribution to which major twentieth century movement?",
    choices: [
      "Postmodernism",
      "New Formalism",
      "Language Poetry",
      "Martian Poetry"
    ],
    correct: 2
  },
];
