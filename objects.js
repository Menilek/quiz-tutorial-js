//QUIZ - contains topics with a collection of questions and answers
/* class Quiz{
    constructor(quiz){
        this.quiz = quiz;
    }
} */
//Quizzes can be contained in an array and ordered by topic

//QUESTION - has a title, a topic, a type and answers
//type can be .multiple choice(checkbox) or .single choice(radio button)
//answers will either be single or multiple based on question type
//questions have an id
/*Question class should be renamed to Quiz*/
class Question{
    constructor(title, topic, type, answers){
        this.title = title;
        this.topic = topic;
        this.type = type;
        this.answers = answers;
    }
    //based on type of question selected return selected Q
    addNewQuestion(title, topic, type, answers){
        
        document.getElementsByClassName(".question-title").innerHTML = 
            `<div class="quiz-question">
                <h3>${this.title}</h3>
            </div>`
        
        if( (".question-type") == (".one-answer") )
        { 
            document.getElementsByClassName(".quiz-questions").innerHTML = 
                `<p>
                <label for="${this.title}-radio">
                    <input type="radio" class="with-gap" id="${this.title}-radio" name="${this.title}-radio">
                    <span>${this.answer}</span>
                </label>
                </p>`
        }
        else if( (".question-type") == (".multiple-choice") )
        {
            document.getElementsByClassName(".quiz-questions").innerHTML = 
                `</p>
                <label for="${this.title}-checkbox">
                    <input type="checkbox" class="filled-in" id="${this.title}-checkbox" name="${this.title}-checkbox">
                    <span>${this.answer}</span>
                </label>
                </p>`
        }
        return new Question(title, topic, type, answers);
    }
}

//PLAYER - has a name and a score
//name is collected when player visits page
//updateScore proto method increments score for each correct answer
class Player{
    constructor(name, score){
        this.name = name;
        this.score = score;
    }
    showPlayername(){
        document.getElementsByClassName(".player-details").innerHTML = 
        `<div class="player-details">
            <h6>Player name: ${this.name}</h6>
        </div>`
    }
}

//LEADERBOARD - has players and scores