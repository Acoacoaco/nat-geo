function sec2time(timeInSeconds) {
    var pad = function(num, size) { return ('000' + num).slice(size * -1); },
    time = parseFloat(timeInSeconds).toFixed(3),
    minutes = Math.floor(time / 60) % 60,
    seconds = Math.floor(time - minutes * 60);
 
    return pad(minutes, 2) + ':' + pad(seconds, 2);
}

var seconds = 1201;
setInterval(function() {
    --seconds;
    document.getElementById("countdown").textContent = sec2time(seconds);
    if (seconds <= 0) {
        seconds = 1201;
    };
}, 1000);




