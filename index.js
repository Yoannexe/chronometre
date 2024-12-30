const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const secondes = document.getElementById("secondes");
const resetBtn = document.getElementById("reset");
const stopBtn = document.getElementById("stop");
const startBtn = document.getElementById("start");

let interval ;

const addTime = () => {
    if (eval(secondes.innerHTML) < 59 ){
        if (eval(secondes.innerHTML) < 9) {
            console.log(eval(secondes.innerHTML))
            secondes.innerHTML = ` 0${eval(secondes.innerHTML) + 1}`
        }
        else {
            console.log(eval(secondes.innerHTML) , "Else statement")
            secondes.innerHTML = eval(secondes.innerHTML) + 1
        }
    } else {
        secondes.innerHTML = "00"
        if (eval(minutes.innerHTML) < 59){
            if (eval(minutes.innerHTML) < 9) {
                minutes.innerHTML = ` 0${eval(minutes.innerHTML) + 1}`
            }
            else {
                minutes.innerHTML = eval(minutes.innerHTML) + 1
        }}

        else {
            minutes.innerHTML = "00"
            if (eval(hours.innerHTML) < 23){
                if (eval(hours.innerHTML) < 9) {
                    hours.innerHTML = ` 0${eval(hours.innerHTML) + 1}`
                }
                else {
                    hours.innerHTML = eval(hours.innerHTML) + 1
            }}

            else {
                alert("THIS IS A NEW DAY")
                secondes.innerHTML = "00"
                minutes.innerHTML = "00"
                hours.innerHTML = "00"
            }
        }
}
}

startBtn.addEventListener("click", () => {
    clearInterval(interval)
     interval = setInterval(addTime,1000)

})

stopBtn.addEventListener("click" , () => {
    clearInterval(interval)
})

resetBtn.addEventListener("click", () => {
    clearInterval(interval)
    secondes.innerHTML = "00"
    minutes.innerHTML = "00"
    hours.innerHTML = "00"
})