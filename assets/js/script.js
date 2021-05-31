var dateToday = moment().format("dddd, MMMM Do");
var currentTime = moment().format("H")
var scheduleArray = ["","","","","","","","","","","","","","","","","",""];
$("#currentDay").text(dateToday);

for (i=9; i<=17; i++) {
    // one row
    $("<div/>", {
        id: i,
        "class": "row time-block",
    }).appendTo(".container");
    // time column
    $("<div/>", {
        "class": "col-1 hour",
        text: moment(i, "H").format("hA")
    }).appendTo("#"+i);
    // color code event column
    if (i<currentTime) {
        $("<div/>", {
            //id: "event"+i,
            "class": "col-10 past"
        }).appendTo("#"+i);
    } else if (i>currentTime) {
        $("<div/>", {
            //id: "event"+i,
            "class": "col-10 future" 
        }).appendTo("#"+i);
    } else {
        $("<div/>", {
            //id: "event"+i,
            "class": "col-10 present"
        }).appendTo("#"+i);
    }
 //   $("<input/>", {
 //       "type": "text"
 //   }).appendTo("#event"+i)
    // save button
    $("<div/>", {
        id: "save"+i,
        "class": "col-1 saveBtn"
    }).appendTo("#"+i);
    $("<i/>", {
        "class": "fas fa-save"
    }).appendTo("#save"+i);
}

