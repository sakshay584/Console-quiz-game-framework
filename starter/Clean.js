var question = function ( text, ans, rightAns){
    
     this.text = text;
    this.ans = ans;
    this.rightAns = rightAns;
}
/*
var q1 = new question( 'What is your name?', ['yes', 'no'], 0);

var q2 = new question('what is your branch', ['Mechanical', 'Computer Science'], 1);

var q3 = new question('Is modi a good ruler', ['yes', 'no', 'maybe'], 2); */

var q= new Array();
q[0]= new question('What is your name?', ['Akshay', 'Vinayak'], 0);
q[1]= new question('What is your branch?', ['Mechanical', 'Computer Science'], 1);
q[2]= new question('Are you a virgin?', ['Yes', 'No', 'May be'], 2);

function showQuestion(){
    var number = Math.floor(Math.random()*q.length) ;
    //console.log(number + '\n' +q.length);
    console.log(number + '. ' + q[number].text);
    for(var i=0; i<q[number].ans.length; i++){
        console.log(i + '. ' + q[number].ans[i]);
    }
    return q[number].rightAns;
}


checkAnswer();


function checkAnswer (){
    var rightAns = showQuestion();
    var userAns = prompt('Type your answer');
    if(userAns==rightAns) console.log('Correct');
    else console.log('Incorrect');
}



