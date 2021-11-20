//document.querySelector("#currentDay");
var todayDate = moment().format("dddd MMMM, Do");
$("#currentDay").text(todayDate);