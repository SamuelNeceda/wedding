function updateTimer() {
    var future  = Date.parse("August 2, 2025 15:30:00");
    var now     = new Date();
    var diff    = future - now;
  
    var days  = Math.floor( diff / (1000*60*60*24) );
    var hours = Math.floor( diff / (1000*60*60) );
    var mins  = Math.floor( diff / (1000*60) );
    var secs  = Math.floor( diff / 1000 );
  
    var d = days;
    var h = hours - days  * 24;
    var m = mins  - hours * 60;
    var s = secs  - mins  * 60;
  
    document.getElementById("days").innerHTML = d;
    document.getElementById("hours").innerHTML = h;
    document.getElementById("mins").innerHTML = m;
    document.getElementById("secs").innerHTML = s;
}

setInterval(updateTimer, 1000 );  