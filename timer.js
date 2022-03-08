function countdown() {
    var godzina = new Date();
    var hour = godzina.getHours();
    if (hour < 10) hour = "0" + hour;
    var minute = godzina.getMinutes();
    if (minute < 10) minute = "0" + minute;
    var second = godzina.getSeconds();
    if (second < 10) second = "0" + second;
    var day = godzina.getDay();
    if (day == 0) {
        day = "niedziela";
    }
    if (day == 1) {
        day = "poniedzialek";
    }
    if (day == 2) {
        day = "wtorek";
    }
    if (day == 3) {
        day = "sroda";
    }
    if (day == 4) {
        day = "czwartek";
    }
    if (day == 5) {
        day = "piatek";
    }
    if (day == 6) {
        day = "sobota";
    }

    document.getElementById("czas").innerHTML = day + "" + "|" + "" + hour + ":" + minute + ":" + second;

    setTimeout("countdown()", 1000);
}