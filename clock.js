setInterval(() => {

    var s = new Date();

    var hrs = s.getHours();
    var min = s.getMinutes();
    var sec = s.getSeconds();
    var day = s.getDay();
    var date = s.getDate();
    var month = s.getMonth();
    var year = s.getFullYear();

    var months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC']

    var days = ['SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY']

    document.getElementById('Hrs').innerHTML=hrs
    document.getElementById('Mins').innerHTML=min
    document.getElementById('Sec').innerHTML=sec

    if (hrs >=12) {

        document.getElementById('AM/PM').innerHTML = "PM"
    }
    else {

        document.getElementById('AM/PM').innerHTML = "AM"
    }



    document.getElementById('Day').innerHTML=days[day]
    document.getElementById('Date').innerHTML=date
    document.getElementById('Month').innerHTML=months[month]
    document.getElementById('Year').innerHTML=year
  

}, 1000)