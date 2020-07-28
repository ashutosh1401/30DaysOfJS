window.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; //if no audio edxists for that key
  audio.currentTime = 0; //rewind to the start
  audio.play();
  key.classList.add("playing");
});
//Adding Transition
function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  //console.log(e.propertyName);
  e.target.classList.remove("playing");
}
const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));