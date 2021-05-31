var dateToday = moment().format("dddd, MMMM Do");
var currentTime = moment().format("H")
var scheduleArray = ["","","","","","","","","","","","","","","","","",""];
$("#currentDay").text(dateToday);

for (i=9; i<=17; i++) {
    // one row
    $("<div/>", {
        id: "row"+i,
        "class": "row time-block",
    }).appendTo(".container");
    // time column
    $("<div/>", {
        "class": "col-1 hour",
        text: moment(i, "H").format("hA")
    }).appendTo("#row"+i);
    // color code event column
    if (i<currentTime) {
        $("<div/>", {
            id: "event"+i,
            "class": "col-10 past"
        }).appendTo("#row"+i);
    } else if (i>currentTime) {
        $("<div/>", {
            id: "event"+i,
            "class": "col-10 future" 
        }).appendTo("#row"+i);
    } else {
        $("<div/>", {
            id: "event"+i,
            "class": "col-10 present"
        }).appendTo("#row"+i);
    }
    $("<input/>", {
        id: i,
        "type": "text"
    }).appendTo("#event"+i)
    // save button
    $("<div/>", {
        id: "save"+i,
        "class": "col-1 saveBtn"
    }).appendTo("#row"+i);
    $("<i/>", {
        "class": "fas fa-save"
    }).appendTo("#save"+i);
}
$("i").click(saveArray);
// check localStorage
if (localStorage.getItem("scheduleArray")) {
    scheduleArray = JSON.parse(localStorage.getItem("scheduleArray"));
    for (i=9; i<=17; i++) {
        $("#"+i).val(scheduleArray[i]);
    }
}

function saveArray () {
    for (i=9; i<=17; i++) {
        scheduleArray[i] = $("#"+i).val()
    }
    localStorage.setItem("scheduleArray", JSON.stringify(scheduleArray));
};


