function myclock() {
    var date = new Date(); // Get the current date/time
    var hour = date.getHours(); // Save hours
    var min = date.getMinutes(); // Save minutes
    var sec = date.getSeconds(); // Save seconds
    formathour = format(hour); // Format hours
    formatmin = format(min); // Format minutes
    formatsec = format(sec); // Format seconds
    timeout = setTimeout(myclock, 1000);
}

function format(x) {
    if (x < 10) x = "0" + x;
    return x;
}

var c;

$("#clockb").click(function() {
    var started = $(this).data('started');
    $(this).data('started', !started);
    if (!started) {
        c = setInterval(setTheTime, 1000);
        $(this).data('started', true).prop('value', 'Stop Clock');
    }
    else {
        $(this).data('started', false).prop('value', 'Start Clock');
        clearInterval(c);
    }
});

function setTheTime() {
    myclock();
    var curTime = formathour + ":" + formatmin + ":" + formatsec // Current time formatted
    $("#clocktext").text( curTime);
}