var dateToday = moment().format("dddd, MMMM Do");
var currentTime = moment().format("H")
var scheduleArray = ["","","","","","","","","","","","","","","","","",""];
$("#currentDay").text(dateToday);

for (i=9; i<=17; i++) {
    $("<div/>", {
        id: i,
        "class": "row",
        "class": "time-block"
    }).appendTo(".container");
    $("<div/", {
        "class": "col-1",
        "class": "hour",
        text: i
    }).appendTo("#"+i);
    $("<div/", {
        "class": "col-10"
    }).appendTo("#"+i);
    $("<div/", {
        "class": "col-1",
        "class": "saveBtn"
    }).appendTo("#"+i);

}