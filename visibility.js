//<input type="time" step="1" min="00:00:00" max="10:00:00">
//visibilty


const dataCalc = document.querySelector(".dataCalc");
const timers = document.querySelector(".timers");

const currentDate = document.querySelector(".currentDate");
const timer = document.querySelector(".timer");

dataCalc.addEventListener("click", (event) => {
    event.preventDefault();

    if (currentDate.style.visibility == "visible") {
        currentDate.style.visibility = "hidden";
    } else {
        currentDate.style.visibility = "visible";
    }
});

timers.addEventListener("click", (event) => {
    event.preventDefault();

    if (timer.style.visibility == "visible") {
        timer.style.visibility = "hidden";
    } else {
        timer.style.visibility = "visible";
    }
});


//Timer
const form = document.getElementById("form-timer");
const start = document.querySelector(".start");
const stop = document.querySelector(".stop");

let pResult = document.querySelector(".result");

form.addEventListener("change", (el) => {
    el.preventDefault();

    const h = el.currentTarget.elements.hours.value;
    const m = el.currentTarget.elements.minutes.value;
    const s = el.currentTarget.elements.seconds.value;
    console.log(h, m, s);
    let result = (h, m, s);

    pResult.innerHTML = `${Math.trunc(h)}:${Math.trunc(m)}:${s}`;
    console.log(pResult.innerText);
    let results = pResult.innerText.toString();
    //start Time
    let startTime;
    start.addEventListener("click", (event) => {
        event.preventDefault();
        console.log(results);

        //console.log("start");
        let t = setInterval(function() {
            results--;
            console.log(results);
        }, 1000);
});

        //const srartTime = function () {
       //};
        //const starts = setInterval(srartTime, 1000);
        //clearTimeout(timerId);

    //stop Time
    stop.addEventListener("click", (event) => {
        event.preventDefault();
        //console.log("stop");

    });
});


