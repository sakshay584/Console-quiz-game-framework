/*var Person = function(name, yearOfBirth, job) {
    this.name= name;
    this.yearOfBirth= yearOfBirth;
    this.job= job;   
    
}
Person.prototype.calculateAge = function (){
        console.log(2019-this.yearOfBirth);
    }

var john = new Person('John', 1990, 'teacher');

john.calculateAge();

var personProto = {
    calculateAge: function (){
        console.log(2019-this.yearOfBirth);
    }
    
    
};

var john = Object.create(personProto);
john.name='john';
john.yearOfBirth=1990;
john.job='teacher';

var jane = Object.create(personProto, {
    name: {value:'Jane'},
    yearOfBirth: {value:1969},
    job:{value: 'designer'}
});*/


var myScore = 0;
var qNumber = -1;

var Ques = function (qText,ans,correctAnswer){
    
    //var qText = 'Blank question';
    this.ans = new Array();
    this.ans = ans;
    this.correctAnswer =correctAnswer;
    
    //  to print question and options
    var printQuestion = function (){
        console.log(qNumber + qText + '\n');
        for (var i =0; i<ans.length; i++){
            console.log(i + ans[i] + '\n');
        }
        
    }
    
    var checkAnswer = function(opt){
        if (opt == correctAnswer){
            console.log('Right answer');
        } else {
            
            console.log('Wrong answer');
        }
    }
    
    
}




var questions = new Array();
  //  questions = new Ques();
 questions[0]= new Ques();
 questions[1]= new Ques();
questions[0].qText = 'What is your name?';
questions[0].ans = ['Akshay', 'Vinayak'];
questions[0].correctAnswer = 0;

questions[1].qText = 'What is your branch?';
questions[1].ans = ['Mechanical', 'Computer Science'];
questions[1].correctAnswer = 0;





// question selection
var selectNumber = function(){
    
  return  Math.random()*question.length - 1;
}


var flashQ = function (questions){
    // to display the question
    this.qNumber = selectNumber(); 
    this.questions[qNumber].printQuestion();
    
}

// User types their answer
var optionSelected = prompt('Enter your answer here');

// checking answer
questions[qNumber].checkAnswer(optionSelected);



























