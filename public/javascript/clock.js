function getdatetime(){
    var now = new Date();
    var hour = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    if(hour.toString().length == 1){
        hour = '0' + hour;
    }
    if(minutes.toString().length == 1){
        minutes = '0' + minutes;
    }
    if(seconds.toString().length == 1){
        seconds = '0' + seconds;
    }

    var dateTime = hour+':'+minutes+':'+seconds;
    return dateTime;
}
setInterval(function(){
    currentTime = getdatetime();
    document.getElementById("digital-clock").innerHTML = currentTime;
}, 1000)