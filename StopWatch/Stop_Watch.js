let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

let cron;

function star() 
{
  if(confirm("Do you want to start the timer")==true)
  {
  cron = setInterval(() => { timer(); }, 10);
  alert("Timer will start now");
  }
  else
  {
    alert("Requet taken not to start timer");

  }
  
}

function pa() 
{
  if(confirm("Do you want to pause")==true)
  {
  clearInterval(cron);
  alert("Stop Watch is Being Paused");
  }
  else
  {
    alert("You choosed not to pause");

  }
}

function re()
{
  if(confirm("Do you want to reset the timer")==true)
  {
  document.getElementById('hour').innerText = '00';
  document.getElementById('minute').innerText = '00';
  document.getElementById('second').innerText = '00';
  document.getElementById('millisecond').innerText = '000';
  }
  else
  {
   alert("Timer will not be reset");
  }
}

function timer() {
  if ((millisecond += 10) == 1000) {
    millisecond = 0;
    second++;
  }
  if (second == 60) {
    second = 0;
    minute++;
  }
  if (minute == 60) {
    minute = 0;
    hour++;
  }
  document.getElementById('hour').innerText = returnData(hour);
  document.getElementById('minute').innerText = returnData(minute);
  document.getElementById('second').innerText = returnData(second);
  document.getElementById('millisecond').innerText = returnData(millisecond);
}

function returnData(input) {
  return input >= 10 ? input : `0${input}`
}