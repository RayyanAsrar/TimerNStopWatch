// let start= document.getElementById("start")
// let stopWatch= document.getElementById("stop")
// let reset= document.getElementById("reset")
// let display= document.getElementById("display")
// let counter=0
// let interval;
// let min=0;
// start.addEventListener('click', function(){
//     interval= setInterval(function(){
//         counter++
//         if(counter>3){
//        min++
//        counter=0
//     }
//         display.innerHTML=min
//         display.innerHTML=counter
//     },1000)
//     start.disabled=true
//     stopWatch.disabled=false
//     stopWatch.addEventListener('click',function(){
//         clearInterval(interval)
//         start.disabled=false
//         stopWatch.disabled=true
//     })
//     reset.addEventListener('click',function(){
//         clearInterval(interval)
//         counter=0
//         display.innerHTML =counter
//     })
// })
let start = document.getElementById("start");
let stopWatch = document.getElementById("stop");
let reset = document.getElementById("reset");
let display = document.getElementById("display");
let counter = 0;
let interval;
let min = 0;

start.addEventListener('click', function () {
    interval = setInterval(function () {
        counter++;
        if (counter >= 60) { 
            min++;           
            counter = 0; 
        }
        display.innerHTML = `${min}:${counter}`; // Display minutes and seconds
    }, 1000);
    start.disabled = true;
    stopWatch.disabled = false;

    stopWatch.addEventListener('click', function () {
        clearInterval(interval);
        start.disabled = false;
        stopWatch.disabled = true;
    });

    reset.addEventListener('click', function () {
        clearInterval(interval);
        counter = 0;
        min = 0;
        display.innerHTML = `0:00`; 
        start.disabled = false;
        stopWatch.disabled = true;
    });
});
