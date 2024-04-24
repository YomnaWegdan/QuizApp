import { questions } from "./index.js"

export default class Question{
    constructor(index){ //indexof question
        //question , correct answer , wrong answer
        this.question = questions[index].question  //questions from index.js that contain data of api , .question from data of api
        this.correct = questions[index].correct_answer
        this.wrong =  questions[index]
    }
}