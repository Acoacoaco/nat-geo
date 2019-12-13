// variables

let question = document.getElementById('question');
const category = document.getElementById('category');
const answerA = document.getElementById('answer-a');
const answerB = document.getElementById('answer-b');
const answerC = document.getElementById('answer-c');
const answerD = document.getElementById('answer-d');
let nextBtn = document.getElementById('nextQuestion');
const checkAnswerBtn = document.getElementById('checkAnswerBtn');
let checkedAnswer = document.getElementById('checkedAnswer');

const questionsArray = [
    ['AIRBORNE', 'Jak masz na imię?', 'Michał', 'Olek', 'Kuba', 'Łukasz'], 
    ['HISTORY', 'Jak się dziś masz?', 'Super', 'Spoko', 'Nijak', 'Chujowo'], 
    ['AQUATIC', 'Ile masz lat?', 'za dużo', 'Sto lat, sto lat, ...!', '21', 'za mało'], 
    ['SCIENCE', 'Jak długo śpisz?', '12 minut', '10 godzin', '7 godzin', 'nic'],
    ['SCORE', 'Your score is:', 'a', 'b', 'c', 'd']
];
let questionNum = 0;

checkedAnswer.hidden = true;

function nextQuestion(){
    checkedAnswer.hidden = true;
    nextBtn.innerHTML = "Next question";
    category.innerHTML = questionsArray[questionNum][0];
    question.innerHTML = questionsArray[questionNum][1];
    answerA.innerHTML = questionsArray[questionNum][2];
    answerB.innerHTML = questionsArray[questionNum][3];
    answerC.innerHTML = questionsArray[questionNum][4];
    answerD.innerHTML = questionsArray[questionNum][5];
    ++questionNum;
    switch (questionNum) {
        case 4:
            nextBtn.innerHTML = "Get your score";
            break;
        case 5:
            nextBtn.hidden = true;
            checkAnswerBtn.hidden = true;
            document.getElementById('answers').hidden = true;
            break;
    }
}

function answerCheck() {
    checkedAnswer.hidden = false;
    switch (questionNum) {
        case 1:
            if(document.getElementById('input-c').checked) {
                document.getElementById('message').innerHTML = 'RIGHT !';
                document.getElementById('message').style.color = 'green';
            }else {
                document.getElementById('message').innerHTML = 'WRONG !';
                document.getElementById('message').style.color = 'red';
            }
            break;
        case 2:
            if(document.getElementById('input-a').checked) {
                document.getElementById('message').innerHTML = 'RIGHT !';
                document.getElementById('message').style.color = 'green';
            }else {
                document.getElementById('message').innerHTML = 'WRONG !';
                document.getElementById('message').style.color = 'red';
            }
            break;
        case 3:
            if(document.getElementById('input-d').checked) {
                document.getElementById('message').innerHTML = 'RIGHT !';
                document.getElementById('message').style.color = 'green';
            }else {
                document.getElementById('message').innerHTML = 'WRONG !';
                document.getElementById('message').style.color = 'red';
            }
            break;
        case 4:
            if(document.getElementById('input-b').checked) {
                document.getElementById('message').innerHTML = 'RIGHT !';
                document.getElementById('message').style.color = 'green';
            }else {
                document.getElementById('message').innerHTML = 'WRONG !';
                document.getElementById('message').style.color = 'red';
            }
            break;
        case 5:
            break;
    }
}
