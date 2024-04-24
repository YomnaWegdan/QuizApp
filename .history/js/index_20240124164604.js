import Question from './question.js';
import Quiz from './quiz.js'

/* Html elements */
const quizOptions = document.getElementById('quizOptions'); //form
const categoryMenu = document.getElementById('categoryMenu')
const difficultyOptions = document.getElementById('difficultyOptions')
const questionsNumber = document.getElementById('questionsNumber')

const startQuizBtn = document.getElementById('startQuiz')
con

export let questions=[]

/* Events */
startQuizBtn.addEventListener('click' , async function(e){
    const category = categoryMenu.value;
    const difficulty = difficultyOptions.value;
    const amount = questionsNumber.value;
    
    const currentQuiz = new Quiz(difficulty , amount ,category );
    console.log(currentQuiz);
    questions = await currentQuiz.getQuestion();
    console.log(questions)

    quizOptions.classList.replace('d-flex' , 'd-none');

    const questionOne = new Question(0);
})