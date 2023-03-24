// Define an array of image paths
var images = [  "a.jpg",  "b.jpg",  "c.jpg",  "d.jpg",  "e.jpg",  "f.jpg",  "g.jpg",  "h.jpg",  "i.jpg",  "j.jpg",  "k.jpg",  "l.jpg", "m.jpg", "n.jpg", "o.jpg", "p.jpg", "q.jpg", "r.jpg", "s.jpg", "t.jpg", "u.jpg", "v.jpg", "w.jpg", "x.jpg", "y.jpg", "z.jpg", "0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg"];

// Define an array of questions, answers, and correct answers
var questions = [  {    image: images[0],
    question: "Which letter the sign is indicating?",
    options: ["a", "l", "m", "n"],
    answer: "a"
  },
  {
    image: images[1],
    question: "Which letter the sign is indicating?",
    options: ["Rose", "", "b", "Lily"],
    answer: "c"
  },
  {
    image: images[2],
    question: "Which letter the sign is indicating?",
    options: ["Paris", "c", "London", "Tokyo"],
    answer: "b"
  },
  {
    image: images[3],
    question: "Which letter the sign is indicating ?",
    options: ["Mount Everest", "Mount Kilimanjaro", "d", "Mount McKinley"],
    answer: "c"
  },
  {
    image: images[4],
    question: "Which letter the sign is indicating?",
    options: ["Eagle", "Hawk", "Falcon", "e"],
    answer: "d"
  },
  {
    image: images[5],
    question: "Which letter the sign is indicating?",
    options: ["Apple", "f", "Orange", "Grape"],
    answer: "b"
  },
  {
    image: images[6],
    question: "Which letter the sign is indicating?",
    options: ["g", "Eiffel Tower", "Big Ben", "Taj Mahal"],
    answer: "a"
  },
  {
    image: images[7],
    question: "Which letter the sign is indicating?",
    options: ["BMW", "Audi", "h", "Tesla"],
    answer: "c"
  },
  {
    image: images[8],
    question: "Which letter the sign is indicating?",
    options: ["Apple", "Banana", "Orange", "i"],
    answer: "d"
  },
  {
    image: images[9],
    question: "Which letter the sign is indicating?",
    options: ["Elephant", "j", "Hippopotamus", "Rhinoceros"],
    answer: "b"
  },
  {
    image: images[10],
    question: "Which letter the sign is indicating?",
    options: ["k", "Great Wall of China", "Pyramids of Giza", "Colosseum"],
    answer: "a"
  },
  {
    image: images[11],
    question: "Which letter the sign is indicating?",
    options: ["BMW", "Audi", "Mercedes-Benz", "l"],
    answer: "d"
  },
  {
    image: images[12],
    question: "Which letter the sign is indicating?",
    options: ["Christ the Redeemer", "m", "Pyramids of Giza", "Colosseum"],
    answer: "b"
  },
  {
    image: images[13],
    question: "Which letter the sign is indicating?",
    options: ["BMW", "Audi", "n", "Tesla"],
    answer: "c"
  },
  {
    image: images[14],
    question: "Which letter the sign is indicating ?",
    options: ["o", "Great Wall of China", "Pyramids of Giza", "Colosseum"],
    answer: "a"
  },
  {
    image: images[15],
    question: "Which letter the sign is indicating?",
    options: ["BMW", "Audi", "Mercedes-Benz", "p"],
    answer: "d"
  },
  {
    image: images[16],
    question: "Which letter the sign is indicating ?",
    options: ["Christ the Redeemer", "q", "Pyramids of Giza", "Colosseum"],
    answer: "b"
  },
  {
    image: images[17],
    question: "Which letter the sign is indicating?",
    options: ["BMW", "Audi", "r", "Tesla"],
    answer: "c"
  },
  {
    image: images[18],
    question: "Which letter the sign is indicating ?",
    options: ["s", "Great Wall of China", "Pyramids of Giza", "Colosseum"],
    answer: "a"
  },
  {
    image: images[19],
    question: "Which letter the sign is indicating?",
    options: ["BMW", "Audi", "Mercedes-Benz", "t"],
    answer: "d"
  },
  {
    image: images[20],
    question: "Which letter the sign is indicating ?",
    options: ["Christ the Redeemer", "u", "Pyramids of Giza", "Colosseum"],
    answer: "b"
  },
  {
    image: images[21],
    question: "Which letter the sign is indicating?",
    options: ["BMW", "Audi", "v", "Tesla"],
    answer: "c"
  },
  {
    image: images[22],
    question: "Which letter the sign is indicating ?",
    options: ["w", "Great Wall of China", "Pyramids of Giza", "Colosseum"],
    answer: "a"
  },
  {
    image: images[23],
    question: "Which letter the sign is indicating ?",
    options: ["BMW", "Audi", "Mercedes-Benz", "x"],
    answer: "d"
  },
  {
    image: images[24],
    question: "Which letter the sign is indicating ?",
    options: ["Christ the Redeemer", "y", "Pyramids of Giza", "Colosseum"],
    answer: "b"
  },
  {
    image: images[25],
    question: "Which letter the sign is indicating?",
    options: ["BMW", "Audi", "z", "Tesla"],
    answer: "c"
  },
  {
    image: images[26],
    question: "Which number the sign is indicating ?",
    options: ["0", "Great Wall of China", "Pyramids of Giza", "Colosseum"],
    answer: "a"
  },
  {
    image: images[27],
    question: "Which number the sign is indicating ?",
    options: ["BMW", "Audi", "Mercedes-Benz", "1"],
    answer: "d"
  },
  {
    image: images[28],
    question: "Which number the sign is indicating ?",
    options: ["Christ the Redeemer", "2", "Pyramids of Giza", "Colosseum"],
    answer: "b"
  },
  {
    image: images[29],
    question: "Which number the sign is indicating ?",
    options: ["BMW", "Audi", "3", "Tesla"],
    answer: "c"
  },
  {
    image: images[30],
    question: "Which number the sign is indicating ?",
    options: ["4", "Great Wall of China", "Pyramids of Giza", "Colosseum"],
    answer: "a"
  },
  {
    image: images[31],
    question: "Which number the sign is indicating?",
    options: ["BMW", "Audi", "Mercedes-Benz", "5"],
    answer: "d"
  },
  {
    image: images[32],
    question: "Which number the sign is indicating ?",
    options: ["BMW", "6", "Mercedes-Benz", "Tesla"],
    answer: "b"
  },
  {
    image: images[33],
    question: "Which number the sign is indicating ?",
    options: ["BMW", "Audi", "7", "Tesla"],
    answer: "c"
  },
  {
    image: images[34],
    question: "Which number the sign is indicating ?",
    options: ["8", "Audi", "Mercedes-Benz", "Tesla"],
    answer: "a"
  },
  {
    image: images[35],
    question: "Which number the sign is indicating?",
    options: ["BMW", "Audi", "Mercedes-Benz", "9"],
    answer: "d"
  },
  {
    image: images[36],
    question: "Which number the sign is indicating?",
    options: ["1", "10", "0", "6"],
    answer: "b"
  }
];

// Define variables to keep track of the current question and score
var currentQuestion = 0;
var score = 0;

// Function to select a random set of questions and answers
function selectRandomQuestions() {
  // Shuffle the images array
 
  for (var i = images.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = images[i];
    images[i] = images[j];
    images[j] = temp;
  }

  // Select the first 10 shuffled images
  var selectedImages = images.slice(0, 10);

  // Filter the questions array to only include questions related to the selected images
  var selectedQuestions = questions.filter(function(question) {
    return selectedImages.indexOf(question.image) !== -1;
  });

  // Shuffle the selectedQuestions array
  for (var i = selectedQuestions.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = selectedQuestions[i];
    selectedQuestions[i] = selectedQuestions[j];
    selectedQuestions[j] = temp;
  }

  // Display the first question and set up the click handlers for the answer options
  displayQuestion(selectedQuestions[currentQuestion]);
  var answerOptions = document.querySelectorAll(".answer-option");
  for (var i = 0; i < answerOptions.length; i++) {
    answerOptions[i].addEventListener("click", handleAnswerOptionClick);
  }
}

// Function to display a question
function displayQuestion(question) {
  // Update the question number and score displays
  document.querySelector("#question-number").textContent = "Question " + (currentQuestion + 1) + " of 10";
  document.querySelector("#score").textContent = "Score: " + score;

  // Update the image and question displays
  document.querySelector("#image").setAttribute("src", question.image);
  document.querySelector("#question").textContent = question.question;

  // Update the answer option displays
  var answerOptions = document.querySelectorAll(".answer-option");
  for (var i = 0; i < answerOptions.length; i++) {
    answerOptions[i].textContent = question.options[i];
  }
}

// Function to handle a click on an answer option
function handleAnswerOptionClick(event) {
  // Determine the selected answer option and check if it is correct
  var selectedAnswerOption = event.target;
  var selectedAnswer = selectedAnswerOption.getAttribute("data-answer");
  var question = questions[currentQuestion];
  var isCorrect = selectedAnswer === question.answer;

  // Update the score and display the result
  if (isCorrect) {
    score += 10;
    selectedAnswerOption.classList.add("correct");
  } else {
    score = Math.max(score - 10, 0);
    selectedAnswerOption.classList.add("incorrect");
    var correctAnswerOption = document.querySelector(".answer-option[data-answer=" + question.answer + "]");
    correctAnswerOption.classList.add("correct");
  }
  document.querySelector("#score").textContent = "Score: " + score;

  // Disable the answer options and display the next question button
  var answerOptions = document.querySelectorAll(".answer-option");
  for (var i = 0; i < answerOptions.length; i++) {
    answerOptions[i].removeEventListener("click", handleAnswerOptionClick);
    answerOptions[i].classList.add("disabled");
  }
  document.querySelector("#next-question-button").classList.remove("hidden");
}

// Function to handle a click on the next question button
function handleNextQuestionButtonClick() {
  // Increment the current question and display the next question
  currentQuestion++;
  if (currentQuestion < 10) {
    displayQuestion(selectedQuestions[currentQuestion]);
    var answerOptions = document.querySelectorAll(".answer-option");
    for (var i = 0; i < answerOptions.length;i++) {
            answerOptions[i].addEventListener("click", handleAnswerOptionClick);
            answerOptions[i].classList.remove("disabled");
            answerOptions[i].classList.remove("correct");
            answerOptions[i].classList.remove("incorrect");
            }
            document.querySelector("#next-question-button").classList.add("hidden");
            } else {
            // Quiz is complete, display the final score and wrong answers
            document.querySelector("#quiz").classList.add("hidden");
            document.querySelector("#results").classList.remove("hidden");
            document.querySelector("#final-score").textContent = "Final Score: " + score;
 // Display the wrong answers and their correct options
var wrongAnswers = selectedQuestions.filter(function(question)
 {
    return question.answer !== document.querySelector(".answer-option[data-answer=" + question.answer + "]:checked").getAttribute("data-answer");
  });
  var wrongAnswersList = document.querySelector("#wrong-answers-list");
  for (var i = 0; i < wrongAnswers.length; i++) {
    var li = document.createElement("li");
    li.textContent = wrongAnswers[i].question + " (" + wrongAnswers[i].options[wrongAnswers[i].answer] + ")";
    wrongAnswersList.appendChild(li);
  }
  }
  }
  
  // Set up the click handler for the next question button
 // document.querySelector("#next-question-button").addEventListener("click", handleNextQuestionButtonClick);
  
  // Set up the click handler for the retake quiz button
  //document.querySelector("#retake-quiz-button").addEventListener("click", function() {
//  location.reload();
  //});
  console.log("hello nattu")