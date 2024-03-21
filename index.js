// EDITABLE NOTES //
window.onload = function() {
  if (localStorage.getItem('content')) {
    document.querySelector('.content').innerHTML = localStorage.getItem('content');
  }
}

let edit = document.querySelector('#edit');
let content = document.querySelector('.content');

edit.addEventListener('click', () => {
  content.contentEditable = !content.isContentEditable;

  if (content.contentEditable === 'false') {
    localStorage.setItem('content', content.innerHTML);
    document.getElementById('check-png').src = './edit-1.png';   

  } else if (content.contentEditable === 'true') {
    document.getElementById('check-png').src = './check-1.png';

  }
  // document.getElementById('check-png').style.height = '70px';
});
// SEARCH //
const q = document.getElementById('query');
const google = 'https://www.google.com/search?q=';

// change to im feeling lucky search
const ifl = 'http://www.google.com/search?ie=UTF-8&oe=UTF-8&sourceid=navclient&gfns=1&q=';

function submitted(event) {
  event.preventDefault();
  const url = ifl + '+' + q.value;
  location.href = url;
}
document.getElementById('form').addEventListener('submit', submitted);

// DATE //
const months = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];  
const days = [
  "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
]  

const d = new Date();
const day = days[d.getDay()];
const fullDate = day + " " + d.getDate() + " " + months[d.getMonth()] + ", " + d.getFullYear();
document.getElementById('date').innerHTML = fullDate;

// CLOCK //
function showTime() {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  // var s = date.getSeconds();

  // convert to 12 hour clock
  var session = "AM";
  if (h == 0) {
    h = 12;
  }
  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  // places 0 infront of number if below 10 (to keep it neat)
  m = (m < 10) ? "0" + m : m;
  // chose to not place 0 infront of number
  // h = (h < 12) ? "0" + h : h;
  // s = (s < 10) ? "0" + s : s;

  // var time = h + ":" + m + ":" + s + " " + session;
  var time = h + ":" + m;
  document.getElementById("clock").innerText = time;
  document.getElementById("clock").textContent = time;
  setTimeout(showTime, 1000);
}
showTime();

// COUNTDOWN

// call function when button is pressed
document.getElementById("countdown").addEventListener("click", countdown);

// variables:
let i = 0;

function countdown() {
  // Set date
  const currentDate = new Date();
  // future date to count down to:
  const countdownDate = new Date('April 13, 2024 00:00:00');
  
  // calulate difference and the different units (set to 1 decimal place)
  const countMS = countdownDate - currentDate
  const countS = Number((countMS/1000).toFixed(1));
  const countM = Number((countMS/60000).toFixed(1));
  const countH = Number((countMS/3600000).toFixed(1));
  const countD = Number((countMS/86400000).toFixed(1));

  // create array to hold the values
  const count = [(countS + ' sec'), (countM + ' min'), (countH + ' h'), (countD + ' days')]

  // show the value selected
  document.getElementById('countdown').innerHTML = count[i]

  // change the value each time button is pressed
  i += 1
  if (i > 3) {
    i = 0
  }
}

// BADMINTON REMINDER //

// variables:
var remindTxt = "No badminton tonight"

// check what day it is, and if right day then set variable (remindTxt) to the badminton reminder
if (day === "Monday") {
  remindTxt = "🏸Badminton tonight at 5:30pm🏸"
} else if (day === "Tuesday") {
  remindTxt = "🏸Badminton tonight at 4:00pm🏸"
} else if (day === "Wednesday") {
  remindTxt = "🏸Badminton tonight at 3:30pm & 7:00pm🏸"
} else if (day === "Friday") {
  remindTxt = "🏸Badminton tonight at 3:30pm🏸"
}

// display the reminder text
document.getElementById('remind').innerHTML = remindTxt;

// TIMETABLE //

// variables:
var calenderTxt = " ";
// array of classes
const timetable = [
  "ENC (W5)", // 0 - first monday
  "PHY (D4)", // 1 - first tuesday
  "MSM (A10)", // 2 - first wednesday
  "MAC (A5)", // 3 - last wednesday
  "DTP (C6)", // 4 - first thursday
  "DVC (C2)", // 5 - first friday
  "LINC (D2)" // 6 
]

const periodTimes = [
  "8:45 - 10:25 <b>: ",
  "</b> <br>10:55 - 12:00 <b>: ",
  "</b><br>12:00 - 1:00 <b>: ",
  "</b><br>1:45 - 2:45 <b>: ",
]

// check which day it is, and set calenderTxt to right timetable
if (day === "Monday") {
  calenderTxt = periodTimes[0] + timetable[0] + periodTimes[1] + timetable[2] + periodTimes[2] + timetable[3] + periodTimes[3] + "DTP (L) </b>";
} else if (day === "Tuesday") {
	calenderTxt = periodTimes[0] + timetable[1] + periodTimes[1] + timetable[5] + periodTimes[2] + timetable[4] + periodTimes[3] + timetable[0] + "</b>";
} else if (day === "Wednesday") {
	calenderTxt = periodTimes[0] + timetable[2] + "</b> <br>10:55 - 11:55 <b>: " + timetable[6] + "</b><br>11:55 - 12:45 <b>: " + timetable[3] + "</b><br>1:25 - 2:15 <b>: " + timetable[3] + "</b>";
} else if (day === "Thursday") {
	calenderTxt = periodTimes[0] + timetable[4] + periodTimes[1] + timetable[1] + periodTimes[2] + timetable[0] + periodTimes[3] + timetable[5] + "</b>";
} else if (day === "Friday") {
	calenderTxt = periodTimes[0] + timetable[5] + "</b> <br>10:20 - 10:45 <b>: " + timetable[6] + "</b><br>11:15 - 12:15 <b>: " + timetable[3] + "</b><br>12:15 - 1:10 <b>: HOS (T4)</b><br>1:50 - 2:45 <b>: " + timetable[1] + "</b>";
} else {
	calenderTxt = "NO<br>SCHOOL<br>TODAY<br><br>YAY!"
}

// display the timetable
document.getElementById('calenderTxt').innerHTML = calenderTxt;
