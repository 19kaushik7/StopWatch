const playBtn = document.querySelector('#play');
const pauseBtn = document.querySelector('#pause');
const restartBtn = document.querySelector('#restart');
const secEl = document.querySelector('#sec');
const minEl = document.querySelector('#min');
const countEl = document.querySelector('#count');
let sec = 0;
let min = 0;
let count = 0;
let isPlay = false;
 
playBtn.addEventListener('click', function() {
    isPlay = true;
    startWatch();
});
pauseBtn.addEventListener('click', function() {
    isPlay = false;
});
restartBtn.addEventListener('click', function() {
    isPlay = false;
    sec = 0;
    min = 0;
    count = 0;
    secEl.innerHTML = "00";
    minEl.innerHTML = "00";
    countEl.innerHTML = "00";
        
});

function startWatch() {
     if (isPlay == true) {
        count += 1;
        if (count == 100) {
            sec += 1;
            count = 0; 
            if (sec == 60) {
                min += 1;
                count = 0;
                sec = 0;
            }
        }
        let secString = sec;
        let minString = min;
        let hourString = count;
        if (sec < 10) {
             secString = "0" + secString;
        }
       if (min < 10) {
            minString =  "0" + minString;
        }
       if (count < 10 ) {
            hourString = "0" + hourString;
        }
        secEl.innerHTML = secString;
        minEl.innerHTML = minString;
        countEl.innerHTML = hourString;
        setTimeout(() => {
            startWatch();
        }, 10);
     }
    
}


function displayTime() {
    const d = new Date();
   let hours = d.getHours();
   let minuteso = d.getMinutes();
   let secondso = d.getSeconds();
   if (minuteso < 10) {
    minuteso = '0' + minuteso;
   }
   if (secondso < 10) {
    secondso = '0' + secondso;
   }
   if (hours < 10) {
    hours = '0' + hours;
   }
   if (hours > 12) {
    hours = hours - 12;
   }
   if (hours => 12) {
    document.querySelector('#season').innerHTML = "PM"
   }
   else {
    document.querySelector('#season').innerHTML = "AM"
   }
    document.querySelector('#clockHour').innerHTML = hours;
    document.querySelector('#clockMin').innerHTML = minuteso;
    document.querySelector('#clockSec').innerHTML = secondso;

}
setInterval(() => {
    displayTime();
}, 10);
