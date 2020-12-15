// la date d'aujourd'hui
let todayDate = document.getElementById('timestamp');
let date1 = Date ();
todayDate.innerHTML = ("la date d'aujourd'hui est :" + date1);

//la date avec local date
let date2 = document.getElementById("localDate");
let today = new Date();
date2.innerHTML = today.toLocaleDateString();

// la date avec local time
let todayTime = document.getElementById("localTime");
let newDate = new Date();
todayTime.innerHTML = newDate.toLocaleTimeString();


// création d'une nouvelle date
let time = document.getElementById("new date");
let aujourdhui = new Date ();
let dimanche = new Date ();
dimanche.setDate(aujourdhui.getDate()+2);
dimanche.setHours(aujourdhui.getHours()+6);
console.log(dimanche);
console.log(aujourdhui);

// comparons les dates pour voir s'ils sont bien différents
if(aujourdhui.getTime()===dimanche.getTime()) {
    time.innerHTML = "aujourd'hui est strictement égal à dimanche ! </br>";
}
else if(dimanche.getTime() !== aujourdhui.getTime()) {
    time.innerHTML = " dimanche et aujourd'hui sont différents !</br>";
}