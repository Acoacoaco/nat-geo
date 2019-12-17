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
let result = 0;

const questionsArray = [
    ['AIRBORNE', 'Which one of the listed animals is unable to fly?', 'Robin', 'Vampire Bat', 'Flying Monkey', 'Mosquito'], 
    ['HISTORY', 'Pick the animal that have gone extinct in last 100 years.', 'Dodo', 'Sprat', 'Aedes albopictus', 'Siberian Cat'], 
    ['AQUATIC', 'Which one one of the listed aquatic animals is a real-life animal?', 'Sea Camel', 'Nemo', 'Harlech', 'Crab'], 
    ['SCIENCE', 'How many new animal and plant species were discovered in 2019?', '131', '71', '0', '11'],
    ['SCORE', 'Your score:']
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
            document.getElementById('score').innerHTML = result + ' points!';
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
                ++result;
            }else {
                document.getElementById('message').innerHTML = 'WRONG !';
                document.getElementById('message').style.color = 'red';
            }
            break;
        case 2:
            if(document.getElementById('input-a').checked) {
                document.getElementById('message').innerHTML = 'RIGHT !';
                document.getElementById('message').style.color = 'green';
                ++result;
            }else {
                document.getElementById('message').innerHTML = 'WRONG !';
                document.getElementById('message').style.color = 'red';
            }
            break;
        case 3:
            if(document.getElementById('input-d').checked) {
                document.getElementById('message').innerHTML = 'RIGHT !';
                document.getElementById('message').style.color = 'green';
                ++result;
            }else {
                document.getElementById('message').innerHTML = 'WRONG !';
                document.getElementById('message').style.color = 'red';
            }
            break;
        case 4:
            if(document.getElementById('input-b').checked) {
                document.getElementById('message').innerHTML = 'RIGHT !';
                document.getElementById('message').style.color = 'green';
                ++result;
            }else {
                document.getElementById('message').innerHTML = 'WRONG !';
                document.getElementById('message').style.color = 'red';
            }
            break;
        case 5:
            break;
    }
}