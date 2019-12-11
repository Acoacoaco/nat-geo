let question = document.getElementById('question');
const answerA = document.getElementById('answer-a');
const answerB = document.getElementById('answer-b');
const answerC = document.getElementById('answer-c');
const answerD = document.getElementById('answer-d');
const submitAnswers = document.getElementById('submit-answers');

const questionsArray = [
    ['Jak masz na imię?', 'Michał', 'Olek', 'Kuba', 'Łukasz'], 
    ['Jak się dziś masz?', 'Super', 'Spoko', 'Nijak', 'Chujowo'], 
    ['Ile masz lat?', 'za dużo', 'Sto lat, sto lat, ...!', '21', 'za mało'], 
    ['Jak długo śpisz?', '12 minut', '10 godzin', '7 godzin'],
    ['Twój wynik to:', '', '', '', '']
];
let questionNum = 0;

function nextQuestion(){
    question.innerHTML = questionsArray[questionNum][0];
    answerA.innerHTML = questionsArray[questionNum][1];
    answerB.innerHTML = questionsArray[questionNum][2];
    answerC.innerHTML = questionsArray[questionNum][3];
    answerD.innerHTML = questionsArray[questionNum][4];
    ++questionNum;
}
