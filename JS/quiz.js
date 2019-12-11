// variables

let question = document.getElementById('question');
const category = document.getElementById('category');
const answerA = document.getElementById('answer-a');
const answerB = document.getElementById('answer-b');
const answerC = document.getElementById('answer-c');
const answerD = document.getElementById('answer-d');
let nextBtn = document.getElementById('nextQuestion');
const checkAnswerBtn = document.getElementById('checkAnswerBtn');

const questionsArray = [
    ['AIRBORNE ANIMALS', 'Jak masz na imię?', 'Michał', 'Olek', 'Kuba', 'Łukasz'], 
    ['HISTORY', 'Jak się dziś masz?', 'Super', 'Spoko', 'Nijak', 'Chujowo'], 
    ['AQUATIC ANIMALS', 'Ile masz lat?', 'za dużo', 'Sto lat, sto lat, ...!', '21', 'za mało'], 
    ['SCIENCE', 'Jak długo śpisz?', '12 minut', '10 godzin', '7 godzin'],
    ['SCORE', 'Your score is:', 'a', 'b', 'c', 'd']
];
let questionNum = 0;

function nextQuestion(){
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
//     if (questionNum == 4) {
        
//     } else if (questionNum == 5) {
        
//         answerA.hidden = true;

//     }
// }

function answerCheck() {
    alert('Here you will see if the answer is right or wrong!');
}
