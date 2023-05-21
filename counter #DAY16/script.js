let counter = document.querySelectorAll(".counter span");
let controls = document.querySelectorAll(".control button");

controls[1].onclick = function () {
  SecondsTimerFirstPart = setInterval(function () {
    if (Number(counter[3].innerHTML) <= 8) {
      counter[3].innerHTML = Number(counter[3].innerHTML) + 1;
    } else {
      counter[3].innerHTML = "0";
    }
  }, 1000);
  SecondsTimerSecondPart = setInterval(function () {
    if (Number(counter[2].innerHTML) < 5) {
      counter[2].innerHTML = Number(counter[2].innerHTML) + 1;
    } else {
      counter[2].innerHTML = "0";
    }
  }, 10000);
  MinutesTimerFirstPart = setInterval(function () {
    if (Number(counter[1].innerHTML) < 9) {
      counter[1].innerHTML = Number(counter[1].innerHTML) + 1;
    } else {
      counter[1].innerHTML = "0";
    }
  }, 60000);
  MinutesTimerSecondPart = setInterval(function () {
    if (Number(counter[0].innerHTML) <= 5) {
      counter[0].innerHTML = Number(counter[0].innerHTML) + 1;
    }
  }, 600000);
  if (Number(counter[0].innerHTML) > 5) {
    counter[1].innerHTML = "0";
    counter[2].innerHTML = "0";
    counter[3].innerHTML = "0";
  }
  controls[0].onclick = function () {
    clearInterval(SecondsTimerFirstPart);
    clearInterval(SecondsTimerSecondPart);
    clearInterval(MinutesTimerFirstPart);
    clearInterval(MinutesTimerSecondPart);
  };
  controls[2].onclick = function () {
    counter[0].innerHTML = "0";
    counter[1].innerHTML = "0";
    counter[2].innerHTML = "0";
    counter[3].innerHTML = "0";
    clearInterval(SecondsTimerFirstPart);
    clearInterval(SecondsTimerSecondPart);
    clearInterval(MinutesTimerFirstPart);
    clearInterval(MinutesTimerSecondPart);
  };
};
