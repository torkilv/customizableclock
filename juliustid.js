var milliSecondsInRegularDay = 24 * 60 * 60 * 1000;

function getSpecialTime(normalMilliSecondsPerSpecialTime) {
    var now = new Date(),
        then = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        0, 0, 0),
        milliSecondsSinceMidnight = now.getTime() - then.getTime();
    return Math.floor(milliSecondsSinceMidnight / normalMilliSecondsPerSpecialTime);
}

function getJuliusHour(hoursInDay) {
    return getSpecialTime(milliSecondsInRegularDay / hoursInDay) % hoursInDay;
}

function getJuliusMinute(hoursInDay, minutesInHour) {
    return getSpecialTime(milliSecondsInRegularDay / (hoursInDay * minutesInHour)) % (minutesInHour);
}

function getJuliusSecond(hoursInDay, minutesInHour, secondsInMinute) {
    return getSpecialTime(milliSecondsInRegularDay / (hoursInDay * minutesInHour * secondsInMinute)) % (secondsInMinute);
}

function padZero(number) {
    if (number < 10) {
        return "0" + number;
    }
    return number;
}
function getJuliusTimeList(hoursInDay, minutesInHour, secondsInMinute) {
    var juliusSecond = padZero(getJuliusSecond(hoursInDay, minutesInHour, secondsInMinute));
    var juliusMinute = padZero(getJuliusMinute(hoursInDay, minutesInHour));
    var juliusHour = padZero(getJuliusHour(hoursInDay));
    return [juliusHour, juliusMinute, juliusSecond];
}

$(document).ready(function () {
    setInterval(function () {
        var timeList = getJuliusTimeList(20, 100, 100);
        $("#Clock2").val(timeList[0] + timeList[1] + timeList[2]);
        $("#klokke").html(timeList[0] + "." + timeList[1] + "." + timeList[2]);
        $("#time").html(timeList[0]);
        $("#minutt").html(timeList[1]);
        $("#sekund").html(timeList[2]);
        
    }, 432);
    
});