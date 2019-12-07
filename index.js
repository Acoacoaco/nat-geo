var seconds = 12;
setInterval(function() {
    --seconds;
    document.getElementById("countdown").textContent = seconds + ' s';
    if (seconds <= 0) {
        seconds = 12;
    };
}, 1000);
