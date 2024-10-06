const questions = [
    {
        question:"which one is the programming language ?",
        answers:[
            {text:"HTML", correct:false},
            {text:"CSS", correct:false},
            {text:"JavaScript", correct:true},
            {text:"SQL", correct:false}

            
        ]
    },
    {
        question:"What is the purpose of programming language?",
        answers:[
            {text:"To scare people", correct:false},
            {text:"To scare computer", correct:false},
            {text:"all are correct", correct:false},
            {text:"To enhance the capability of computer system", correct:true}
        ]
    },
    {
        question:"Who is the creater of javascript?",
        answers:[
            {text:"Me", correct:false},
            {text:"You", correct:false},
            {text:"Bredian Eich", correct:true},
            {text:"Denis Riche", correct:false}
        ]  
    },
    {
        question:"Which company developed javascript?",
        answers:[
            {text:"Amazon", correct:false},
            {text:"Microsoft", correct:false},
            {text:"Infosys", correct:false},
            {text:"Netscape", correct:true}
        ]  

    }
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + " ." +currentQestion.question;

    currentQestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
}
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const  isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;

    });
    nextButton.style.display = "block";
}
function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}




function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore(score);
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});
startQuiz();