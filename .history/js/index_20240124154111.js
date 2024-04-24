/* Html elements */
const categoryMenu = document.getElementById('categoryMenu')
const difficultyOptions = document.getElementById('difficultyOptions')
const questionsNumber = document.getElementById('questionsNumber')

const startQuizBtn = document.getElementById('startQuiz')

/* Events */
startQuizBtn.addEventListener('click' , function(e){
    const category = categoryMenu.value;
    const difficulty = difficultyOptions.value;
    const amount = questionsNumber.value;
    

})