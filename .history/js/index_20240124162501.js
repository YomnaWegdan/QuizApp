import Quiz from './quiz.js'

/* Html elements */
const quizOptions = document.getElementById('quizOptions'); //form
const categoryMenu = document.getElementById('categoryMenu')
const difficultyOptions = document.getElementById('difficultyOptions')
const questionsNumber = document.getElementById('questionsNumber')

const startQuizBtn = document.getElementById('startQuiz')

/* Events */
startQuizBtn.addEventListener('click' , async function(e){
    const category = categoryMenu.value;
    const difficulty = difficultyOptions.value;
    const amount = questionsNumber.value;
    
    const currentQuiz = new Quiz(difficulty , amount ,category );
    console.log(currentQuiz);
    const question = await currentQuiz.getQuestion();
    console.log(question)

    quizOptions.classList
})