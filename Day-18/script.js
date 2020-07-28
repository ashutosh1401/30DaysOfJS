const timeNodes = [...document.querySelectorAll("[data-time]")];
const seconds = timeNodes
  .map((node) => node.dataset.time)
  .map((time) => {
    const [mins, secs] = time.split(":").map(parseFloat);
    return mins * 60 + secs;
  })
  .reduce((total, vidSeconds) => total + vidSeconds);

let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;
const minute = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;
console.log(hours + ":" + minute + ":" + secondsLeft);
