import { currentQuiz, questions, questionsContainer } from "./index.js"

export default class Question{
    constructor(index){ //indexof question
        //question , correct answer , wrong answer
        this.index = index
        this.question = questions[index].question  //questions from index.js that contain data of api , .question from data of api
        this.correct = questions[index].correct_answer
        this.wrong =  questions[index].incorrect_answers
        this.category = questions[index].category
        this.allAnswer = this.getAllAnswer()
        
    }
    

    getAllAnswer(){
        return this.wrong.concat(this.correct).sort()
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
            ${this.allAnswer.map((el)=>  `<li>${el}</li>`).join('')}
          </ul>
          <h2 class="text-capitalize text-center score-color h3 fw-bold">
            <i class="bi bi-emoji-laughing"></i> 
            Score : ${currentQuiz.score}
          </h2>        
        </div>
      `;
      questionsContainer.innerHTML = questionMarkUp;

      const allChoices = document.querySelectorAll('.choices li');
      allChoices.forEach((el)=>el.addEventListener('click' ,(e)=> this.checkAnswer(e) ))

    }
    checkAnswer(e){
        if(this.correct == e.target.innerHTML ){
            e.target.classList.add('correct' , 'animate__animated' , 'animate__animatedflipInY')
        }
        else{            
            e.target.classList.add('wrong' , 'animate_animated' , 'animate_shakeX')
    }
    }
}