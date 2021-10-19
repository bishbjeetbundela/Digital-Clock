function updateClock(){
    // Get the current date
    let currentTime = new Date();

    // Extract hour, minute and seconds from the date
    let currentHour = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();

    // Pad 0 if hours, minute and second is less than 10 (single digit)
    // currentHour = (currentHour < 10 ? "0": "") + currentHour; 
    currentMinutes = (currentMinutes < 10 ? "0": "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0": "") + currentSeconds; 

    // Choose AM/PM as per the time of the day
    let timeOfDay = (currentHour >= 12) ? "PM" : "AM";

    // Convert railway clock to AM/PM clock
    currentHour = (currentHour>12) ? currentHour - 12 : currentHour;
    currentHour = (currentHour==0) ?  12 : currentHour;
    

    // Prepare the time string from hours, minutes and seconds
    // let currentTimeStr = currentHour + ":" + currentMinutes  
    //                     + ":" + currentSeconds + " " + timeOfDay;

    // Insert the time string inside the DOM
    document.getElementById("hour").innerHTML = currentHour;
    document.getElementById("minute").innerHTML = currentMinutes;
    document.getElementById("second").innerHTML = currentSeconds;
    document.getElementById("format").innerHTML = timeOfDay;

}

let rotate = document.getElementById("rotate-arrow");
let rotate1 = document.getElementById("rotate-arrow-1");
let rotate2 = document.getElementById("rotate-arrow-2");
var rotateClick = false;
rotate.addEventListener('click', ()=>{
    if(rotateClick){
        rotate.style.transform = 'rotate(0deg)';
    }
    else{
        rotate.style.transform = 'rotate(180deg)';
    }
    rotateClick =!rotateClick;
})
rotate1.addEventListener('click', ()=>{
    if(rotateClick){
        rotate1.style.transform = 'rotate(0deg)';
    }
    else{
        rotate1.style.transform = 'rotate(180deg)';
    }
    rotateClick =!rotateClick;
})
rotate2.addEventListener('click', ()=>{
    if(rotateClick){
        rotate2.style.transform = 'rotate(0deg)';
    }
    else{
        rotate2.style.transform = 'rotate(180deg)';
    }
    rotateClick =!rotateClick;
})