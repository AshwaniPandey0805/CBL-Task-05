const easyLevel = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: "London", correct: false },
            { text: "Paris", correct: true },
            { text: "Berlin", correct: false },
            { text: "Rome", correct: false }
        ]
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: [
            { text: "Jupiter", correct: true },
            { text: "Saturn", correct: false },
            { text: "Earth", correct: false },
            { text: "Mars", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for water?",
        answers: [
            { text: "H2O", correct: true },
            { text: "CO2", correct: false },
            { text: "O2", correct: false },
            { text: "NaCl", correct: false }
        ]
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        answers: [
            { text: "William Shakespeare", correct: true },
            { text: "Jane Austen", correct: false },
            { text: "Charles Dickens", correct: false },
            { text: "F. Scott Fitzgerald", correct: false }
        ]
    },
    {
        question: "What is the symbol for the element gold?",
        answers: [
            { text: "Au", correct: true },
            { text: "Ag", correct: false },
            { text: "Fe", correct: false },
            { text: "Cu", correct: false }
        ]
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: [
            { text: "Leonardo da Vinci", correct: true },
            { text: "Pablo Picasso", correct: false },
            { text: "Vincent van Gogh", correct: false },
            { text: "Michelangelo", correct: false }
        ]
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        answers: [
            { text: "Mars", correct: true },
            { text: "Venus", correct: false },
            { text: "Mercury", correct: false },
            { text: "Jupiter", correct: false }
        ]
    },
    {
        question: "What is the tallest mammal?",
        answers: [
            { text: "Giraffe", correct: true },
            { text: "Elephant", correct: false },
            { text: "Blue Whale", correct: false },
            { text: "Polar Bear", correct: false }
        ]
    },
    {
        question: "Who is credited with inventing the telephone?",
        answers: [
            { text: "Alexander Graham Bell", correct: true },
            { text: "Thomas Edison", correct: false },
            { text: "Nikola Tesla", correct: false },
            { text: "Albert Einstein", correct: false }
        ]
    },
    {
        question: "What is the largest organ in the human body?",
        answers: [
            { text: "Skin", correct: true },
            { text: "Heart", correct: false },
            { text: "Brain", correct: false },
            { text: "Liver", correct: false }
        ]
    }
];

const mediumLevel = [
    {
        question: "Which planet is known as the \"Red Planet\"?",
        answers: [
            {text: "Mars", correct: true},
            {text: "Venus", correct: false},
            {text: "Mercury", correct: false},
            {text: "Jupiter", correct: false}
        ]
    },
    {
        question: "What is the tallest mammal?",
        answers: [
            {text: "Giraffe", correct: true},
            {text: "Elephant", correct: false},
            {text: "Blue Whale", correct: false},
            {text: "Polar Bear", correct: false}
        ]
    },
    {
        question: "What is the largest organ in the human body?",
        answers: [
            {text: "Skin", correct: true},
            {text: "Heart", correct: false},
            {text: "Brain", correct: false},
            {text: "Liver", correct: false}
        ]
    },
    {
        question: "Who wrote \"Romeo and Juliet\"?",
        answers: [
            {text: "William Shakespeare", correct: true},
            {text: "Jane Austen", correct: false},
            {text: "Charles Dickens", correct: false},
            {text: "F. Scott Fitzgerald", correct: false}
        ]
    },
    {
        question: "What is the symbol for the element gold?",
        answers: [
            {text: "Au", correct: true},
            {text: "Ag", correct: false},
            {text: "Fe", correct: false},
            {text: "Cu", correct: false}
        ]
    }
]

const hardLevel = [
    {
        question: "What is the largest ocean on Earth by surface area?",
        answers: [
            {text: "Pacific Ocean", correct: true},
            {text: "Atlantic Ocean", correct: false},
            {text: "Indian Ocean", correct: false},
            {text: "Southern Ocean", correct: false}
        ]
    },
    {
        question: "Who is known as the father of modern physics?",
        answers: [
            {text: "Isaac Newton", correct: false},
            {text: "Galileo Galilei", correct: false},
            {text: "Albert Einstein", correct: true},
            {text: "Nikola Tesla", correct: false}
        ]
    },
    {
        question: "Which country has the largest population in the world?",
        answers: [
            {text: "China", correct: true},
            {text: "India", correct: false},
            {text: "United States", correct: false},
            {text: "Russia", correct: false}
        ]
    },
    {
        question: "What is the chemical formula for the ozone layer?",
        answers: [
            {text: "O3", correct: true},
            {text: "CO2", correct: false},
            {text: "H2O", correct: false},
            {text: "CH4", correct: false}
        ]
    },
    {
        question: "In which year did the United States declare independence from Great Britain?",
        answers: [
            {text: "1776", correct: true},
            {text: "1789", correct: false},
            {text: "1801", correct: false},
            {text: "1812", correct: false}
        ]
    }
]

const levelForm = document.getElementById("levelForm");

    levelForm.addEventListener("submit", function(event) {

        document.querySelector(".app").style.visibility = "visible"
        document.querySelector(".select-level").style.visibility = "hidden"
        event.preventDefault(); // Prevent the default form submission behavior
        
        const selectedLevel = document.querySelector('input[name="level"]:checked');
        
        if (selectedLevel) {
            const selectedLevelValue = selectedLevel.value;
            console.log(selectedLevelValue);

            if(selectedLevelValue == "easy"){
                playQuizGame(easyLevel, 30, "Easy");
            }else if(selectedLevelValue == "medium"){
                playQuizGame(mediumLevel, 20, "Medium");
            }else if(selectedLevelValue == "hard"){
                playQuizGame(hardLevel, 15, "Hard" );
            }
                
        } else {
            console.error("Please select a level.");
        }
    });



 function playQuizGame(quizLevel, timer, level){
    console.log("chal rha h")
            const timeLimitPerQuestion = timer;
        document.querySelector(".heading h1").innerHTML = `Quiz Level is ${level}`;
        const questionElement = document.getElementById("question");
        const answerButtons = document.getElementById("answer-button");
        const nextButton = document.getElementById("next-btn");
        const actionBtns = document.querySelector(".action-btn");
        let currentQuestionIndex = 0;
        let score = 0;

        function startQuiz(){
            currentQuestionIndex = 0;
            score = 0;
            nextButton.innerHTML = "Next"
            
            let questionNumber = document.querySelector(".heading span");
            questionNumber.innerHTML = `1/${quizLevel.length}`
            showQuestion();
        }
        //  let timerInterval
        function showQuestion(){
            resetState()
            let currentQuestion = quizLevel[currentQuestionIndex];
            let questionNo = currentQuestionIndex + 1;
            questionElement.innerHTML = questionNo + ". " + currentQuestion.question

            currentQuestion.answers.forEach(answer => {
                const button = document.createElement("button");
                button.innerHTML = answer.text;
                button.classList.add("btn");
                answerButtons.appendChild(button);
                if(answer.correct){
                    button.dataset.correct = answer.correct;
                }
                button.addEventListener("click", selectAnswer)
            })
            
            let timeLeft = timeLimitPerQuestion;
            const timerElement = document.getElementById("timer");

            timerInterval = setInterval(() => {
                timerElement.textContent = `Time left: ${timeLeft}s`;

                if (timeLeft <= 0) {
                    clearInterval(timerInterval);
                    handleNextButton();
                }

                timeLeft--;
            }, 1000);
        }
        
        

        function resetState(){
            // nextButton.style.display = "none";
            actionBtns.style.visibility = "hidden" 
            while(answerButtons.firstChild){
                answerButtons.removeChild(answerButtons.firstChild);
            }
        }
        let count = 0;
        function selectAnswer(e){
            
            const selectBtn = e.target;
            console.log(selectBtn);

            Array.from(answerButtons.children).forEach(button => {
                    button.classList.remove("selectedBtn")
                    // button.classList.add("correct")

            });

            selectBtn.classList.add("selectedBtn");
            const isCorrect = selectBtn.dataset.correct == "true";
            if(isCorrect){
                
                if(count == 0){
                    score++;
                }
                count++;
                console.log("Score",score);
                console.log("currentIndex", currentQuestionIndex)
            }

            // nextButton.style.display = 'block';
            // actionBtns.style.display = "block"
            actionBtns.style.visibility = "visible"
        }

        nextButton.addEventListener("click", ()=>{
            if(currentQuestionIndex < quizLevel.length){
                clearInterval(timerInterval);
                
                handleNextButton();
            }else{
                
                startQuiz();
            }
        })

        function handleNextButton(){

            count = 0

            currentQuestionIndex++;
            let currentQuestion = currentQuestionIndex;
            // console.log("nextIndex",currentQuestionIndex);

            if(currentQuestion < 10){
                let questionNumber = document.querySelector(".heading span");
                questionNumber.innerHTML = `${currentQuestion+1}/${quizLevel.length}`
            }

            if(currentQuestionIndex < quizLevel.length){
                showQuestion();
            }else{
                showScore();
            }
        }

        function showScore(){
            resetState();
            questionElement.innerHTML = `You scored ${score} out of ${quizLevel.length}!`;
            nextButton.innerHTML = 'Play Again';
            // nextButton.style.display = 'block'
            actionBtns.style.visibility = "visible"



        }

        startQuiz();

        document.querySelector("#exit-btn").addEventListener("click", ()=>{
            document.querySelector(".app").style.visibility = "hidden"
            document.querySelector(".select-level").style.visibility = "visible"
            document.querySelector(".action-btn").style.visibility = "hidden";
            clearInterval(timerInterval);
     })
 }

 