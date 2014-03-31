var milliSecondsInRegularDay = 24 * 60 * 60 * 1000;

function getSpecialTime(normalMilliSecondsPerSpecialTime) {
    var now = new Date(),
        midnight = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        0, 0, 0),
        milliSecondsSinceMidnight = now.getTime() - midnight.getTime();
    return Math.floor(milliSecondsSinceMidnight / normalMilliSecondsPerSpecialTime);
}

function getCustomizedHour(hoursInDay) {
    return getSpecialTime(milliSecondsInRegularDay / hoursInDay) % hoursInDay;
}

function getCustomizedMinute(hoursInDay, minutesInHour) {
    return getSpecialTime(milliSecondsInRegularDay / (hoursInDay * minutesInHour)) % (minutesInHour);
}

function getCustomizedSecond(hoursInDay, minutesInHour, secondsInMinute) {
    return getSpecialTime(milliSecondsInRegularDay / (hoursInDay * minutesInHour * secondsInMinute)) % (secondsInMinute);
}

function padZero(number) {
    if (number < 10) {
        return "0" + number;
    }
    return number;
}
function getCustomizedTimeList(hoursInDay, minutesInHour, secondsInMinute) {
    var customizedSecond = padZero(getCustomizedSecond(hoursInDay, minutesInHour, secondsInMinute));
    var customizedMinute = padZero(getCustomizedMinute(hoursInDay, minutesInHour));
    var customizedHour = padZero(getCustomizedHour(hoursInDay));
    return [customizedHour, customizedMinute, customizedSecond];
}

$(document).ready(function () {
    setInterval(function () {
        var hoursInDay = $("#hourInput").val();
        var minutesInHour = $("#minuteInput").val();
        var secondsInMinute = $("#secondInput").val();
        var timeList = getCustomizedTimeList(hoursInDay, minutesInHour, secondsInMinute);
        $("#hour").html(timeList[0]);
        $("#minute").html(timeList[1]);
        $("#second").html(timeList[2]);
    }, 100);
    
});