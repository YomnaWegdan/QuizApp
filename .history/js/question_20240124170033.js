import { questions, questionsContainer } from "./index.js"

export default class Question{
    constructor(index){ //indexof question
        //question , correct answer , wrong answer
        this.index = index
        this.question = questions[index].question  //questions from index.js that contain data of api , .question from data of api
        this.correct = questions[index].correct_answer
        this.wrong =  questions[index].incorrect_answer
        this.category = questions[index].category
    }

    getAllAnswer(){
        return this.wrong.concat(th)
    }

    displayQuestion(){
        const questionMarkUp = `
        <div
          class="question shadow-lg col-lg-6 offset-lg-3  p-4 rounded-3 d-flex flex-column justify-content-center align-items-center gap-3 animate__animated animate__bounceIn"
        >
          <div class="w-100 d-flex justify-content-between">
            <span class="btn btn-category">${this.category}</span>
            <span class="fs-6 btn btn-questions">${this.index + 1} of ${questions.length} </span>
          </div>
          <h2 class="text-capitalize h4 text-center">${this.question}</h2>  
          <ul class="choices w-100 list-unstyled m-0 d-flex flex-wrap text-center">
         
          </ul>
          <h2 class="text-capitalize text-center score-color h3 fw-bold">
            <i class="bi bi-emoji-laughing"></i> 
          </h2>        
        </div>
      `;
      questionsContainer.innerHTML = questionMarkUp

    }
}