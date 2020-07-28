const pressed = [];
const secretCode = "ashutosh";
window.addEventListener("keyup", (e) => {
  console.log(e.key);
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  if (pressed.join("").includes(secretCode)) {
    console.log("Hello !! ding ding");
    cornify_add();
  }
  console.log(pressed);
});
