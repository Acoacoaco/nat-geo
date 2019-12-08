function timeFormat(timeInSeconds) {
    var pad = function(num, size) { 
        return ('000' + num).slice(size * -1); 
    },
    minutes = Math.floor(timeInSeconds / 60) % 60,
    seconds = Math.floor(timeInSeconds - minutes * 60);
 
    return pad(minutes, 2) + ':' + pad(seconds, 2);
}

var seconds = 12;
setInterval(function() {
    --seconds;
    document.getElementById("countdown").textContent = timeFormat(seconds);
    if (seconds <= 0) {
        seconds = 12;
    };
}, 1000);


const btnX = document.getElementById('x-btn');
const counterPopUp = document.getElementById('counterPopUp');

function closeCounter() {
    counterPopUp.hidden = true;
}

btnX.addEventListener('click',closeCounter);