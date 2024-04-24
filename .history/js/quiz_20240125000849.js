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
endQuiz(){
    return `
    <div
      class="question shadow-lg col-lg-6 offset-lg-3  p-4 rounded-3 d-flex flex-column justify-content-center align-items-center gap-3"
    >
      <h2 class="mb-0">
      ${
        this.score == this.numberOfQuestions
          ? `Congratulations 🎉`
          : `Your score is ${this.score}`
      }      
      </h2>
      <button class="again btn btn-primary rounded-pill"><i class="bi bi-arrow-repeat"></i> Try Again</button>
    </div>
  `;
}

}
