let h1 = document.getElementById("h1")
let startButton = document.getElementById("start")
let stopButton = document.getElementById("stop")
let resetButton = document.getElementById("reset")

let startTime = null;
let intervalId = null;

function counter(){
    let now = Date.now();
    let elapsed = now - startTime;
    let seconds = Math.floor((elapsed / 1000) % 60);
    let minutes = Math.floor((elapsed / (1000 * 60)) % 60);
    let hours = Math.floor((elapsed / (1000 * 60 * 60)));

    h1.textContent = `${hours} : ${minutes} : ${seconds}`
}

startButton.addEventListener('click',()=>{
    if (intervalId === null) {
        startTime = Date.now();
        intervalId = setInterval(counter,1000);
    }
})

stopButton.addEventListener('click',()=>{
    if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
    }
})

resetButton.addEventListener('click',()=>{
    if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
    }
    startTime = null;
    h1.textContent = "0 : 0 : 0";
})
