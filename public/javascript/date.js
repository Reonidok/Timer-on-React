function date(){
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth()+1;
    var day = now.getDay();

    if(month.toString().length == 1){
        month = '0' + month;
    }
    if(day.toString().length == 1){
        day = '0' + day;
    }
    var DateTime = year + '/' + month + '/' + day;
    return DateTime;
}

setInterval(function(){
   currentTime = date();
   document.getElementById('date-clock').innerHTML = currentTime;     
}, 1000)