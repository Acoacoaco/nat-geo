var seconds = 121;
var countdown = setInterval(function() {
    seconds--;
    var minutes;
    document.getElementById("countdown").textContent = seconds + ' s';
    if (seconds <= 0) clearInterval(countdown);
}, 1000);
