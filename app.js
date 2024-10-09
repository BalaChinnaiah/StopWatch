let milliSeconds=0, seconds = 0, minutes =0, hours = 0;

let timeShow = document.getElementById("timeshow");

let timeRef;

let running = false;

document.getElementById('start').onclick = function() {
    if (!running) {  // Start only if it's not running
        timeRef = setInterval(updateTime, 10);
        running = true;
    }
}
function updateTime()
{
    milliSeconds = milliSeconds+10;

    if(milliSeconds==1000)
    {
        seconds = seconds+1;
        milliSeconds = 0;
        if(seconds==60)
        {
            minutes = minutes+1;
            seconds = 0;
            if(minutes==60)
            {
                hours = hours+1;
                minutes=0;
            }
        }
    }

    let h,m,s,ms;

    if(hours<10){
        h = '0'+hours;
    }

    else{
        h = hours;
    }

    if(minutes<10){
        m = '0'+minutes;
    }
    else{
        m = minutes;
    }

    if(seconds<10){
        s = '0'+seconds;
    }
    else{
        s = seconds;
    }

    if(milliSeconds<10){
        ms = '0'+milliSeconds;
    }
    else if(milliSeconds<100){
        ms= '00'+milliSeconds;
    }
    else{
        ms= milliSeconds;
    }

    timeShow.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}

document.getElementById("pause").onclick = function(){
    clearInterval(timeRef);
    running = false;
}

document.getElementById("reset").onclick = function(){
    milliSeconds = 0;
    seconds =0;
    minutes =0;
    hours =0;
    timeShow.innerHTML =" 00 : 00 : 00 : 000";
}