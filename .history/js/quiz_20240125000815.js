// /* Html elements */
// const categoryMenu = document.getElementById('categoryMenu')
// const difficultyOptions = document.getElementById('difficultyOptions')
// const questionsNumber = document.getElementById('questionsNumber')

// const startQuizBtn = document.getElementById('startQuiz')

// /* Events */
// startQuizBtn.addEventListener('click' , function(e){

// })


// https://opentdb.com/api.php?amount=10&category=9&difficulty=medium

export default class Quiz{
    constructor(difficulty , amount , category){
        this.difficulty = difficulty,
        this.amount = amount,
        this.category = category
        this.score = 0

    }


async getQuestion(){
    const api = await fetch(`https://opentdb.com/api.php?amount=${this.amount}&category=${this.category}&difficulty=${this.difficulty}`)
    const data = await api.json()
    console.log(data.results)
    return data.results;

}
endQuiz

}

