//document.querySelector("#currentDay");
var todayDate = moment().format("dddd MMMM, Do");
$("#currentDay").text(todayDate);

//set current hour to be an integer
var dueTime =function(){
    let presentHour = parseInt(moment().format('H'))
  
    // var time = $(".hour")
for (let i = 0; i < 9; i++){

    if (i + 9 < presentHour) {
        $('.hour').eq(i).addClass("bg-danger text-white")
    }
    
    else if (i + 9 === presentHour){
        $('.hour').eq(i).addClass("bg-warning text-dark")
    }
    else {
        $('.hour').eq(i).addClass("bg-success text-white")
    } 
   
}

}
dueTime();

var saveData = function(){
    
    var el = $(this)
    console.log(el);
    var keyVal = el.siblings(".hour").attr("id")
    var textVal = el.siblings(".hourtext").val()
    localStorage.setItem(keyVal,textVal);
}



$(".saveBtn").on("click", saveData)
