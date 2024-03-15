function clock(){
    console.clear()
    console.log(new Date().toLocaleTimeString())
}

setInterval(clock,1000)