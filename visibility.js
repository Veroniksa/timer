//visibilty

import './node_modules/howler/dist/howler.min.js';


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
  let result = (h, m, s);

  pResult.innerHTML = `${h}:${m}:${s}`;
  //console.log(pResult.innerText);
  let resultH = h;
  let resultM = m;
  let resultS = s;
  //start Time
  let startTime;
  start.addEventListener("click", (event) => {
    event.preventDefault();

    let t = setInterval(function () {
      if ((resultS) > 0) {
        resultS--;
        pResult.innerHTML = `${resultH}:${resultM}:${resultS}`;
      } else if (resultM > 0) {
        resultM--;
        resultS = 60;
        resultS--;
        pResult.innerHTML = `${resultH}:${resultM}:${resultS}`;

      } else if (resultH > 0 & resultM == 0) {
        resultH--;
        resultM = 59;
        resultS = 60;
        resultS--;
        pResult.innerHTML = `${resultH}:${resultM}:${resultS}`;
      } else {
        pResult.innerHTML = `<span>Il tempo è finito</span>`;
        clearTimeout(t);
        // Setup the new Howl.
        /*const sound = new Howl({
          src: ['sound.webm', 'sound.mp3']
        });

        // Play the sound.
        sound.play();
        sound.duration(2000);

        // Change global volume.
        Howler.volume(0.5);*/
        var sound = new Howl({
          src: ['./suono.mp3'],
          autoplay: true,
          volume: 0.5,
          onend: function() {
            console.log('Finished!');
          }
        });
      }
    }, 1000);

    stop.addEventListener("click", (event) => {
      event.preventDefault();
      clearTimeout(t);

    });
  });

});