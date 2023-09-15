function displayTime(){
    var dateTime = new Date();
    var hours = dateTime.getHours();
    var minuts = dateTime.getMinutes();
    var seconds = dateTime.getSeconds();
    var sessions = document.getElementById('season');

    if(hours >= 12){
        sessions.innerHTML = 'PM';
    }else{
        sessions.innerHTML = 'AM';
    }

    if(hours > 12){
        hours = hours - 12;
    }

    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minuts;
    document.getElementById('seconds').innerHTML = seconds;

}
setInterval(displayTime);